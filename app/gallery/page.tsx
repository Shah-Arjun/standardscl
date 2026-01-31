"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

import { SiteLayout } from "@/components/layout/SiteLayout";

const categories = ["All", "Campus", "Events", "Sports", "Activities"];

const galleryItems = [
  {
    id: 1,
    category: "Campus",
    title: "School Building",
    image: "/activities-illustration.jpg",
  },
  {
    id: 2,
    category: "Campus",
    title: "Library",
    image: "/hero-illustration.jpg",
  },
  {
    id: 3,
    category: "Events",
    title: "Annual Day",
    image: "/ssbsTeachers.jpg",
  },
  {
    id: 4,
    category: "Events",
    title: "Science Fair",
    image: "/ssbsTeachers.jpg",
  },
  {
    id: 5,
    category: "Sports",
    title: "Sports Week",
    image: "/principal.jpg",
  },
  {
    id: 6,
    category: "Activities",
    title: "Art Exhibition",
    image: "/teacher-1.jpg",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<
    (typeof galleryItems)[0] | null
  >(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <SiteLayout>
      {/* ================= HERO ================= */}
      <section className="bg-gradient-hero section-padding text-primary-foreground">
        <div className="container-school text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4"
          >
            Our Gallery
          </motion.h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Explore beautiful moments captured from school life, events, sports,
            and activities.
          </p>
        </div>
      </section>

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

          {/* ================= GRID ================= */}
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
                onClick={() => setSelectedItem(item)}
                className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

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

          {/* Empty State */}
          {filteredItems.length === 0 && (
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
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-5xl w-full aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedItem.image}
              alt={selectedItem.title}
              fill
              className="object-contain bg-black"
            />
          </motion.div>
        </motion.div>
      )}
    </SiteLayout>
  );
}
