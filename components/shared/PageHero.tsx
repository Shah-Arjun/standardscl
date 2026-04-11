"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}

export const PageHero = ({
  title,
  subtitle = "Stay updated with the latest information from our school",
  badge = "LATEST ANNOUNCEMENTS",
  className = "",
}: PageHeroProps) => {
  return (
    <section className={`relative overflow-hidden bg-gradient-to-br from-amber-500 via-amber-600 to-orange-900 min-h-[280px] md:minh-[360px] lg:min-h-[400px] flex items-center ${className}`}>
      
      {/* Soft Golden Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#fcd34d12_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(at_bottom_left,#fbbf2410_0%,transparent_65%)]" />

      {/* Gentle Curved Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-28 md:h-36 text-amber-800/80"
          viewBox="0 0 1440 140"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,85 580,125 850,92 C1150,52 1380,68 1440,0 L1440,140 L0,140 Z"
          />
        </svg>
      </div>


{/*content container */}
      <div className="container-school relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto pt-10 pb-18"
        >
          {/* Soft Elegant Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-7 py-2 bg-white/10 backdrop-blur-md border border-amber-400/20 rounded-full mb-8"
          >
            <div className="w-2.5 h-2.5 bg-amber-300 rounded-full animate-pulse" />
            <span className="text-xs font-medium tracking-widest text-amber-100/90">
              {badge}
            </span>
          </motion.div>



          {/* Soft Golden Heading */}
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 bg-gradient-to-br from-amber-100 via-yellow-100 to-amber-200 bg-clip-text text-transparent">
            {title}
          </h1>



          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-md md:text-xl text-amber-100/80 max-w-2xl mx-auto leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>



      {/* Very Soft Floating Accents */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-16 w-44 h-44 bg-gradient-to-br from-amber-100 to-yellow-200 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          y: [0, 25, 0],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-32 right-20 w-52 h-52 bg-gradient-to-br from-yellow-300/10 to-amber-200/10 rounded-full blur-3xl"
      />
    </section>
  );
};

export default PageHero;