"use client"

import { motion } from "framer-motion";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AcademicsSection } from "@/components/home/AcademicsSection";
import { GradesSection } from "@/components/home/GradesSection";
import { BookOpen, Globe, Award, Calendar, Clock, Users } from "lucide-react";

const curriculum = [
  {
    icon: Globe,
    title: "English Medium",
    description:
      "All subjects are taught in English to prepare students for global opportunities",
  },
  {
    icon: BookOpen,
    title: "NEB Curriculum",
    description:
      "Following the National Examination Board curriculum of Nepal",
  },
  {
    icon: Award,
    title: "SEE Preparation",
    description:
      "Special focus on Secondary Education Examination preparation",
  },
];

const schedule = [
  { time: "6:00 AM", activity: "Wake-up & Morning Exercise" },
  { time: "7:00 AM", activity: "Coaching Classes" },
  { time: "8:00 AM", activity: "Short Break" },
  { time: "10:00 AM", activity: "Morning Assembly & Classes Begin" },
  { time: "12:30 PM", activity: "Lunch Break" },
  { time: "1:30 PM", activity: "Afternoon Classes" },
  { time: "4:00 PM", activity: "Classes End & Extra-curricular Activities Begins" },
  { time: "6:00 PM", activity: "Self-Study / Homework" },
  { time: "8:00 PM", activity: "Dinner" },
  { time: "9:30 PM", activity: "Lights Out" },
];


const Academics = () => {
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
              Academic Programs
            </h1>
            <p className="text-xl text-white/90">
              Comprehensive education from Pre-Primary to Secondary level
              following NEB curriculum in English medium.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-padding bg-background">
        <div className="container-school">
          <SectionHeader
            title="Our Curriculum"
            subtitle="Structured learning programs designed for academic excellence"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {curriculum.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-lg border border-border text-center card-hover hover:border-primary"
              >
                <div className="hover:scale-104">
                  <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-golden">
                  <item.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grades Section */}
      <GradesSection />

      {/* Academic Excellence */}
      <AcademicsSection />

      {/* Daily Schedule for Boarders */}
      <section className="section-padding bg-background">
        <div className="container-school">
          <SectionHeader
            title="A Day at School"
            subtitle="Daily schedule for our boarding students"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-hero" />

              {schedule.map((item, index) => (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-6 mb-4"
                >
                  {/* Time Circle */}
                  <div className="w-16 h-16 bg-card border-4 border-primary rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card p-4 rounded-xl border border-border hover:border-primary transition-colors">
                    <p className="font-bold text-primary">{item.time}</p>
                    <p className="text-muted-foreground">{item.activity}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Academics;
