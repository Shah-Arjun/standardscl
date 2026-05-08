"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import book from "@/public/book.png";
import ssbsTeachers from "@/public/ssbsTeachers.jpg";
import { TypewriterText } from "../typewriter/TypewriterText";
import { event as gaEvent } from "@/lib/gtag";





export const HeroSection = () => {
  return (
    <section className="relative flex items-center overflow-x-hidden py-12 sm:py-16 lg:py-0 min-h-[92svh] lg:min-h-[90svh]">
      {/* ================= BACKGROUND IMAGE =================*/}
      <div className="absolute inset-0 -z-20">
        <Image
          src={ssbsTeachers}
          alt="Standard Secondary Boarding School Teachers"
          fill
          priority
          className="object-cover object-center opacity-60"
        />
      </div>



      {/* ================= OVERLAY  for bg image =================*/}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-background/70 via-background/60 to-background/90" />




      {/* ================= MAIN CONTENT ================= */}
      <div className="container-hero relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ================= LEFT : TEXT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left w-full lg:pr-8 mx-auto lg:mx-0 space-y-6 sm:space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full"
            >
              {/* <span className="w-2 h-2 bg-primary rounded-full animate-pulse" /> */}
              {/* <span className="text-sm font-semibold">Admissions Open for Academic Years 2083</span> */}
              <span className="text-[11px] sm:text-xs font-semibold">🎓 Play Group to Grade 10</span>
            </motion.div>

            {/* Heading */}
            {/* Welcome to */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-800">
              Welcome to
            </p>

            {/* Typewriter */}
            <h3 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl lg:text-5xl leading-[1.15] sm:leading-[1.2]">
              <span className="inline-block min-w-[18ch] sm:min-w-[22ch] md:min-w-[28ch] lg:min-w-[28ch]">
                <TypewriterText
                  texts={["Standard Secondary", "स्ट्याण्डर्ड सेकेण्डरी"]}
                  typingSpeed={100}
                  delayBeforeDelete={1800}
                  className="text-gradient-golden pt-1.5 mt-1"
                />
              </span>{" "}
              Boarding School
            </h3>

            {/* Tagline */}
            <p className="text-sm sm:text-base md:text-md italic font-semibold text-primary">
              “Education is Main Path of Success”
            </p>

            {/* Description */}
            <p className="max-w-prose text-sm sm:text-base md:text-md text-muted-foreground leading-relaxed">
              Nurturing young minds with quality education, discipline, and values. Join our family of learners and achievers in the heart of Sunsari, Nepal.
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center sm:items-start justify-center lg:justify-start gap-4 sm:gap-6">
              <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
                <div className="w-9 h-9 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm sm:text-sm">NEB Curriculum</p>
                  <p className="text-xs text-muted-foreground">English Medium</p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
                <div className="w-9 h-9 sm:w-8 sm:h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-bold text-sm sm:text-sm">700+ Students</p>
                  <p className="text-xs text-muted-foreground">Growing Family</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <Link href="/admissions">
                <Button
                  className="btn-primary-school gap-2 w-full sm:w-auto px-5 sm:px-6 py-2"
                  onClick={() =>
                    gaEvent({
                      action: "click_apply_now",
                      category: "Admissions",
                      label: "Hero Section",
                    })
                  }
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Link href="/about">
                <Button variant="outline" className="w-full sm:w-auto border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-5 sm:px-6 py-3">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 py-1 rounded-full text-xs sm:text-sm"
            >
              <MapPin className="w-4 h-4" />
              Itahari-17, Sunsari District, Nepal
            </motion.div>
          </motion.div>





          {/* ================= RIGHT SIDE : VIDEO ================= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-lg mx-auto mt-2 lg:mt-0 lg:pl-8"
          >
            {/* Book doodle */}
            <Image src={book} alt="book" className="absolute -top-10 sm:-top-12 left-0 w-10 h-8 sm:w-12 sm:h-10 z-20 opacity-40 lg:-left-4 lg:w-16 lg:h-12 animate-bounce duration-100" />
            {/* Glow */}
            <div aria-hidden className="absolute inset-4 sm:inset-6 bg-primary/30 blur-3xl rounded-3xl -z-10" />

            {/* Video */}
            <video
              src="https://res.cloudinary.com/dpraq0j6y/video/upload/v1773504852/ssbsfinal_n1aylb.mp4"
              autoPlay
              muted
              loop
              playsInline
              // controls
              onPlay={() =>
                gaEvent({
                  action: "play_hero_video",
                  category: "Video",
                  label: "Hero Section Video",
                })
              }
              className="w-full rounded-2xl sm:rounded-3xl shadow-lg"
            />

            {/* Floating Card (kept same) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-3 sm:-bottom-6 left-2 sm:-left-6 drop-shadow-lg bg-card p-2.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg border scale-[0.82] sm:scale-100 origin-bottom-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-hero rounded-xl flex items-center justify-center text-sm sm:text-base">🎓</div>
                <div>
                  <p className="font-bold text-sm sm:text-base">31+ Years</p>
                  <p className="text-xs text-muted-foreground">Of Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};