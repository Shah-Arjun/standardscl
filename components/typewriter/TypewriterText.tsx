"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import pen from "@/public/pen.png";

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
  typingSpeed = 80,
  deletingSpeed = 50,
  delayBeforeDelete = 1800,
  delayBeforeNextText = 600,
  className = "",
}: TypewriterTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentText = texts[currentTextIndex];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed.length < currentText.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayed(currentText.slice(0, displayed.length + 1));
      }, typingSpeed);
    } 
    else if (!isDeleting && displayed.length === currentText.length) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), delayBeforeDelete);
    } 
    else if (isDeleting && displayed.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayed(currentText.slice(0, displayed.length - 1));
      }, deletingSpeed);
    } 
    else if (isDeleting && displayed.length === 0) {
      // Move to next text after deletion
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setDisplayed(""); // Reset for new text
      }, delayBeforeNextText);
    }

    return () => clearTimeout(timeout);
  }, [
    displayed,
    isDeleting,
    currentTextIndex,
    currentText,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBeforeDelete,
    delayBeforeNextText,
  ]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      {displayed}
      
      {/* Blinking Cursor + Pen Icon */}
      {/* <span
        aria-hidden
        className="ml-1 inline-block w-0.5 h-8 bg-yellow-700 animate-pulse"
      /> */}
      <Image 
        src={pen} 
        alt="Pen" 
        className="w-9 h-13 -ml-1 rotate-45 transition-transform duration-300 group-hover:rotate-12" 
      />
    </span>
  );
};