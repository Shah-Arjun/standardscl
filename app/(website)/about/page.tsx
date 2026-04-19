"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { PrincipalMessage } from "@/components/home/PrincipalMessage";
import { SiteLayout } from "@/components/layout/SiteLayout";
import PageHero from "@/components/shared/PageHero";
import { values, whyUs, stats } from "@/data/data";
import { CheckCircle } from "lucide-react";





const About = () => {
  return (
    <SiteLayout>
      {/* Hero */}
      <PageHero
        title="About Our School"
        subtitle="Building tomorrow's leaders through quality education, discipline, and values in the heart of Sunsari District, Nepal."
        badge="WHO WE ARE"
      />

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-school">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Our <span className="text-gradient-golden">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Standard Secondary Boarding School was established with a
                  vision to provide quality education accessible to all. Located
                  in the beautiful Itahari-17, Sunsari District of Nepal, our
                  school has grown to become one of the most trusted educational
                  institutions in the region.
                </p>
                <p>
                  Over the decades, we have maintained our commitment to
                  academic excellence while embracing modern teaching
                  methodologies. Our English medium instruction following the
                  NEB Nepal curriculum ensures students are well-prepared for
                  both national examinations and global opportunities.
                </p>
                <p>
                  What sets us apart is our holistic approach to education. We
                  believe that true education goes beyond textbooks - it shapes
                  character, builds confidence, and nurtures talent. Our
                  boarding facility provides a home away from home, fostering
                  independence and lifelong friendships.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-card p-6 rounded-2xl text-center border border-border card-hover"
                >
                  <p className="font-heading font-bold text-4xl text-primary mb-2">
                    {stat.number}
                  </p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>








      {/* Mission, Vision, Values */}
      <section className="section-padding bg-muted">
        <div className="container-school">
          <SectionHeader
            title="What Drives Us"
            subtitle="Our mission, vision, and values guide everything we do"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:scale-103 hover:shadow-amber-600 hover:shadow-md"
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mb-6 shadow-golden">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                  {item.title}
                </h3>
                {item.description.map((d, i) => (
                  <div key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                    <CheckCircle className="text-mint shrink-0 mt-1.5" size={22} />
                    <p className="mt-1 font-body text-primary-foreground/75 font-medium">{d}</p>
                </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>









      {/* Principal Message */}
      <PrincipalMessage />




      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-school">
          <SectionHeader
            title="Why Choose Us"
            subtitle="Discover what makes Standard Secondary the right choice for your child"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary " />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default About;
