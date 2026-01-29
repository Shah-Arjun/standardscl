"use client"

import { motion } from "framer-motion";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  Baby,
  BookOpen,
  GraduationCap,
  Award,
  CheckCircle,
} from "lucide-react";



const grades = [
  {
    id: "pre-primary",
    title: "Pre-Primary",
    levels: ["Nursery", "LKG", "UKG"],
    icon: Baby,
    color: "from-pink-400 to-rose-500",
    ageGroup: "3-5 years",
    highlights: [
      "Play-based learning approach",
      "Introduction to alphabets and numbers",
      "Creative arts and music",
      "Physical development activities",
      "Social skills development",
    ],
    subjects: ["English", "Nepali", "Mathematics", "Drawing", "Rhymes & Songs"],
  },
  {
    id: "primary",
    title: "Primary",
    levels: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"],
    icon: BookOpen,
    color: "from-blue-400 to-cyan-500",
    ageGroup: "6-10 years",
    highlights: [
      "Strong foundation in core subjects",
      "Development of reading and writing skills",
      "Basic science concepts",
      "Introduction to computer",
      "Moral education and values",
    ],
    subjects: [
      "English",
      "Nepali",
      "Mathematics",
      "Science",
      "Social Studies",
      "Computer",
      "Moral Education",
    ],
  },
  {
    id: "lower-secondary",
    title: "Lower Secondary",
    levels: ["Grade 6", "Grade 7", "Grade 8"],
    icon: GraduationCap,
    color: "from-green-400 to-emerald-500",
    ageGroup: "11-13 years",
    highlights: [
      "Advanced subject specialization",
      "Laboratory-based science learning",
      "Project-based learning",
      "Critical thinking development",
      "Leadership opportunities",
    ],
    subjects: [
      "English",
      "Nepali",
      "Mathematics",
      "Science",
      "Social Studies",
      "Optional Mathematics",
      "Computer",
      "Health & Physical Education",
    ],
  },
  {
    id: "secondary",
    title: "Secondary",
    levels: ["Grade 9", "Grade 10"],
    icon: Award,
    color: "from-amber-400 to-orange-500",
    ageGroup: "14-16 years",
    highlights: [
      "SEE examination preparation",
      "Career guidance",
      "Advanced laboratory work",
      "Mock tests and evaluations",
      "Special coaching for competitive exams",
    ],
    subjects: [
      "Compulsory English",
      "Compulsory Nepali",
      "Compulsory Mathematics",
      "Science",
      "Social Studies",
      "Optional Mathematics",
      "Computer Science",
      "Health & Physical Education",
    ],
  },
];



const Grades = () => {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-gradient-hero section-padding text-primary-foreground">
        <div className="container-school">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              Academic Grades
            </h1>
            <p className="text-xl text-white/90">
              Explore our comprehensive grade structure from Pre-Primary to
              Secondary level
            </p>
          </motion.div>
        </div>
      </section>

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
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${grade.color} flex items-center justify-center shadow-lg`}
                      >
                        <grade.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="font-heading font-bold text-2xl text-foreground">
                          {grade.title}
                        </h2>
                        <p className="text-muted-foreground">
                          Age: {grade.ageGroup}
                        </p>
                      </div>
                    </div>

                    {/* Levels */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {grade.levels.map((level) => (
                        <span
                          key={level}
                          className={`px-4 py-2 bg-gradient-to-br ${grade.color} text-white rounded-full text-sm font-medium`}
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
                    <div className="grid grid-cols-2 gap-3">
                      {grade.subjects.map((subject) => (
                        <div
                          key={subject}
                          className="bg-card px-4 py-3 rounded-xl border border-border hover:border-primary transition-colors"
                        >
                          <span className="text-foreground font-medium">
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
