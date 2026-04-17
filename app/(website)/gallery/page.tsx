"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
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
  "Activities",
  "Educational Tour",
];



const galleryItems = [
  {
    id: 1,
    category: "School",
    title: "School Building",
    image: "/sclbuilding.jpg",
  },
  {
    id: 2,
    category: "School",
    title: "Bus",
    image: "/bus.jpg",
  },
  {
    id: 3,
    category: "School",
    title: "Logo",
    image: "/SchoolLogo.png",
  },
  {
    id: 4,
    category: "Events",
    title: "Prize Distribution",
    image: "/prize1.jpg",
  },
  {
    id: 5,
    category: "Sports",
    title: "Sports Week",
    image: "/sports.jpg",
  },
  {
    id: 6,
    category: "Sports",
    title: "Sports Week",
    image: "/activities-illustration.jpg",
  },
  {
    id: 7,
    category: "Activities",
    title: "Art Exhibition",
    image: "/art2.jpg",
  },
  {
    id: 8,
    category: "Activities",
    title: "Art Exhibition",
    image: "/art1.jpg",
  },
  {
    id: 10,
    category: "Events",
    title: "Lakhe",
    image: "/lakhe.jpg",
  },
  {
    id: 11,
    category: "Teachers",
    title: "SSBS",
    image: "/ssbsTeachers.jpg",
  },
  {
    id: 12,
    category: "Educational Tour",
    title: "Janakpur",
    image: "/tour1.jpg",
  },
  {
    id: 13,
    category: "Educational Tour",
    title: "Pokhara",
    image: "/tour2.jpg",
  },
  {
    id: 14,
    category: "Educational Tour",
    title: "Lumbini",
    image: "/tour3.jpg",
  },
  {
    id: 15,
    category: "Events",
    title: "Annual Day",
    image: "/event1.jpg",
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

  useEffect(() => {
    document.body.style.overflow = selectedItem ? "hidden" : "auto";
  }, [selectedItem]);



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
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
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
            {/* lightbox image */}
            <Image
              src={selectedItem.image}
              alt={selectedItem.title}
              fill
              sizes="90vw"
              className="object-contain bg-black"
            />
          </motion.div>
        </motion.div>
      )}
    </SiteLayout>
  );
}







// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { X } from "lucide-react";
// import { event as gaEvent } from "@/lib/gtag";
// import { SiteLayout } from "@/components/layout/SiteLayout";
// import PageHero from "@/components/shared/PageHero";




// const categories = [
//   "All",
//   "School",
//   "Students",
//   "Teachers",
//   "Events",
//   "Sports",
//   "Activities",
//   "Educational Tour",
// ];




// type GalleryItem = {
//   id: number;
//   category: string;
//   title: string;
//   url: string;
// };




// export default function Gallery() {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
//   const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");




//   const fetchGallery = async () => {
//     try {
//       setLoading(true);
  
//       const res = await fetch("/api/gallery");
//       if (!res.ok) throw new Error("Failed to fetch");
  
//       const data = await res.json();
  
//       console.log("API:", data);
  
//       const items = Array.isArray(data)
//         ? data
//         : data.data || data.gallery || [];
  
//       setGalleryItems(items);
//     } catch (err) {
//       console.error(err);
//       setError("Failed to load gallery");
//     } finally {
//       setLoading(false);
//     }
//   };




//   useEffect(() => {
//     fetchGallery();
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = selectedItem ? "hidden" : "auto";
//   }, [selectedItem]);

//   const filteredItems =
//     activeCategory === "All"
//       ? galleryItems
//       : galleryItems.filter((item) => item.category === activeCategory);

//   return (
//     <SiteLayout>
//       {/* HERO */}
//       <PageHero
//         title="Our Gallery"
//         subtitle="Explore beautiful moments captured from school life, events, sports, and activities."
//         badge="CHECK IT OUT"
//       />

//       <section className="section-padding bg-background">
//         <div className="container-school">
          
//           {/* FILTER */}
//           <div className="flex flex-wrap justify-center gap-3 mb-12">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-6 py-2 rounded-full font-medium transition-all ${
//                   activeCategory === category
//                     ? "bg-gradient-hero text-primary-foreground shadow-golden"
//                     : "bg-muted text-muted-foreground hover:bg-primary/10"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           {/* ================= LOADING ================= */}
//           {loading && (
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//               {[...Array(8)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="aspect-square rounded-2xl bg-muted animate-pulse"
//                 />
//               ))}
//             </div>
//           )}

//           {/* ================= ERROR ================= */}
//           {error && (
//             <div className="text-center py-16">
//               <p className="text-red-500">{error}</p>
//             </div>
//           )}

//           {/* ================= GRID ================= */}
//           {!loading && !error && (
//             <motion.div
//             layout
//             className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
//           >
//             {filteredItems.map((item) => (
//               <motion.div
//                 key={item.id}
//                 layout
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 // onClick={() => setSelectedItem(item)}

//                 onClick={() => {
//                   gaEvent({
//                     action: "click_gallery_image",
//                     category: "Gallery",
//                     label: item.title,
//                   });
//                   setSelectedItem(item);
//                 }}
//                 className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
//               >
//                 <Image
//                   src={item.url}
//                   alt={item.title}
//                   fill
//                   sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />

//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//                   <div className="text-center text-white">
//                     <p className="font-heading font-bold text-lg">
//                       {item.title}
//                     </p>
//                     <p className="text-sm text-white/80">{item.category}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//           )}

//           {/* EMPTY STATE */}
//           {!loading && filteredItems.length === 0 && (
//             <div className="text-center py-16">
//               <p className="text-muted-foreground">
//                 No images found in this category.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* ================= LIGHTBOX ================= */}
//       {selectedItem && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
//           onClick={() => setSelectedItem(null)}
//         >
//           <button
//             className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"
//             onClick={() => setSelectedItem(null)}
//           >
//             <X className="w-6 h-6 text-white" />
//           </button>

//           <motion.div
//             initial={{ scale: 0.9 }}
//             animate={{ scale: 1 }}
//             className="relative max-w-5xl w-full aspect-video"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <Image
//               src={selectedItem.url}
//               alt={selectedItem.title}
//               fill
//               className="object-contain bg-black rounded-2xl"
//             />
//           </motion.div>
//         </motion.div>
//       )}
//     </SiteLayout>
//   );
// }