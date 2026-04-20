"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadCloud, Trash2, X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Dialog, DialogContent } from "@/components/ui/dialog";




interface ImageItem {
  id: number;
  title: string;
  category: string;
  url: string;
}




interface FormState {
  title: string;
  category: string;
  image: File | null;
}



const categories: string[] = [
  "All",
  "School",
  "Teachers",
  "Students",
  "Events",
  "Sports",
  "Activities",
  "Arts",
  "Educational Tour",
  "Memories",
];



export default function AdminImagePage() {
  const [form, setForm] = useState<FormState>({
    title: "",
    category: "School",
    image: null,
  });

  const [images, setImages] = useState<ImageItem[]>([]);
  const [filteredImages, setFilteredImages] = useState<ImageItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [loading, setLoading] = useState<boolean>(false);

  // Selection & Delete
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Full-screen Viewer
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);



  // Fetch images
  const fetchGalleryData = async () => {
    try {
      const res = await fetch("/api/gallery");
      if (!res.ok) throw new Error("Failed to fetch gallery data");

      const jsonData = await res.json();
      setImages(jsonData.data || []);
      setFilteredImages(jsonData.data || []);
      setSelectedIds([]);
    } catch (err) {
      console.error("Failed to fetch gallery data:", err);
    }
  };





  useEffect(() => {
    fetchGalleryData();
  }, []);






  // Filter logic
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter((img) => img.category === selectedCategory));
    }
  }, [selectedCategory, images]);

  // Keyboard navigation for viewer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!viewerOpen) return;

      if (e.key === "Escape") {
        setViewerOpen(false);
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [viewerOpen, filteredImages.length]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setForm((prev) => ({ ...prev, image: e.target.files![0] }));
    }
  };





