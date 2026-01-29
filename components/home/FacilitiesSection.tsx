"use client"

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  FlaskConical,
  Monitor,
  Building2,
  Trophy,
  Bus,
  Shield,
  Tv,
  Wifi,
} from "lucide-react";

const facilities = [
  {
    icon: FlaskConical,
    title: "Science Lab",
    description: "Well-equipped labs for practical experiments",
  },
  {
    icon: Monitor,
    title: "Computer Lab",
    description: "Modern computers with training programs",
  },
  {
    icon: Building2,
    title: "Hostel",
    description: "Safe boarding facility with homely environment",
  },
  {
    icon: Trophy,
    title: "Sports Ground",
    description: "Spacious playground for various sports",
  },
  {
    icon: Bus,
    title: "Transportation",
    description: "Safe and reliable school bus service",
  },
  {
    icon: Shield,
    title: "CCTV & Safety",
    description: "24/7 surveillance for student security",
  },
  {
    icon: Tv,
    title: "Smart Classes",
    description: "Digital learning with interactive boards",
  },
  {
    icon: Wifi,
    title: "Digital Campus",
    description: "Wi-Fi enabled campus for modern learning",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export const FacilitiesSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-school">
        <SectionHeader
          title="World-Class Facilities"
          subtitle="We provide state-of-the-art facilities to ensure the best learning environment for our students"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              variants={itemVariants}
              className="bg-card p-6 rounded-2xl text-center card-hover group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-hero rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-golden">
                <facility.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">
                {facility.title}
              </h3>
              <p className="text-sm text-muted-foreground">{facility.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
