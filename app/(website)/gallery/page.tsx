"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { event as gaEvent } from "@/lib/gtag";
import { SiteLayout } from "@/components/layout/SiteLayout";
import Page from "@/app/page";
import PageHero from "@/components/shared/PageHero";



const categories = [
  "All",
  "School",
  "Teachers",
  "Events",
  "Sports",
  "Arts",
  "Activities",
  "Educational Tour",
];


type galleryItem = {
  id: number;
  category: string;
  title: string;
  url: string;
};



export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<galleryItem | null>(null);
  const [galleryItems, setGalleryItems] = useState<galleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");




  const fetchGallery = async () => {
    try {
      setLoading(true);
  
      const res = await fetch("/api/gallery");
      if (!res.ok) throw new Error("Failed to fetch");
  
      const data = await res.json();
  
      // console.log("public gallery:", data);   //debug
  
      const items = Array.isArray(data) ? data : data.data || data.gallery || [];
  
      setGalleryItems(items);
    } catch (err) {
      // console.error(err);
      setError("Failed to load gallery");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
      fetchGallery();
  }, []);




  useEffect(() => {
    document.body.style.overflow = selectedItem ? "hidden" : "auto";
  }, [selectedItem]);




  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);




  // next and previous logic
  const currentIndex = filteredItems.findIndex(
    (item) => item.id === selectedItem?.id
  );
  
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };
  
  const handlePrev = () => {
    const prevIndex =
      (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };




  //for full secreen view next. prev
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
  
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedItem(null);
    };
  
    window.addEventListener("keydown", handleKeyDown);
  
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, currentIndex]);




  const isVideo = (url: string) =>
    /\.(mp4|webm|ogg|mov)$/i.test(url) || url.includes("/video/");




  return (
    <SiteLayout>
      {/* ================= HERO ================= */}
      <PageHero
        title="Our Gallery"
        subtitle="Explore beautiful moments captured from school life, events, sports, and activities."
        badge="CHECK IT OUT"
      />

      {/* ================= FILTER ================= */}
      <section className="section-padding bg-background">
        <div className="container-school">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-gradient-hero text-primary-foreground shadow-golden"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>


          {/* ================= LOADING ================= */}
           {loading && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl bg-muted animate-pulse"
                />
              ))}
            </div>
          )}




        {/* ================= ERROR ================= */}
          {error && (
            <div className="text-center py-16">
              <p className="text-red-500">{error}</p>
            </div>
          )}





          {/* ================= GRID ================= */}
          {!loading && !error && (
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                // onClick={() => setSelectedItem(item)}

                onClick={() => {
                  gaEvent({
                    action: "click_gallery_image",
                    category: "Gallery",
                    label: item.title,
                  });
                  setSelectedItem(item);
                }}
                className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
              >
                <div className="relative w-full h-full">
                  {isVideo(item.url) ? (
                    <>
                      <video
                        src={item.url}
                        className="w-full h-full object-cover"
                        muted
                      />

                      {/* ▶ PLAY BUTTON */}
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/50 backdrop-blur-md shadow-lg">
                          <Play className="w-6 h-6 text-black ml-1" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <Image
                      src={item.url}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="font-heading font-bold text-lg">
                      {item.title}
                    </p>
                    <p className="text-sm text-white/80">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          )}



          {/* Empty State */}
          {activeCategory !== "All" && filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>



      {/* ================= LIGHTBOX ================= */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setSelectedItem(null)}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition z-50"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* PREVIOUS BUTTON */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute text-xl  left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary/40 hover:text-white transition z-50 cursor-pointer"
          >
            &lt;
          </button>

          {/* NEXT BUTTON */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute text-xl right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary/40 hover:text-white transition z-50 cursor-pointer"
          >
            &gt;
          </button>

          {/* IMAGE */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-6xl w-full max-h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {isVideo(selectedItem.url) ? (
              <video
                src={selectedItem.url}
                controls
                muted
                autoPlay
                className="max-h-[80vh] w-auto h-auto"
              />
            ) : (
              <Image
                src={selectedItem.url}
                alt={selectedItem.title}
                width={1200}
                height={800}
                className="object-contain max-h-[80vh] w-auto h-auto"
              />
            )}
          </motion.div>

          {/* BOTTOM INFO */}
          <div className="absolute bottom-6 text-center w-full px-4">
            <p className="text-white text-lg font-semibold">
              {selectedItem.title}
            </p>
            <p className="text-white/70 text-sm">
              {selectedItem.category}
            </p>
          </div>
        </motion.div>
      )}

    </SiteLayout>
  );
}


