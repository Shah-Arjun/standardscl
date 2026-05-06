"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
// import Image from "next/image";
import { activities } from "@/data/data";





export const ActivitiesSection = () => {
    return (
        <section className="section-padding bg-background">
            <div className="container-school">
                <SectionHeader
                    title="Beyond Academics"
                    subtitle="A vibrant student life with co-curricular activities that develop well-rounded individuals"
                />

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Activities Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                    >
                        {activities.map((activity, index) => (
                            <motion.div
                                key={activity.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-card p-4 rounded-xl border border-border hover:border-primary hover:shadow-golden transition-all group cursor-pointer"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <activity.icon className="w-6 h-6" />
                                </div>
                                <h4 className="font-heading font-bold text-foreground mb-1">
                                    {activity.title}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                    {activity.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <img
                            src="https://res.cloudinary.com/dpraq0j6y/image/upload/v1770037838/sports_nd9wgi.jpg"
                            alt="Students enjoying co-curricular activities"
                            className="rounded-3xl shadow-lg w-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent rounded-3xl" />

                        {/* Floating Badge */}
                        <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg">
                            <p className="font-heading font-bold text-2xl text-primary">
                                20+
                            </p>
                            <p className="text-muted-foreground text-sm">
                                Activities & Clubs
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
