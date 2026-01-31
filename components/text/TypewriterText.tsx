"use client";

import { useEffect, useState } from "react";

type TypewriterTextProps = {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBeforeDelete?: number;
  delayBeforeType?: number;
  className?: string;
};

export const TypewriterText = ({
  text,
  typingSpeed = 120,
  deletingSpeed = 100,
  delayBeforeDelete = 1100,
  delayBeforeType = 500,
  className = "",
}: TypewriterTextProps) => {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayed.length === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), delayBeforeDelete);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayed.length === 0) {
      timeout = setTimeout(() => setIsDeleting(false), delayBeforeType);
    }

    return () => clearTimeout(timeout);
  }, [
    displayed,
    isDeleting,
    text,
    typingSpeed,
    deletingSpeed,
    delayBeforeDelete,
    delayBeforeType,
  ]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      {displayed}

      {/* ✅ VISIBLE CURSOR (gradient-safe) */}
      <span
        aria-hidden
        className="
          ml-1
          inline-block
          h-[0.8em]
          border-l-5
          border-yellow-700
          animate-caret
        "
      />
    </span>
  );
};
