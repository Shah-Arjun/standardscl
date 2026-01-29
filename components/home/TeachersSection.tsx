"use client"

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import teacher1 from "@/public/teacher-1.jpg";
import teacher2 from "@/public/teacher-2.jpg";
import teacher3 from "@/public/teacher-3.jpg";
import Image from "next/image";

const teachers = [
  {
    name: "Ms. Sita Devi Karki",
    post: "Senior English Teacher",
    field: "English Literature",
    image: teacher1,
  },
  {
    name: "Mr. Hari Prasad Sharma",
    post: "Science Department Head",
    field: "Physics & Mathematics",
    image: teacher2,
  },
  {
    name: "Ms. Kamala Adhikari",
    post: "Primary Section Coordinator",
    field: "Early Childhood Education",
    image: teacher3,
  },
  {
    name: "Mr. Bijay Kumar Rai",
    post: "Computer Teacher",
    field: "Computer Science",
    image: teacher2,
  },
  {
    name: "Ms. Pramila Thapa",
    post: "Social Studies Teacher",
    field: "Geography & History",
    image: teacher3,
  },
  {
    name: "Mr. Ramesh Chaudhary",
    post: "Sports Coordinator",
    field: "Physical Education",
    image: teacher2,
  },
];

export const TeachersSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-school">
        <SectionHeader
          title="Our Teachers"
          subtitle="Meet our dedicated team of experienced educators"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border group card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              </div>
              <div className="p-6 -mt-12 relative z-10">
                <div className="bg-card rounded-xl p-4 shadow-md">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                    {teacher.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-1">
                    {teacher.post}
                  </p>
                  <p className="text-muted-foreground text-sm">{teacher.field}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
