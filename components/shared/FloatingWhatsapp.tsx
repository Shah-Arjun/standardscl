"use client";

import { useState } from "react";
import { X, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppIcon from "../../public/whatsapp.png";
// import PhoneCall from "../../public/phone-call.png";

const latestNotices = [
  { id: 1, title: "Admissions Open for 2083", date: "Jan 15, 2025" },
  { id: 2, title: "Parent-Teacher Meeting", date: "Jan 25, 2025" },
  { id: 3, title: "Annual Sports Week", date: "Jan 20, 2025" },
];

/* ================= ANIMATION VARIANTS ================= */

import type { Variants } from "framer-motion";
import Image from "next/image";

const panelVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const FloatingWhatsapp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 lg:bottom-8 lg:right-8 z-50">
      {/* ================= NOTICE PANEL ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute bottom-16 right-0 w-80 bg-card border border-border rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-hero p-4 flex items-center justify-between">
              <h3 className="font-heading font-bold text-primary-foreground">
                Latest Notices
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Notice List */}
            <div className="p-4 space-y-3">
              {latestNotices.map((notice, index) => (
                <motion.div
                  key={notice.id}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href="/notices"
                    className="block p-3 rounded-lg bg-muted hover:bg-primary/10 transition-colors group"
                  >
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {notice.title}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {notice.date}
                    </p>
                  </Link>
                </motion.div>
              ))}

              <Link
                href="/notices"
                className="flex items-center justify-center gap-2 text-primary font-medium hover:gap-3 transition-all pt-2"
              >
                View All Notices
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= FLOATING BELL ================= */}
      {/* Ripple Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="absolute w-14 h-14 rounded-full bg-green-400 opacity-30 animate-ping" />
        <span className="absolute w-14 h-14 rounded-full bg-green-400 opacity-20 animate-ping delay-200" />
        <span className="absolute w-14 h-14 rounded-full bg-green-400 opacity-10 animate-ping delay-500" />
      </div>
      <motion.button
        onClick={() => {
          const phone = "9779807307132"; // receiver whatsapp number
          const message = "Hello, how can I learn more about the admission process?"; // default message

          window.open(
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
            "_blank",
          );
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          rotate: isOpen ? 12 : 0,
        }}
        transition={{ type: "spring", stiffness: 200 }}
        className="relative w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white shadow-lg flex items-center justify-center"
      >
        <motion.div
          animate={{ rotate: isOpen ? 0 : [0, -10, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Image width={100} height={56} src={WhatsAppIcon} alt="Call" />
        </motion.div>
      </motion.button>
    </div>
  );
};
