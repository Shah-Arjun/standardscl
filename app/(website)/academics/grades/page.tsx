"use client"

import { motion } from "framer-motion";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { CheckCircle} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { grades } from "@/data/data";




const Grades = () => {
  return (
    <SiteLayout>
      {/* Hero */}
      <PageHero
        title="Academic Grades"
        subtitle="Explore our comprehensive grade structure from Pre-Primary to Secondary level"
        badge="WHAT WE OFFER"
      />

      {/* Grades Detail */}
      <section className="section-padding bg-background">
        <div className="container-school">
          <div className="space-y-16">
            {grades.map((grade, index) => (
              <motion.div
                key={grade.id}
                id={grade.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="scroll-mt-32"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-8 items-start ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Info Card */}
                  <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-13 h-13 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${grade.color} flex items-center justify-center shadow-lg`}
                      >
                        <grade.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="font-heading text-xl md:text-2xl lg:text-2xl font-bold text-foreground">
                          {grade.title}
                        </h2>
                        <p className="text-muted-foreground text-sm lg:text-md">
                          Age: {grade.ageGroup}
                        </p>
                      </div>
                    </div>

                    {/* Levels */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {grade.levels.map((level) => (
                        <span
                          key={level}
                          className={`px-3 py-1 lg:px-3 lg:py-1 bg-gradient-to-br ${grade.color} text-white rounded-full text-xs lg:text-sm font-medium`}
                        >
                          {level}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <h4 className="font-heading font-bold text-foreground mb-4">
                      Program Highlights
                    </h4>
                    <ul className="space-y-3">
                      {grade.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Subjects */}
                  <div className="bg-muted p-8 rounded-3xl">
                    <h4 className="font-heading font-bold text-xl text-foreground mb-6">
                      Subjects Offered
                    </h4>
                    <div className="grid grid-cols-2 gap-2 lg:gap-3">
                      {grade.subjects.map((subject) => (
                        <div
                          key={subject}
                          className="bg-card px-3 py-2 lg:px-4 lg:py-3 rounded-xl border border-border hover:border-primary transition-colors"
                        >
                          <span className="text-foreground text-sm md:text-md lg:text-[16px]">
                            {subject}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Grades;
