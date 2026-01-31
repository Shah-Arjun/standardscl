"use client"

import { motion } from "framer-motion";
import { ArrowRight, FileText, Calendar, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const AdmissionCTA = () => {
  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container-school relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 text-primary-foreground px-4 py-2 rounded-full mb-6 animate-pulse-glow">
            <span className="w-2 h-2 bg-white rounded-full" />
            <span className="font-semibold">Admissions Open for 2025-2026</span>
          </div>

          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary-foreground mb-6">
            Begin Your Child's Journey
            <br />
            <span className="text-white/90">to Excellence</span>
          </h2>

          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Join our family of learners and give your child the best education
            in a nurturing environment. Limited seats available!
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl">
              <FileText className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Online Application</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl">
              <ClipboardList className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Entrance Exam</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl">
              <Calendar className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Schedule Visit</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admissions">
              <Button className="bg-white text-primary hover:text-xl hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group">
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="hover:bg-white/90 text-primary hover:text-xl font-semibold px-8 py-6 text-lg rounded-xl hover:shadow-xl transition-all group"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
