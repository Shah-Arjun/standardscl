"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, Tag, X } from "lucide-react";

import { SiteLayout } from "@/components/layout/SiteLayout";
import PageHero from "@/components/shared/PageHero";

const notices = [
  {
    id: 1,
    title: "Admissions Open for Academic Year 2083",
    date: "Baishakh",
    category: "Admissions",
    excerpt: "We are pleased to announce that admissions are now open for the upcoming academic year. Limited seats available for all grades from Nursery to Grade 10.",
    content: "Detailed admission process, important dates, required documents, fee structure, age criteria, and online/offline application procedure will be shared here. Parents are requested to visit the school office or apply through the official portal.",
    isNew: true,
  },
  {
    id: 2,
    title: "Annual Sports Week Schedule Released",
    date: "January 20, 2025",
    category: "Sports",
    excerpt: "The much-awaited Annual Sports Week will be held from February 1-7, 2025. Students are encouraged to participate in various sports events.",
    content: "Full event schedule, rules and regulations, team formations, prizes, and participation guidelines...",
    isNew: true,
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting Scheduled",
    date: "January 25, 2025",
    category: "Meeting",
    excerpt: "Parents are invited for the quarterly parent-teacher meeting to discuss student progress and academic performance.",
    content: "Meeting agenda, timing, venue, and topics to be discussed with teachers...",
    isNew: false,
  },
  {
    id: 4,
    title: "Entrance Examination Date Announced",
    date: "February 1, 2025",
    category: "Exam",
    excerpt: "Entrance examination for new admissions will be conducted on March 15, 2025. Application forms available at the school office.",
    content: "Syllabus, exam pattern, timing, and preparation tips...",
    isNew: false,
  },
];

type Notice = typeof notices[number];

const Notices = () => {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(notices[0]);

  return (
    <SiteLayout>
      <PageHero 
        title="Notices & News"
        subtitle="Stay updated with the latest notices, events, and important information from our school"
        badge="LATEST ANNOUNCEMENTS"
      />

      <section className="section-padding bg-background min-h-screen">
        <div className="container-school">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* LEFT SIDE - Notices List */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="sticky top-24">
                <h2 className="text-3xl font-bold mb-8">All Notices</h2>
                
                <div className="space-y-5">
                  {notices.map((notice) => (
                    <motion.div
                      key={notice.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedNotice(notice)}
                      className={`group p-6 rounded-3xl border cursor-pointer transition-all duration-300
                        ${selectedNotice?.id === notice.id 
                          ? 'border-primary bg-primary/5 shadow-sm' 
                          : 'border-gray-100 hover:border-primary/30 hover:bg-white'}`}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {notice.date}
                        </div>
                        <div className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {notice.category}
                        </div>
                        {notice.isNew && <span className="text-emerald-500 text-xs font-bold">• NEW</span>}
                      </div>

                      <h3 className="font-semibold text-lg leading-tight mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {notice.title}
                      </h3>

                      <p className="text-muted-foreground text-sm line-clamp-3">
                        {notice.excerpt}
                      </p>

                      <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Read Full Notice 
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - Detail View */}
            <div className="lg:col-span-7 xl:col-span-8">
              <AnimatePresence mode="wait">
                {selectedNotice ? (
                  <motion.div
                    key={selectedNotice.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 min-h-[600px] sticky top-24"
                  >
                    <div className="flex justify-between items-start mb-8">
                      <div className="flex items-center gap-3">
                        <div className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {selectedNotice.category}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {selectedNotice.date}
                        </div>
                      </div>

                      {/* Close Button (visible on mobile) */}
                      <button
                        onClick={() => setSelectedNotice(null)}
                        className="lg:hidden text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <X size={26} />
                      </button>
                    </div>

                    <h1 className="font-heading text-3xl lg:text-4xl font-bold leading-tight mb-8">
                      {selectedNotice.title}
                    </h1>

                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                      {selectedNotice.content}
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-100 text-sm text-muted-foreground">
                      Published on: {selectedNotice.date}
                    </div>
                  </motion.div>
                ) : (
                  <div className="hidden lg:flex h-[500px] items-center justify-center border border-dashed border-gray-200 rounded-3xl">
                    <div className="text-center">
                      <p className="text-xl text-muted-foreground">Select a notice from the left to read details</p>
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Notices;