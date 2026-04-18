"use client"

import { motion } from "framer-motion";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/shared/PageHero";
import { facilities } from "@/data/data";





const Facilities = () => {
  return (
    <SiteLayout>
      {/* Hero */}
      <PageHero
        title="Our Facilities"
        subtitle="World-class infrastructure to support holistic education and development of our students"
        badge="WHAT WE OFFER"
      />

      {/* Facilities Grid */}
      <section className="section-padding bg-background">
        <div className="container-school">
          {/* <SectionHeader
            title="Campus Facilities"
            subtitle="Everything your child needs for an excellent educational experience"
          /> */}
          

          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card p-6 rounded-2xl border border-border hover:border-primary transition-colors group"
              >
                <div className="flex gap-6">
                  <div className="w-13 h-13 lg:w-16 lg:h-16 bg-gradient-hero rounded-2xl flex items-center justify-center flex-shrink-0 shadow-golden group-hover:scale-110 transition-transform">
                    <facility.icon className="w-6 h-6 lg:w-8 lg:h-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2">{facility.title}</h3>
                    <p className="text-muted-foreground mb-4">{facility.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {facility.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Facilities;
