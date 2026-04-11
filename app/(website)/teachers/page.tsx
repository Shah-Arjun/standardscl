"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SiteLayout } from "@/components/layout/SiteLayout";
import PageHero from "@/components/shared/PageHero";

const ADMIN_POSTS = [
  "eca", "elc", "principal", "founder", "coordinator", 
  "accountant", "exam", "vice-principal", "dance teacher"
];

export default function Teachers() {
  const teachersPerPage = 8;

  const [page, setPage] = useState(0);
  const [teachers, setTeachers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeachers() {
      setLoading(true);
      try {
        const res = await fetch("/api/teachers");
        const data = await res.json();
        setTeachers(data || []);
      } catch (error) {
        console.error("Failed to fetch teachers:", error);
        setTeachers([]);
      } finally {
        setLoading(false);
      }
    }

    fetchTeachers();
  }, []);

  const totalPages = Math.ceil(teachers.length / teachersPerPage);
  const visibleTeachers = teachers.slice(
    page * teachersPerPage,
    page * teachersPerPage + teachersPerPage
  );

  if (loading) {
    return (
      <SiteLayout>
        <PageHero
          title="Meet Our Teachers"
          subtitle="Dedicated educators committed to nurturing young minds"
          badge="OUR TEAM"
        />
        <div className="section-padding bg-muted text-center py-20">
          <p className="text-lg">Loading teachers...</p>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <PageHero
        title="Meet Our Teachers"
        subtitle="Dedicated educators committed to nurturing young minds"
        badge="OUR TEAM"
      />

      <section className="section-padding bg-muted">
        {/* <p className="absolute flex items-center gap-2 right-12 px-6 -mt-12 text-lg font-semibold"><span className="text-lg lg:text-3xl">40+</span> <span className="text-md">Teachers</span></p> */}
        <div className="container-school">
          {/* Teachers Grid / List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visibleTeachers.map((teacher, index) => {
              const isAdministration =
                Array.isArray(teacher.post) &&
                teacher.post.some((p: string) =>
                  ADMIN_POSTS.includes(p.toLowerCase())
                );

              return (
                <div className="lg:mb-14 lg:mt-2">
                  <motion.div
                  key={teacher.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  {/* Desktop Card (Floating Circle) */}
                  <div className="hidden lg:block bg-white/50 w-full max-w-xs mx-auto pt-16 pb-6 px-6 rounded-2xl shadow-md hover:shadow-xl transition text-center relative">
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                      <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-110 transition">
                        <Image
                          src={`${teacher.photo}?q_auto,f_auto`}
                          alt={teacher.teacherName}
                          width={144}
                          height={144}
                          quality={100}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800 mt-6">
                      {teacher.teacherName}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {Array.isArray(teacher.post) ? teacher.post.join(", ") : teacher.post}
                    </p>
                    {!isAdministration && teacher.employmentType && (
                      <p className="text-sm text-gray-500 mt-1">
                        {teacher.employmentType}
                      </p>
                    )}
                    {isAdministration && teacher.experience && (
                      <span className="mt-3 inline-block text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                        {parseInt(teacher.experience)}+ yrs experience
                      </span>
                    )}
                  </div>

                  {/* Mobile Horizontal Card (List Style) */}
                  <div className="lg:hidden bg-white rounded-2xl shadow-md overflow-hidden flex gap-4 p-4 border border-gray-100">
                    <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden border-2 border-white shadow-sm">
                      <Image
                        src={`${teacher.photo}?q_auto,f_auto`}
                        alt={teacher.teacherName}
                        width={96}
                        height={96}
                        quality={100}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div className="flex-1 py-1">
                      <h3 className="font-semibold text-base text-gray-800 leading-tight mb-1">
                        {teacher.teacherName}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {Array.isArray(teacher.post) ? teacher.post.join(", ") : teacher.post}
                      </p>
                      {!isAdministration && teacher.employmentType && (
                        <p className="text-xs text-gray-500 mt-2">
                          {teacher.employmentType}
                        </p>
                      )}
                      {isAdministration && teacher.experience && (
                        <span className="mt-2 inline-block text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {parseInt(teacher.experience)}+ yrs experience
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
                </div>
              );
            })}
          </div>

          {/* Pagination Arrows */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-6 mt-12 lg:mt-6">
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 0))}
                disabled={page === 0}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white text-xl disabled:opacity-40 hover:scale-110 transition disabled:cursor-not-allowed"
              >
                ←
              </button>

              <button
                onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
                disabled={page === totalPages - 1}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white text-xl disabled:opacity-40 hover:scale-110 transition disabled:cursor-not-allowed"
              >
                →
              </button>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}