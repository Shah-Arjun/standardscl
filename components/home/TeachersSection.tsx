"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";

const ADMIN_POSTS = [
  "eca",
  "elc",
  "principal",
  "founder",
  "coordinator",
  "accountant",
  "principal",
  "exam",
  "vice-principal",
  'dance teacher'
];

export const TeachersSection = () => {
  const teachersPerPage = 6;

  const [page, setPage] = useState(0);
  const [teachers, setTeachers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeachers() {
      setLoading(true);
      const res = await fetch("/api/teachers/add");
      const data = await res.json();
      setTeachers(data);
      setLoading(false);
    }

    fetchTeachers();
  }, []);

  // pagination
  const totalPages = Math.ceil(teachers.length / teachersPerPage);

  const visibleTeachers = teachers.slice(
    page * teachersPerPage,
    page * teachersPerPage + teachersPerPage,
  );

  if (loading) return <p className="text-center">Loading teachers...</p>;

  return (
    <section className="section-padding bg-muted">
      <div className="container-school">
        <SectionHeader
          title="Our Teachers"
          subtitle="Meet our dedicated team of experienced educators"
        />

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleTeachers.map((teacher, index) => {
            const isAdministration =
              Array.isArray(teacher.post) &&
              teacher.post.some((p: string) =>
                ADMIN_POSTS.includes(p.toLowerCase()),
              );

            return (
              <div key={teacher.id} className="gap-6 mt-14">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="relative flex justify-center"
                >
                  {/* Card */}
                  <div className="bg-white/50 w-full max-w-xs pt-16 pb-6 px-6 rounded-2xl shadow-md hover:shadow-xl transition text-center relative">
                    {/* Floating Circular Image */}
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                      <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg hover:scale-110 transition">
                        <Image
                          src={`${teacher.photo}?q_auto,f_auto`}
                          alt={teacher.teacherName}
                          width={110}
                          height={110}
                          quality={100}
                          sizes={`(max-width: 768px) 100px, 150px`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>

                    {/* Name */}
                    <h3 className="text-lg font-semibold text-gray-800 mt-6">
                      {teacher.teacherName}
                    </h3>

                    {/* Post */}
                    <p className="text-sm text-primary font-medium">
                      {Array.isArray(teacher.post)
                        ? teacher.post.join(", ")
                        : teacher.post}
                    </p>

                    {/* Field */}
                    <p className="text-sm text-gray-500 mt-1">
                      {teacher.employmentType}
                    </p>

                    {/* Experience (only admin) */}
                    {isAdministration && teacher.experience && (
                      <span className="mt-3 inline-block text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                        {parseInt(teacher.experience)}+ yrs experience
                      </span>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
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
            onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
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
