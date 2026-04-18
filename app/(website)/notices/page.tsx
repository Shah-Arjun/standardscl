"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, Tag, X } from "lucide-react";

import { SiteLayout } from "@/components/layout/SiteLayout";
import PageHero from "@/components/shared/PageHero";



type Notice = {
  id: number;
  title: string;
  category: string;
  date: string;
  content: string;
  postedBy: string;
  createdAt: string;
};




const Notices = () => {

    const [notices, setNotices] = useState<Notice[]>([]);
    const [selectedNotice, setSelectedNotice] = useState<Notice | null>(
      notices[0],
    );
    const [loading, setLoading] = useState(true);



    // Fetch notices
    const fetchNotices = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/notices");
        const data = await res.json();
        // console.log("Fetched notices:", data);  //debug
        // newest first
        setNotices(Array.isArray(data) ? data.sort((a, b) => b.id - a.id) : []);
      } catch (error) {
        console.error("Failed to load notices", error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchNotices();
    }, []);
  
  




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
                      className={`group p-6 rounded-3xl border-2 border-l-gray-400 cursor-pointer transition-all duration-300
                        ${selectedNotice?.id === notice.id 
                          ? 'border-primary bg-primary/5 shadow-sm' 
                          : 'border-gray-100 hover:border-primary/30 hover:bg-white'}`}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {new Date(notice.createdAt).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </div>
                        <div className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {notice.category}
                        </div>
                      </div>

                      <h3 className="font-semibold text-lg leading-tight mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {notice.title}
                      </h3>

                      <p className="text-muted-foreground text-sm line-clamp-3">
                        {notice.content}
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
                          {new Date(selectedNotice.createdAt).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
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

                    <div className="prose prose-lg mt-12 max-w-none text-gray-700 leading-relaxed">
                      Thank you.
                    </div>

                    <div className="flex justify-between mt-60 pt-8 border-t border-gray-100">
                      <div className="text-sm text-muted-foreground">
                        Published By: {selectedNotice.postedBy}
                      </div>
                      
                      <div className=" text-sm text-muted-foreground">
                        Published on: {new Date(selectedNotice.createdAt).toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                      </div>
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