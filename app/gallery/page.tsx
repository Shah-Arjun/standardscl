"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { X } from "lucide-react";

const categories = ["All", "Campus", "Events", "Sports", "Activities"];

const galleryItems = [
  {
    id: 1,
    category: "Campus",
    title: "School Building",
    color: "from-amber-400 to-orange-500",
  },
  {
    id: 2,
    category: "Events",
    title: "Annual Day",
    color: "from-pink-400 to-rose-500",
  },
  {
    id: 3,
    category: "Sports",
    title: "Sports Week",
    color: "from-green-400 to-emerald-500",
  },
  {
    id: 4,
    category: "Activities",
    title: "Art Exhibition",
    color: "from-blue-400 to-cyan-500",
  },
  {
    id: 5,
    category: "Campus",
    title: "Library",
    color: "from-purple-400 to-violet-500",
  },
  {
    id: 6,
    category: "Events",
    title: "Science Fair",
    color: "from-red-400 to-rose-500",
  },
  {
    id: 7,
    category: "Sports",
    title: "Cricket Match",
    color: "from-yellow-400 to-amber-500",
  },
  {
    id: 8,
    category: "Activities",
    title: "Music Class",
    color: "from-indigo-400 to-blue-500",
  },
  {
    id: 9,
    category: "Campus",
    title: "Computer Lab",
    color: "from-teal-400 to-cyan-500",
  },
  {
    id: 10,
    category: "Events",
    title: "Cultural Program",
    color: "from-orange-400 to-red-500",
  },
  {
    id: 11,
    category: "Sports",
    title: "Football Tournament",
    color: "from-lime-400 to-green-500",
  },
  {
    id: 12,
    category: "Activities",
    title: "Dance Performance",
    color: "from-fuchsia-400 to-pink-500",
  },
];

const Gallery = () => {
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
      {/* Hero */}
      <section className="bg-gradient-hero section-padding text-primary-foreground p-8">
        <div className="container-school text-center">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-600 uppercase text-sm font-semibold tracking-wider">
              Our Gallery
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-gray-800 font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Beautiful Moments
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Explore our collection of stunning photography and memorable moments captured through our lens.
            </p>
          </motion.div>
        </div>

        {/* <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
                    <span className="text-blue-600 uppercase text-sm font-semibold tracking-wider">Our Gallery</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                    Beautiful Moments
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Explore our collection of stunning photography and memorable moments captured through our lens.
                </p>
            </div> */}
      </section>
      

      {/* Gallery */}
      <section className="section-padding bg-background">
        <div className="container-school">
          {/* Category Filter */}
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

          {/* Gallery Grid */}
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
                <div
                  className={`w-full h-full bg-gradient-to-br ${item.color} flex items-center justify-center`}
                >
                  <span className="text-white/30 text-4xl font-bold">
                    {item.id}
                  </span>
                </div>
                <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
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

      {/* Lightbox */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`aspect-video rounded-2xl bg-gradient-to-br ${selectedItem.color} flex items-center justify-center`}
            >
              <span className="text-white/30 text-8xl font-bold">
                {selectedItem.id}
              </span>
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-heading font-bold text-2xl text-white">
                {selectedItem.title}
              </h3>
              <p className="text-white/80">{selectedItem.category}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </SiteLayout>
  );
};

export default Gallery;
