"use client"

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Baby, BookOpen, GraduationCap, Award } from "lucide-react";
import Link from "next/link";

const grades = [
  {
    id: "pre-primary",
    title: "Pre-Primary",
    levels: ["Nursery", "LKG", "UKG"],
    icon: Baby,
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-50",
    description: "Building strong foundations through play-based learning",
  },
  {
    id: "basic_1_5",
    title: "Basic Level (1-5)",
    levels: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"],
    icon: BookOpen,
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-50",
    description: "Developing core skills in reading, writing, and mathematics",
  },
  {
    id: "basic_6_8",
    title: "Basic Level (6-8)",
    levels: ["Grade 6", "Grade 7", "Grade 8"],
    icon: GraduationCap,
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50",
    description: "Expanding knowledge with specialized subjects",
  },
  {
    id: "secondary",
    title: "Secondary",
    levels: ["Grade 9", "Grade 10"],
    icon: Award,
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50",
    description: "Preparing for SEE examination and future success",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const GradesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-school">
        <SectionHeader
          title="Our Academic Levels"
          subtitle="From Pre-Primary to Secondary, we offer comprehensive education following the NEB Nepal curriculum in English medium"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {grades.map((grade) => (
            <motion.div key={grade.id} variants={cardVariants}>
              <Link href={`/grades#${grade.id}`}>
                <div className={`${grade.bgColor} p-6 rounded-2xl card-hover group cursor-pointer h-full`}>
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${grade.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <grade.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                    {grade.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4">
                    {grade.description}
                  </p>

                  {/* Levels */}
                  <div className="flex flex-wrap gap-2">
                    {grade.levels.map((level) => (
                      <span
                        key={level}
                        className="px-3 py-1 bg-white/80 rounded-full text-xs font-medium text-foreground"
                      >
                        {level}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};