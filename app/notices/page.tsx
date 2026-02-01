"use client"

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

const categories = ["All", "Admissions", "Sports", "Events", "Academic", "Meeting"];




const Notices = () => {
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
              Notices & News
            </h1>
            <p className="text-xl text-white/90">
              Stay updated with the latest announcements and news from our school
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notices */}
      <section className="section-padding bg-background">
        <div className="container-school">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <SectionHeader
                title="Latest Notices"
                subtitle="Important announcements and updates"
                centered={false}
              />

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

            {/* Sidebar */}
            <aside>
              <div className="sticky top-32 space-y-8">
                {/* Categories */}
                <div className="bg-card p-6 rounded-2xl border border-border">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className="block w-full text-left px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-gradient-hero p-6 rounded-2xl text-primary-foreground">
                  <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/admissions"
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                      >
                        <ArrowRight className="w-4 h-4" />
                        Apply Now
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                      >
                        <ArrowRight className="w-4 h-4" />
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/gallery"
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                      >
                        <ArrowRight className="w-4 h-4" />
                        Photo Gallery
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Notices;
