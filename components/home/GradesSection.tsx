"use client"

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Link from "next/link";
import { homeGrades } from "@/data/data";


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
          {homeGrades.map((grade) => (
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