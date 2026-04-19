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
import { useEffect, useState } from "react";





export const HeroSection = () => {



  return (
    <section className="relative min-h-[85svh] md:min-h-[90svh] flex items-center overflow-hidden">
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
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/60 to-background/90" />



      
      {/* ================= MAIN CONTENT ================= */}
      <div className="container-hero relative z-10 -top-4 lg:-top-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ================= LEFT : TEXT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto lg:mx-0 space-y-10 mt-8 sm:space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full"
            >
              {/* <span className="w-2 h-2 bg-primary rounded-full animate-pulse" /> */}
              {/* <span className="text-sm font-semibold">Admissions Open for Academic Years 2083</span> */}
              <span className="text-sm font-semibold">🎓 Play Group to Grade 10</span>
            </motion.div>

            {/* Heading */}
            {/* Welcome to */}
            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-gray-800">
              Welcome to
            </h1>

            {/* Typewriter */}
            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              <span className="inline-block min-w-[19ch] sm:min-w-[22ch] md:min-w-[28ch] lg:min-w-[28ch]">
                <TypewriterText 
                  texts={["Standard Secondary", "स्ट्याण्डर्ड सेकेण्डरी"]}
                  typingSpeed={90}
                  delayBeforeDelete={2000}
                  className="text-gradient-golden"
                />
              </span>{" "}
              Boarding School
            </h1>

            {/* Tagline */}
            <p className="text-xl italic font-semibold text-primary">“Education is Main Path of Success”</p>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground">
              Nurturing young minds with quality education, discipline, and values. Join our family of learners and achievers in the heart of Sunsari, Nepal.
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="font-bold">NEB Curriculum</p>
                  <p className="text-sm text-muted-foreground">English Medium</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-bold">700+ Students</p>
                  <p className="text-sm text-muted-foreground">Growing Family</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link href="/admissions">
                <Button
                  className="btn-primary-school gap-0 hover:gap-2"
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
                <Button variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
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
            className="relative w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto"
          >
            {/* Book doodle */}
            <Image src={book} alt="book" className="absolute -top-12 -left-4 w-12 h-10 z-20 opacity-40 lg:left-0 lg:-top-18 lg:w-19 lg:h-16 animate-bounce duration-100"/>
            {/* Glow */}
              <div aria-hidden className="absolute inset-6 bg-primary/30 blur-3xl rounded-3xl -z-10" />

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
              className="w-full rounded-2xl sm:rounded-3xl"
            />

            {/* Floating Card (kept same) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-4 sm:-bottom-6 -left-4 drop-shadow-lg sm:-left-6 bg-card p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg border"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">🎓</div>
                <div>
                  <p className="font-bold">31+ Years</p>
                  <p className="text-sm text-muted-foreground">Of Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};