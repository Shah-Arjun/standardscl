"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { getAllNotices } from "@/app/actions/notice";
import { Notice } from "@/lib/types/notice";



export const FloatingNotice = () => {
  const [isOpen, setIsOpen] = useState(false); // Popup state
  const [showBanner, setShowBanner] = useState(false); // Banner visibility (default: true)

  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch notices
  const fetchNotices = async () => {
    try {
      setLoading(true);
      const res = await getAllNotices();
      // console.log("Fetched notices:", data);  //debug
      if (!res.success) {
        throw new Error(res.message || "Failed to fetch notices");
      }
      // newest first
      setNotices(
        Array.isArray(res.data)
          ? res.data.sort((a, b) => b.id - a.id)
          : []
      );    } catch (error) {
      console.error("Failed to load notices", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);




  return (
    <>
      {/* Floating Notice Banner with Toggle Arrow */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed top-40 md:top-42 lg:top-52 right-0 z-50 cursor-pointer flex items-center"
            onClick={() => setIsOpen(true)}
          >
            <div className="bg-green-800 text-white px-1 py-2 lg:px-4 lg:py-2.25 shadow-xl flex items-center gap-3 rounded-l-2xl hover:rounded-l-3xl transition-all duration-300 hover:bg-green-700">
              <span className="text-md font-semibold uppercase tracking-wider">
                Notice
              </span>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
            </div>

            {/* Arrow Button to Hide Banner */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent opening popup when clicking arrow
                setShowBanner(false);
              }}
              className="bg-green-800 text-white px-2 py-4 lg:py-4 rounded-r-2xl shadow-xl hover:bg-green-700 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Show Banner Button (when hidden) */}
      {!showBanner && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowBanner(true)}
          className="fixed top-40 md:top-42 lg:top-52 right-0 z-50 bg-green-800 text-white p-3 rounded-l-2xl shadow-xl hover:bg-green-700 transition-all"
        >
          <ChevronLeft className="h-5 w-5" />
        </motion.button>
      )}

      {/* Notice Popup with Slide Animation from Right */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 z-[60]"
              onClick={() => setIsOpen(false)}
            />

            {/* Sliding Popup from Right */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-18 right-0 z-[70] w-full max-w-xs bg-white rounded-l-3xl shadow-2xl overflow-hidden h-120 lg:max-h-200"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b px-6 py-2 bg-gradient-to-r from-amber-50 to-orange-50">
                <div className="flex items-center gap-3">
                  <h3 className="font-bold text-xl text-gray-900">Notices</h3>
                  <span className="text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-medium">
                    {notices.length} new
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Notices List */}
              <div className="overflow-y-auto p-4 h-[calc(100%-140px)]">
                {loading ? (
                  <div className="py-12 text-center text-gray-500">
                    Loading notices...
                  </div>
                ) : notices.length > 0 ? (
                  <div className="space-y-3">
                    <p className="text-end pr-2 text-md">Published On</p>
                  {notices.map((notice) => (
                    <Link key={notice.id} href={`/notices`}>
                      <motion.div
                        whileHover={{ x: 6 }}
                        className="group p-4 mb-2 bg-white border border-gray-200 hover:border-amber-200 rounded-2xl transition-all hover:shadow-md cursor-pointer"
                      >
                        <div className="flex justify-between items-center gap-4">
                          {/* Title */}
                          <p className="font-medium text-gray-900 leading-snug group-hover:text-amber-700 transition-colors">
                            {notice.title}
                          </p>
                
                          {/* Date */}
                          <p className="text-sm text-gray-500 whitespace-nowrap">
                            {new Date(notice.createdAt).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </p>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
                ) : (
                  <div className="py-12 text-center text-gray-500">
                    No notices at the moment.
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="border-t px-6 py-4 text-center bg-gray-50">
                <p className="text-md text-gray-400">
                  View details <Link href="/notices" className="ml-2 py-1 px-3 border border-gray-400 rounded-xl text-2xl text-amber-600 hover:underline">&gt;&gt;</Link>.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNotice;
