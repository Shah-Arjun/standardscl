"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const PrincipalMessage = () => {
  return (
    <section className="section-padding bg-muted py-16 lg:py-24">
      <div className="mx-auto px-6">
        <div className="container-school grid lg:grid-cols-2 gap-12 lg:gap-2 items-center">
          
          {/* Principal Image Section - Left on desktop/tablet */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md">
              {/* Main Image */}
              <div className="relative z-10 group hover:grayscale transition-all duration-300">
                <Image
                  src="https://res.cloudinary.com/dpraq0j6y/image/upload/v1776099993/copy_of_copy_of_e30a12dd-0594-4e5c-ba1a-1f95e484753c_qavkkb_3d7960_d7b86d.jpg"
                  alt="Mr. Ganesh Koirala - School Principal"
                  width={700}
                  height={850}
                  quality={100}
                  priority
                  className="w-full rounded-3xl object-cover shadow-2xl border-8 border-white transition-transform duration-700 group-hover:scale-[1.03]"
                />

                {/* Decorative Overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Name Card */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-lg px-4 py-2 lg:py-3 lg:px-6 rounded-2xl shadow-xl border border-white z-20 w-fit">
                <p className="font-heading font-bold text-md md:text-lg text-center text-gray-900 whitespace-nowrap">
                  Mr. Ganesh Koirala
                </p>
                <p className="text-primary text-xs lg:text-sm text-center font-medium lg:mt-1">
                  Principal &amp; School Chief
                </p>
              </div>

              {/* Background Accent */}
              <div className="absolute -top-8 -right-8 w-full h-full bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-3xl -z-10" />
            </div>
          </motion.div>

          {/* Message Content - Right on desktop/tablet */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="space-y-8 pt-6 lg:pt-0 "
          >
            <div className="text-center lg:text-left">
              <h2 className="font-heading font-bold text-3xl md:text-4xl leading-tight mb-6">
                Message from the{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Principal
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-md text-muted-foreground leading-relaxed">
              <p className="text-foreground">Dear Parents and Students,</p>

              <p>
                We believe that every child is unique and possesses immense potential. 
                Our dedicated team of educators works tirelessly to provide not just 
                academic excellence, but holistic development — encompassing character 
                building, sports, arts, and leadership skills.
              </p>

              <p>
                Our motto{" "}
                <span className="font-semibold text-primary">&quot;Education is Main Path of Success&quot;</span>{" "}
                reflects our deep commitment to preparing students not only for examinations, 
                but for the real challenges and opportunities that life offers.
              </p>

              <p className="font-semibold text-foreground pt-2">
                I warmly invite you to join our growing family of learners and achievers.
              </p>
            

            {/* Inspirational Quote */}
            <div className="text-foreground flex items-center">
              {/* <div className="flex-shrink-0 w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" /> */}
              <p className="italic text-md font-light">
               - &quot;Education is the passport to the future&quot;
              </p>
            </div>
            <div className="border-t border-gray-200 flex items-center">
              {/* <div className="flex-shrink-0 w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" /> */}
              <p className="text-md font-light">
                Thank you.
              </p>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;