// upload files
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.image) {
      alert("Please select an image or video");
      return;
    }

    try {
      setLoading(true);
      const data = new FormData();
      data.append("file", form.image);
      data.append("title", form.title || " ");
      data.append("category", form.category);

      const res = await fetch("/api/admin/upload", { method: "POST", body: data });
      const json = await res.json();

      if (!res.ok) throw new Error(json.message || "Upload failed");

      await fetchGalleryData();
      alert("Upload successful!");
      setForm({ title: "", category: "School", image: null });
    } catch (err) {
      alert("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredImages.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredImages.map((img) => img.id));
    }
  };

  const openViewer = (index: number) => {
    setCurrentIndex(index);
    setViewerOpen(true);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };









  // delete handler - Improved Version
  const handleDelete = async () => {
    if (selectedIds.length === 0) return;
  
    setIsDeleting(true);
  
    try {
      const res = await fetch("/api/admin/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: selectedIds }),
      });
  
      const json = await res.json();
  
      if (!res.ok) {
        throw new Error(json.message || "Delete failed");
      }
  
      // Success
      await fetchGalleryData();           // Refresh the gallery
      setSelectedIds([]);                 // Clear selection
      setShowDeleteDialog(false);         // Close dialog
  
      alert(`${selectedIds.length} item(s) deleted successfully`);
  
    } catch (err: any) {
      console.error("Delete error:", err);
      
      const errorMessage = "Failed to delete items. Please try again.";
      alert(errorMessage);
    } finally {
      setIsDeleting(false);
    }
  };

  

  const currentItem = filteredImages[currentIndex];



  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gallery Management</h1>

        <Button
          variant="destructive"
          onClick={() => setShowDeleteDialog(true)}
          disabled={selectedIds.length === 0}
          className="flex items-center gap-2"
        >
          <Trash2 className="w-5 h-5" />
          Delete Selected ({selectedIds.length})
        </Button>
      </div>

      {/* Upload Form */}
      <Card className="p-6 shadow-md max-w-4xl mx-auto">
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="title"
              placeholder="Enter image/video title"
              value={form.title}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            >
              {categories.slice(1).map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl cursor-pointer hover:bg-gray-50 transition">
              <UploadCloud className="w-8 h-8 mb-2 text-gray-500" />
              <p className="text-sm text-green-600 underline">Click here to upload</p>
              <p className="text-xs text-gray-400">Image: jpg, jpeg, png, webp (Max 10MB)</p>
              <p className="text-xs text-gray-400">Video: mp4, mov, webm (Max 100MB)</p>
              <input
                type="file"
                accept="image/*,video/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

            {form.image && <p className="text-sm text-gray-600">Selected: {form.image.name}</p>}

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Uploading..." : "Upload"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "default" : "outline"}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>



      {/* Select All + Delete Button */}
      {filteredImages.length > 0 && (
        <div className="flex items-center justify-between bg-muted/50 p-3 rounded-lg">
          <Button variant="outline" size="sm" onClick={toggleSelectAll}>
            {selectedIds.length === filteredImages.length && filteredImages.length > 0
              ? "Deselect All"
              : `Select All (${filteredImages.length})`}
          </Button>

          {selectedIds.length > 0 && (
            <span className="text-sm text-muted-foreground">
              {selectedIds.length} item{selectedIds.length > 1 ? "s" : ""} selected
            </span>
          )}

          {/* Working Delete Button */}
          <Button
            variant="destructive"
            onClick={() => setShowDeleteDialog(true)}
            disabled={selectedIds.length === 0}
            className=" bg-white text-black border p-4 hover:border-red-500 hover:text-red-500"
          >
            <Trash2 className="w-6 h-6" />
          </Button>
        </div>
      )}




      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {filteredImages.map((img, index) => {
          const isSelected = selectedIds.includes(img.id);

          return (
            <Card
              key={img.id}
              className={`overflow-hidden hover:shadow-xl transition relative group cursor-pointer ${
                isSelected ? "ring-2 ring-destructive ring-offset-2" : ""
              }`}
              onClick={() => openViewer(index)}
            >
              {/* Checkbox */}
              <div className="absolute top-3 right-3 z-30" onClick={(e) => e.stopPropagation()}>
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleSelect(img.id)}
                  className="w-5 h-5 rounded border-2 border-white bg-white/90 cursor-pointer accent-destructive"
                />
              </div>

              <div className="relative w-full h-48">
                {img.url.match(/\.(mp4|webm|ogg|mov)$/i) ? (
                  <>
                    <video
                      src={img.url}
                      className="w-full h-full object-cover"
                      muted
                    />

                    {/* ▶ PLAY BUTTON OVERLAY */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/60 backdrop-blur-md shadow-lg">
                        <Play className="w-7 h-7 text-gray-800" />
                      </div>
                    </div>
                  </>
                ) : (
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <CardContent className="p-3">
                <h2 className="font-semibold line-clamp-1">{img.title}</h2>
                <p className="text-sm text-gray-500">{img.category}</p>
              </CardContent>
            </Card>
          );
        })}

        {filteredImages.length === 0 && (
          <p className="col-span-full text-center text-gray-500 py-12 text-lg">
            No items found in this category.
          </p>
        )}
      </div>



      {/* Full Screen Viewer */}
      <Dialog open={viewerOpen} onOpenChange={setViewerOpen}>
        <DialogContent className="max-w-7xl p-0 overflow-hidden bg-black border-none">
          {currentItem && (
            <div className="relative w-full h-[92vh] flex items-center justify-center bg-black">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-6 right-6 z-50 text-white hover:bg-white/20 rounded-full"
                onClick={() => setViewerOpen(false)}
              >
                <X className="w-7 h-7" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-6 z-50 text-white hover:bg-white/20 rounded-full"
                onClick={goToPrevious}
              >
                <ChevronLeft className="w-10 h-10" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-6 z-50 text-white hover:bg-white/20 rounded-full"
                onClick={goToNext}
              >
                <ChevronRight className="w-10 h-10" />
              </Button>

              {currentItem.url.match(/\.(mp4|webm|ogg|mov)$/i) ? (
                <video
                  src={currentItem.url}
                  controls
                  autoPlay
                  muted
                  className="max-h-[85vh] max-w-full"
                />
              ) : (
                <img
                  src={currentItem.url}
                  alt={currentItem.title}
                  className="max-h-[85vh] max-w-full object-contain"
                />
              )}

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8 text-white">
                <h2 className="text-3xl font-semibold mb-1">{currentItem.title}</h2>
                <p className="text-gray-300 text-lg">{currentItem.category}</p>
              </div>

              <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-black/50 px-3 py-1 rounded">
                ← → Arrow keys • ESC to close
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>



      {/* Delete Confirmation Dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <Trash2 className="w-5 h-5 text-destructive" />
              Delete {selectedIds.length} item(s)?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={isDeleting}
              className="bg-destructive hover:bg-destructive/90 border hover:bg-red-600"
            >
              {isDeleting ? "Deleting..." : "Delete Permanently"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}