"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Image from "next/image";
import parent1 from "@/public/parent-1.jpg";
import parent2 from "@/public/parent-2.jpg";
import parent3 from "@/public/parent-3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Sunita Sharma",
    childGrade: "Grade 8",
    feedback:
      "The teachers at Standard Secondary are truly dedicated. My son has shown tremendous improvement in both academics and confidence. The boarding facility is excellent with a homely atmosphere.",
    image: parent1,
  },
  {
    id: 2,
    name: "Rajesh Adhikari",
    childGrade: "Grade 5",
    feedback:
      "We chose this school for its discipline and quality education. The regular updates about our child's progress and the safety measures give us complete peace of mind.",
    image: parent2,
  },
  {
    id: 3,
    name: "Kamala Thapa",
    childGrade: "Grade 10",
    feedback:
      "Both my children studied here. The holistic approach to education - academics, sports, and values - has shaped them into confident individuals. Highly recommended!",
    image: parent3,
  },
];

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const next = () => {
    setAutoPlay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setAutoPlay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-school">
        <SectionHeader
          title="Parents' Voice"
          subtitle="Hear what parents have to say about their experience with our school"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center shadow-golden">
              <Quote className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="bg-card rounded-3xl p-8 md:p-12 pt-16 shadow-lg border border-border relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <p className="text-lg md:text-xl text-foreground leading-relaxed text-center mb-8 italic">
                  "{testimonials[current].feedback}"
                </p>

                <div className="flex flex-col items-center">
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-primary shadow-lg mb-4"
                  />
                  <h4 className="font-heading font-bold text-lg text-foreground">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-muted-foreground">
                    Parent of {testimonials[current].childGrade} student
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setAutoPlay(false);
                      setCurrent(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === current
                        ? "bg-primary w-8"
                        : "bg-muted hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
