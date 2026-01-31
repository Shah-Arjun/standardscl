"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/public/hero-illustration.jpg";
import Image from "next/image";
import Link from "next/link";
import { TypewriterText } from "../text/TypewriterText";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-warm min-h-[90svh] flex items-center">
      {/* Decorative Elements */}
      <div
        aria-hidden
        className="absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl"
      />
      <div
        aria-hidden
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-golden-light/30 rounded-full blur-2xl animate-float"
      />

      <div className="container-school section-padding">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* ================= LEFT SIDE : CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left max-w-xl mx-auto lg:mx-0 space-y-6"
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
                Admissions Open 2025–2026
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              Welcome to{" "}
              <span className="inline-block min-w-[16ch]">
                <TypewriterText
                  text="Standard Secondary"
                  className="text-gradient-golden whitespace-nowrap"
                />
              </span>{" "}
              Boarding School{""}
            </h1>

            {/* Tagline */}
            <p className="text-xl italic font-semibold text-primary">
              “Education is Main Path of Success”
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground">
              Nurturing young minds with quality education, discipline, and
              values. Join our family of learners and achievers in the heart of
              Sunsari, Nepal.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
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
                  <p className="font-bold">500+ Students</p>
                  <p className="text-sm text-muted-foreground">
                    Growing Family
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link href="/admissions">
                <Button className="btn-primary-school group">
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
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            >
              <MapPin className="w-4 h-4" />
              Itahari-17, Sunsari District, Nepal
            </motion.div>
          </motion.div>

          {/* ================= RIGHT SIDE : IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-6xl mx-auto"
          >
            {/* Glow */}
            <div
              aria-hidden
              className="absolute inset-6 bg-primary/30 blur-3xl rounded-3xl -z-10"
            />

            {/* Image */}
            <Image
              src={heroImage}
              alt="Happy students at Standard Secondary Boarding School"
              className="w-full rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)]"
              priority
            />

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-lg border"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                  🎓
                </div>
                <div>
                  <p className="font-bold">30+ Years</p>
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
