"use client"

import { Megaphone } from "lucide-react";

const notices = [
  "🏆 Congratulations to our students for excellent SEE results!",
  "🎓 Admissions Open for Academic Year 2083!",
  "📝 Be prepared for the Entrance Examination for new admission",
  "🏅 Annual Sports Week concluded successfully with great enthusiasm!",
  "🎉 HISSAN Creative Mela is going on",
  "🎨 Art & Science Exhibition coming soon!",
  "🙏 Successfully concluded Free New Admission Campaign on the auspicious occasion of Saraswati Puja",
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
          <div className="flex animate-marquee whitespace-nowrap min-w-max">
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
