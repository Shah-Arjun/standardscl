"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import heroImage from "@/public/hero-illustration.jpg";
import ssbsTeachers from "@/public/ssbsTeachers.jpg";
import { TypewriterText } from "../text/TypewriterText";
import { event as gaEvent } from "@/lib/gtag";

export const HeroSection = () => {
  return (
    /**
     * SECTION
     * - relative → allows absolutely positioned background layers
     * - min-h-[90svh] → fills screen on all devices (mobile safe)
     * - overflow-hidden → hides decorative overflow
     */
    <section className="relative min-h-[85svh] md:min-h-[90svh] flex items-center overflow-hidden">
      {/* ================= BACKGROUND IMAGE =================
         - Uses Next/Image for optimization
         - fill → covers entire section
         - object-cover → maintains aspect ratio
         - opacity → does NOT affect content
      */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={ssbsTeachers}
          alt="Standard Secondary Boarding School Teachers"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
      </div>

      {/* ================= OVERLAY =================
         - Improves text readability
         - Works for both light & dark modes
      */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/60 to-background/90" />

      {/* ================= DECORATIVE BLOBS ================= */}
      <div
        aria-hidden
        className="hidden sm:block absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
      />

      <div
        aria-hidden
        className="hidden sm:block absolute bottom-0 right-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl"
      />

      <div
        aria-hidden
        className="hidden md:block absolute top-1/2 left-1/4 w-24 h-24 bg-golden-light/30 rounded-full blur-2xl animate-float"
      />

      {/* ================= MAIN CONTENT ================= */}
      <div className="container-school section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center justify-items-center">
          {/* ================= LEFT : TEXT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left max-w-md sm:max-w-lg lg:max-w-xl mx-auto lg:mx-0 space-y-5 sm:space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-semibold">
                Admissions Open for Academic Years 2083
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="ffont-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              Welcome to{" "}
              <span className="inline-block min-w-[12ch] sm:min-w-[16ch]">
                <TypewriterText
                  text="Standard Secondary"
                  className="text-gradient-golden whitespace-nowrap"
                />
              </span>{" "}
              Boarding School
            </h1>

            {/* Tagline */}
            <p className="text-xl italic font-semibold text-primary">
              “Education is Main Path of Success”
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground">
              Nurturing young minds with quality education, discipline, and
              values. Join our family of learners and achievers in the heart of
              Sunsari, Nepal.
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold">NEB Curriculum</p>
                  <p className="text-sm text-muted-foreground">
                    English Medium
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-bold">800+ Students</p>
                  <p className="text-sm text-muted-foreground">
                    Growing Family
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link href="/admissions">
                {/* <Button className="btn-primary-school group">
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button> */}
                <Button
                  className="btn-primary-school group"
                  onClick={() =>
                    gaEvent({
                      action: "click_apply_now",
                      category: "Admissions",
                      label: "Hero Section",
                    })
                  }
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
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
            {/* Glow */}
            <div
              aria-hidden
              className="absolute inset-6 bg-primary/30 blur-3xl rounded-3xl -z-10"
            />

            {/* Video */}
            <video
              src="https://res.cloudinary.com/dpraq0j6y/video/upload/v1773504852/ssbsfinal_n1aylb.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
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
              className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-card p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg border"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                  🎓
                </div>
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
