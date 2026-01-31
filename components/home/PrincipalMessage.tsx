"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import principalImage from "@/public/principal-illustration.jpg";
import principal from "@/public/principal.jpg";
import Image from "next/image";

export const PrincipalMessage = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-school">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10">
              <Image
                src={principal}
                alt="School Principal"
                className="w-full max-w-sm md:max-w-lg lg:max-w-xl mx-auto rounded-3xl shadow-2xl"

              />
              {/* Name Card */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-hero px-6 py-3 rounded-xl shadow-golden">
                <p className="font-heading font-bold text-primary-foreground text-center">
                  Mr. Ganesh Koirala
                </p>
                <p className="text-primary-foreground/80 text-sm text-center">
                  School Chief / Principal
                </p>
              </div>
            </div>
            {/* Background */}
            <div className="absolute top-8 left-8 w-full max-w-sm md:max-w-lg lg:max-w-xl h-full bg-secondary/30 rounded-3xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Message from the{" "}
              <span className="text-gradient-golden">Principal</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Dear Parents and Students,</p>
              <p>
                Welcome to Standard Secondary Boarding School! For over three
                decades, we have been committed to nurturing young minds and
                building future leaders. Our school stands as a beacon of
                quality education in Sunsari District.
              </p>
              <p>
                We believe that every child is unique and has the potential to
                achieve greatness. Our dedicated team of educators works
                tirelessly to provide not just academic excellence, but holistic
                development that includes character building, sports, and
                cultural activities.
              </p>
              <p>
                Our motto{" "}
                <strong className="text-primary">"Education is Main Path of Success"</strong>{" "}
                reflects our commitment to preparing students not just for
                examinations, but for the challenges and opportunities life
                presents.
              </p>
              <p className="font-semibold text-foreground">
                I invite you to join our growing family of learners and
                achievers.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-16 h-1 bg-gradient-hero rounded-full" />
              <p className="italic text-primary font-semibold">
                "Education is the passport to the future"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
