"use client"

import PageHero from "@/components/shared/PageHero";  
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";



const notices = [
  {
    id: 1,
    title: "Admissions Open for Academic Year 2083",
    date: "Baishakh",
    category: "Admissions",
    excerpt:
      "We are pleased to announce that admissions are now open for the upcoming academic year. Limited seats available for all grades from Nursery to Grade 10.",
    isNew: true,
  },
  {
    id: 2,
    title: "Annual Sports Week Schedule Released",
    date: "January 20, 2025",
    category: "Sports",
    excerpt:
      "The much-awaited Annual Sports Week will be held from February 1-7, 2025. Students are encouraged to participate in various sports events.",
    isNew: true,
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting Scheduled",
    date: "January 25, 2025",
    category: "Meeting",
    excerpt:
      "Parents are invited for the quarterly parent-teacher meeting to discuss student progress and academic performance.",
    isNew: false,
  },
  {
    id: 4,
    title: "Entrance Examination Date Announced",
    date: "February 1, 2025",
    category: "Exam",
    excerpt:
      "Entrance examination for new admissions will be conducted on March 15, 2025. Application forms available at the school office.",
    isNew: false,
  },
  {
    id: 5,
    title: "Art & Science Exhibition Coming Soon",
    date: "February 5, 2025",
    category: "Events",
    excerpt:
      "Students are preparing for the annual Art & Science Exhibition. Parents and visitors are welcome to attend.",
    isNew: false,
  },
  {
    id: 6,
    title: "Winter Vacation Notice",
    date: "December 20, 2024",
    category: "Holiday",
    excerpt:
      "The school will remain closed for winter vacation from December 25, 2024 to January 5, 2025.",
    isNew: false,
  },
  {
    id: 7,
    title: "New Smart Classroom Inauguration",
    date: "December 15, 2024",
    category: "News",
    excerpt:
      "We are proud to announce the inauguration of 5 new smart classrooms equipped with latest digital learning technology.",
    isNew: false,
  },
  {
    id: 8,
    title: "SEE Preparation Classes Begin",
    date: "December 10, 2024",
    category: "Academic",
    excerpt:
      "Special preparation classes for Grade 10 students appearing in SEE 2025 will begin from January. Extra coaching sessions scheduled.",
    isNew: false,
  },
];



const Notices = () => {
  return (
    <SiteLayout>
      {/* Reusable Hero Component */}
      <PageHero 
        title="Notices & News"
        subtitle="Stay updated with the latest notices, events, and important information from our school"
        badge="LATEST ANNOUNCEMENTS"
      />

      {/* Notices Section */}
      <section className="section-padding bg-background">
        <div className="container-school">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* <SectionHeader
                title=""
                subtitle="Important announcements and updates"
                centered={false}
              /> */}

              <div className="space-y-6">
                {notices.map((notice, index) => (
                  <motion.article
                    key={notice.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-card p-6 rounded-2xl border border-border hover:border-primary transition-colors group"
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {notice.date}
                      </span>
                      <span className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        <Tag className="w-3 h-3" />
                        {notice.category}
                      </span>
                      {notice.isNew && (
                        <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full animate-pulse">
                          NEW
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {notice.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">{notice.excerpt}</p>
                    
                    <button className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Notices;
