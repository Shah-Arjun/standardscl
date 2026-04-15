"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadCloud, Trash2, X } from "lucide-react";
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

  // Deletion states
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Fetch images
  const fetchGalleryData = async () => {
    try {
      const res = await fetch("/api/gallery");
      if (!res.ok) throw new Error("Failed to fetch gallery data");

      const jsonData = await res.json();
      setImages(jsonData.data || []);
      setFilteredImages(jsonData.data || []);
      setSelectedIds([]); // Clear selection on refresh
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
      setFilteredImages(
        images.filter((img) => img.category === selectedCategory)
      );
    }
  }, [selectedCategory, images]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setForm((prev) => ({ ...prev, image: e.target.files![0] }));
    }
  };

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
      data.append("title", form.title || "");
      data.append("category", form.category);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: data,
      });

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

  // Toggle individual selection
  const toggleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  // Select All / Deselect All
  const toggleSelectAll = () => {
    if (selectedIds.length === filteredImages.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredImages.map((img) => img.id));
    }
  };

  // Delete handler
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

      if (!res.ok) throw new Error(json.message || "Delete failed");

      await fetchGalleryData();
      setSelectedIds([]);
      setShowDeleteDialog(false);
      alert(`${selectedIds.length} item(s) deleted successfully`);
    } catch (err) {
      console.error(err);
      alert("Failed to delete items. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="p-6 space-y-6 max-w-auto mx-auto">
      {/* Header with always visible Delete button */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center gap-3">
          Upload Images/Videos
        </h1>
{/* 
        <Button
          variant="destructive"
          onClick={() => setShowDeleteDialog(true)}
          disabled={selectedIds.length === 0}
          className="flex items-center gap-2"
        >
          <Trash2 className="w-5 h-5" />
          Delete ({selectedIds.length})
        </Button> */}
      </div>



      {/* Upload Form */}
      <Card className="p-6 shadow-md max-w-4xl items-center mx-auto">
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
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl cursor-pointer hover:bg-gray-50 transition">
              <UploadCloud className="w-8 h-8 mb-2 text-gray-500" />
              <p className="text-sm text-green-600 underline">
                Click here to upload
              </p>
              <p className="text-xs text-gray-400">
                Image: jpg, jpeg, png, webp (Max 10MB)
              </p>
              <p className="text-xs text-gray-400">
                Video: mp4, mov, webm (Max 100MB)
              </p>
              <input
                type="file"
                accept="image/*,video/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

            {form.image && (
              <p className="text-sm text-gray-600">
                Selected: {form.image.name}
              </p>
            )}

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

      {/* Select All Option */}
      {filteredImages.length > 0 && (
        <div className="flex items-center justify-between bg-muted/50 p-3 rounded-lg">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleSelectAll}
          >
            {selectedIds.length === filteredImages.length && filteredImages.length > 0
              ? "Deselect All"
              : `Select All (${filteredImages.length})`}
          </Button>

          {selectedIds.length > 0 && (
            <span className="text-sm text-muted-foreground">
              {selectedIds.length} item{selectedIds.length > 1 ? "s" : ""} selected
            </span>
          )}

          <div>
            <Trash2
              className="w-5 h-5 text-muted-foreground cursor-pointer"
            />
          </div>
        </div>
      )}





      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-5">
        {filteredImages.map((img) => {
          const isSelected = selectedIds.includes(img.id);

          return (
            <Card
              key={img.id}
              className={`overflow-hidden hover:shadow-lg transition relative group ${
                isSelected ? "ring-2 ring-destructive ring-offset-2" : ""
              }`}
            >
              {/* Checkbox - Always visible on hover + when selected */}
              <div className="absolute top-3 right-3 z-20">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleSelect(img.id)}
                  className="w-5 h-5 rounded border-2 border-white bg-white/90 shadow-sm cursor-pointer accent-destructive"
                />
              </div>

              {/* Media Preview */}
              {img.url.match(/\.(mp4|webm|ogg|mov)$/i) ? (
                <video
                  src={img.url}
                  controls
                  className="w-full h-48 object-cover"
                />
              ) : (
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-48 object-cover"
                />
              )}

              <CardContent className="p-3">
                <h2 className="font-semibold text-lg line-clamp-1">{img.title}</h2>
                <p className="text-sm text-gray-500">{img.category}</p>
              </CardContent>
            </Card>
          );
        })}

        {filteredImages.length === 0 && (
          <p className="col-span-full text-center text-gray-500 py-12 text-lg">
            No {selectedCategory !== "All" ? selectedCategory.toLowerCase() : ""} items found.
          </p>
        )}
      </div>





      {/* Delete Confirmation Dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <Trash2 className="w-5 h-5 text-destructive" />
              Delete Selected Items
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. You are about to permanently delete{" "}
              <strong className="text-destructive">{selectedIds.length}</strong>{" "}
              item(s) from the gallery.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={isDeleting}
              className="bg-destructive hover:bg-destructive/90"
            >
              {isDeleting ? "Deleting..." : "Yes, Delete Permanently"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}