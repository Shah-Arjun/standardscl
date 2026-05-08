"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import pen from "@/public/pen.png";

const splitGraphemes = (text: string) => {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    return Array.from(segmenter.segment(text), (part) => part.segment);
  }

  return Array.from(text);
};

type TypewriterTextProps = {
  texts: string[];                    // Now accepts array of texts
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBeforeDelete?: number;
  delayBeforeNextText?: number;
  className?: string;
};

export const TypewriterText = ({
  texts = ["Standard Secondary", "स्ट्याण्डर्ड सेकेण्डरी"],
  typingSpeed = 90,
  deletingSpeed = typingSpeed,
  delayBeforeDelete = 1800,
  delayBeforeNextText = 600,
  className = "",
}: TypewriterTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedCount, setDisplayedCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentText = texts[currentTextIndex] ?? "";
  const graphemes = useMemo(() => splitGraphemes(currentText), [currentText]);
  const displayed = graphemes.slice(0, displayedCount).join("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedCount < graphemes.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayedCount((prev) => prev + 1);
      }, typingSpeed);
    } else if (!isDeleting && displayedCount === graphemes.length) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), delayBeforeDelete);
    } else if (isDeleting && displayedCount > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayedCount((prev) => prev - 1);
      }, deletingSpeed);
    } else if (isDeleting && displayedCount === 0) {
      // Move to next text after deletion
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, delayBeforeNextText);
    }

    return () => clearTimeout(timeout);
  }, [
    displayedCount,
    graphemes.length,
    isDeleting,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBeforeDelete,
    delayBeforeNextText,
  ]);

  return (
    <span className={`inline-flex items-baseline leading-[1.2] ${className}`}>
      {displayed}
      
      {/* Blinking Cursor + Pen Icon */}
      {/* <span
        aria-hidden
        className="ml-1 inline-block w-0.5 h-8 bg-yellow-700 animate-pulse"
      /> */}
      <Image 
        src={pen} 
        alt="Pen" 
        className="w-8 h-8 sm:w-9 md:h-11 lg:h-11 mb-3.5 -ml-1 self-end rotate-50 transition-transform duration-300 group-hover:rotate-12" 
      />
    </span>
  );
};