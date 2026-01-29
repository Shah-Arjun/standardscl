"use client"

import { Megaphone } from "lucide-react";

const notices = [
  "🎓 Admissions Open for Academic Year 2025-2026!",
  "🏆 Congratulations to our students for excellent SEE results!",
  "📅 Annual Sports Week starting from February 1st",
  "📝 Entrance Examination scheduled for March 15th",
  "🎨 Art & Science Exhibition coming soon!",
];

export const NoticeMarquee = () => {
  return (
    <div className="bg-secondary text-secondary-foreground py-2 overflow-hidden">
      <div className="container-school flex items-center">
        <div className="flex items-center gap-2 bg-primary px-4 py-1 rounded-full mr-4 flex-shrink-0">
          <Megaphone className="w-4 h-4" />
          <span className="text-sm font-semibold">Notice</span>
        </div>
        <div className="overflow-hidden flex-1">
          <div className="flex animate-marquee whitespace-nowrap">
            {notices.map((notice, index) => (
              <span key={index} className="mx-8 text-sm font-medium">
                {notice}
              </span>
            ))}
            {notices.map((notice, index) => (
              <span key={`repeat-${index}`} className="mx-8 text-sm font-medium">
                {notice}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
