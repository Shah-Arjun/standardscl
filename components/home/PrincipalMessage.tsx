"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import principal from "@/public/principal.jpg";
import Image from "next/image";

export const PrincipalMessage = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-school">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 group lg:m-20">
              <Image
                src="https://res.cloudinary.com/dpraq0j6y/image/upload/f_auto,q_auto,w_800/v1775802322/teachers/fup318vjjwk7sxmfevge.jpg"
                alt="School Principal"
                width={800}
                height={1000}
                quality={100}
                priority
                className="w-full max-w-sm md:max-w-lg lg:max-w-xl mx-auto rounded-2xl object-cover  border-6 border-white/60 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-golden"
              />
              {/* Name Card */}
              <div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-hero px-6 py-4 rounded-xl shadow-golden backdrop-blur-md border border-white/20"
              >
                <p className="font-heading font-bold text-primary-foreground text-center text-lg">
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
                building future leaders.
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
                <strong className="text-primary">
                  "Education is Main Path of Success"
                </strong>{" "}
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
