"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";

import teacher1 from "@/public/teacher-1.jpg";
import teacher2 from "@/public/teacher-2.jpg";
import teacher3 from "@/public/teacher-3.jpg";

const teachers = [
  {
    name: "Mr. Ganesh Koirala",
    post: "Principal",
    field: "Mathematics",
    image: teacher2,
  },
  {
    name: "Mr. Ramesh Khatiwada",
    post: "Vice-Principal",
    field: "Social",
    image: teacher2,
  },
   {
    name: "Mr. Niraj Koirala",
    post: "Vice-Principal",
    field: "Nepali",
    image: teacher2,
  },
  {
    name: "Mr. Suman Raut",
    post: "Exam Co-ordinator",
    field: "Account, Mathematics",
    image: "https://res.cloudinary.com/dpraq0j6y/image/upload/v1773537772/teachers/bydxnshgplqd1tkxadbn.jpg",
  },
  {
    name: "Mr. Rabin Bogati",
    post: "ECA Co-ordinator",
    field: "Science",
    image: teacher2,
  },
  {
    name: "Ms. Bimala Adhikari",
    post: "Primary Section Coordinator",
    field: "Early Childhood Education",
    image: teacher3,
  },
  {
    name: "Mr. Bijay Kumar Rai",
    post: "Asst. Teacher",
    field: "Computer Science",
    image: teacher2,
  },
  {
    name: "Mr. Ramesh Chy",
    post: "Asst. Teacher",
    field: "Physical Education",
    image: teacher2,
  },
  {
    name: "Ms. Pramila Thapa",
    post: "Asst. Teacher",
    field: "Geography & History",
    image: teacher3,
  },
  {
    name: "Mr. Ramesh Gautam",
    post: "Asst. Teacher",
    field: "Physical Education",
    image: teacher2,
  },
  {
    name: "Mr. Dinesh Karki",
    post: "Asst. Teacher",
    field: "Physical Education",
    image: teacher2,
  },
  {
    name: "Mr. Umesh Chaudhary",
    post: "Asst. Teacher",
    field: "Physical Education",
    image: teacher2,
  },
  {
    name: "Mr. Ramesh Chy",
    post: "Asst. Teacher",
    field: "Physical Education",
    image: teacher2,
  },
  {
    name: "Mr. Ram Bahadur",
    post: "Asst. Teacher",
    field: "Physical Education",
    image: teacher2,
  },
];

export const TeachersSection = () => {
  const teachersPerPage = 6;
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(teachers.length / teachersPerPage);

  const visibleTeachers = teachers.slice(
    page * teachersPerPage,
    page * teachersPerPage + teachersPerPage
  );

  return (
    <section className="section-padding bg-muted">
      <div className="container-school">
        <SectionHeader
          title="Our Teachers"
          subtitle="Meet our dedicated team of experienced educators"
        />

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleTeachers.map((teacher, index) => (
            <motion.div
              key={teacher.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border group card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
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
                  <p className="text-muted-foreground text-sm">
                    {teacher.field}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white text-xl disabled:opacity-40 hover:scale-110 transition"
          >
            ←
          </button>

          <button
            onClick={() =>
              setPage((p) => Math.min(p + 1, totalPages - 1))
            }
            disabled={page === totalPages - 1}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white text-xl disabled:opacity-40 hover:scale-110 transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
