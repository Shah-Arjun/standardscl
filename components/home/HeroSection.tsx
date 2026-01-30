"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/public/hero-illustration.jpg";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-warm min-h-[90svh] flex items-center">
      {/* Decorative Elements */}
      <div aria-hidden="true" className="absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-0 right-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-golden-light/30 rounded-full blur-2xl animate-float will-change-transform"
      />

      <div className="container-school section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left max-w-xl mx-auto lg:mx-0"
          >
            <motion.div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0 space-y-6">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
              >
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-semibold">
                  Admissions Open 2025-2026
                </span>
              </motion.div>

              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                Welcome to{" "}
                <span className="text-gradient-golden">Standard Secondary</span>{" "}
                Boarding School
              </h1>

              <p className="text-xl text-muted-foreground mb-4 font-semibold italic text-primary">
                "Learning for Life"
              </p>

              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                Nurturing young minds with quality education, discipline, and
                values. Join our family of learners and achievers in the heart
                of Sunsari, Nepal.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">NEB Curriculum</p>
                    <p className="text-sm text-muted-foreground">
                      English Medium
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">500+ Students</p>
                    <p className="text-sm text-muted-foreground">
                      Growing Family
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
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
                    className="btn-secondary-school bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center justify-center lg:justify-start gap-2 mt-8 text-muted-foreground"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">
                  Itahari-17, Sunsari District, Nepal
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-lg mx-auto lg:mx-0"
          >
            <div className="relative w-full max-w-lg mx-auto lg:mx-0">
              <Image
                src={heroImage}
                alt="Happy students at Standard Secondary Boarding School"
                className="w-full h-auto rounded-3xl shadow-2xl object-cover"
              />
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-lg border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">30+ Years</p>
                    <p className="text-sm text-muted-foreground">
                      Of Excellence
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Background Decoration */}
            <div className="absolute z-0 pointer-events-none top-8 right-8 w-full h-full bg-gradient-hero rounded-3xl opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
