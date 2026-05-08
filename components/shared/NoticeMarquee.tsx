"use client"

import { Megaphone } from "lucide-react";
import NepaliDate from "nepali-date-converter";
import { useEffect, useState } from "react";




type Notice = {
  id: number;
  title: string;
  category: string;
  date: string;
  content: string;
  postedBy: string;
  createdAt: string;
};




export const NoticeMarquee = () => {
  const [notices, setNotices] = useState<Notice[]>([])



  const fetchNotices = async() => {
    try {
      const res = await fetch("/api/notices")
      const data = await res.json()

      const sortedByNewNotices = Array.isArray(data)
      ? data.sort(
          (a: Notice, b: Notice) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
      : [];

      setNotices(sortedByNewNotices)
    } catch (err) {
        console.error("Failed to load notices", err)
    }

  }



  useEffect(() => {
    fetchNotices();
  }, []);




  return (
    <div className="sticky top-18 bg-secondary text-secondary-foreground overflow-hidden z-40">
      <div className="w-full flex items-center">
        <div className="flex items-center gap-2 bg-primary px-3 py-0.5 rounded-full mr-2 flex-shrink-0">
        <Megaphone className="w-4 h-4" />
        {/* <span className="hidden sm:inline text-xs font-semibold">Notice</span> */}
      </div>
        <div className="overflow-hidden flex-1">
          <div className="flex animate-marquee whitespace-nowrap min-w-max">
          {notices.map((notice) => {
              const bsDate = new NepaliDate(new Date(notice.createdAt));

              return (
                <span key={notice.id} className="mx-8 text-xs font-light">
                  <time
                    dateTime={notice.createdAt}
                    className="mr-2"
                  >
                    {bsDate.format("DD MMMM YYYY")}
                  </time>
                  - {notice.title}
                </span>
              );
            })}

            {/* repeat */}
            {/* {notices.map((notice, index) => (
              <span key={`repeat-${index}`} className="mx-8 text-sm font-medium">
                <time dateTime={notice.createdAt} className="mr-2 text-muted-foreground">
                  {new Date(notice.createdAt).toLocaleDateString()}
                </time>
                {notice.title}
              </span>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};
