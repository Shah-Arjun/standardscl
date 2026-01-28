"use client"

import { useState } from "react";
import { Bell, X, ChevronRight } from "lucide-react";
import Link from "next/link";

const latestNotices = [
  { id: 1, title: "Admissions Open for 2025", date: "Jan 15, 2025" },
  { id: 2, title: "Annual Sports Week", date: "Jan 20, 2025" },
  { id: 3, title: "Parent-Teacher Meeting", date: "Jan 25, 2025" },
];

export const FloatingNotice = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Notice Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-card border border-border rounded-2xl shadow-lg overflow-hidden animate-scale-up">
          <div className="bg-gradient-hero p-4 flex items-center justify-between">
            <h3 className="font-heading font-bold text-primary-foreground">Latest Notices</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 space-y-3">
            {latestNotices.map((notice) => (
              <Link
                key={notice.id}
                href="/notices"
                className="block p-3 rounded-lg bg-muted hover:bg-primary/10 transition-colors group"
              >
                <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {notice.title}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{notice.date}</p>
              </Link>
            ))}
            <Link
              href="/notices"
              className="flex items-center justify-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View All Notices
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full bg-gradient-hero shadow-golden flex items-center justify-center transition-all hover:scale-110 ${
          isOpen ? "rotate-12" : "animate-bounce-slow"
        }`}
      >
        <Bell className="w-6 h-6 text-primary-foreground" />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-secondary-foreground text-xs font-bold rounded-full flex items-center justify-center">
          3
        </span>
      </button>
    </div>
  );
};
