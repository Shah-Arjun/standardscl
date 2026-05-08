"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { testimonials } from "@/data/data";




export const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);



  //  Set initial position (middle)
  // useEffect(() => {
  //   if (scrollRef.current) {
  //     scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 2;
  //   }
  // }, []);




  //  Auto scroll (smooth + infinite)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;

      el.scrollLeft += 1;

      const halfWidth = el.scrollWidth / 2;

      // seamless loop
      if (el.scrollLeft >= halfWidth) {
        el.scrollLeft -= halfWidth;
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isHovered]);

  //  Manual scroll (buttons)
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };



  return (
    <section className="section-padding bg-background">
      <div className="container-school">
        <SectionHeader
          title="Parents Voice"
          subtitle="Real stories from parents who trust us with their children's future"
        />

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          {/* Gradients in both sides */}
          <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scroll Area */}
          <motion.div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-2"
            whileTap={{ cursor: "grabbing" }}
          >
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                className="min-w-[260px] sm:min-w-[280px] max-w-[320px] bg-card rounded-2xl p-5 sm:p-6 shadow-md border border-border flex-shrink-0 hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <Quote className="w-6 h-6 text-primary mb-3" />

                <p className="text-sm mb-4 italic">
                  &quot;{item.feedback}&quot;
                </p>

                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < item.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>

                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-xs text-muted-foreground">
                  Parent of {item.childGrade}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {item.date}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};