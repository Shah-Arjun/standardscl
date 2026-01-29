"use client"

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  Users,
  Target,
  Laptop,
  ClipboardCheck,
  BookPlus,
  Award,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Experienced Teachers",
    description: "Highly qualified and dedicated faculty members",
  },
  {
    icon: Target,
    title: "Optimal Ratio",
    description: "Appropriate student-teacher ratio for personalized attention",
  },
  {
    icon: Laptop,
    title: "Digital Learning",
    description: "Modern technology integrated into everyday learning",
  },
  {
    icon: ClipboardCheck,
    title: "Regular Evaluations",
    description: "Weekly tests and continuous assessment",
  },
  {
    icon: BookPlus,
    title: "Extra Classes",
    description: "Remedial and extra classes for academic support",
  },
  {
    icon: Award,
    title: "Excellence Focus",
    description: "Committed to achieving academic excellence",
  },
];

export const AcademicsSection = () => {
  return (
    <section className="section-padding bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container-school relative z-10">
        <SectionHeader
          title="Academic Excellence"
          subtitle="Our commitment to providing the highest quality education with proven teaching methodologies"
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
