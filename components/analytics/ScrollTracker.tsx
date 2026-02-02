"use client";

import { useEffect, useRef } from "react";
import { event as gaEvent } from "@/lib/gtag";

export default function ScrollTracker() {
  const fired = useRef({ half: false, full: false });

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      if (scrollPercent >= 50 && !fired.current.half) {
        fired.current.half = true;
        gaEvent({
          action: "scroll_50",
          category: "Engagement",
          label: "Page Scroll 50%",
        });
      }

      if (scrollPercent >= 90 && !fired.current.full) {
        fired.current.full = true;
        gaEvent({
          action: "scroll_90",
          category: "Engagement",
          label: "Page Scroll 90%",
        });
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
