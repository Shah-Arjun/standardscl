"use client"

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { PrincipalMessage } from "@/components/home/PrincipalMessage";
import { Target, Eye, Heart, Award, Users, BookOpen } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide quality education that develops intellectual, physical, and moral excellence in students, preparing them for challenges of the modern world.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the leading educational institution in Nepal, recognized for academic excellence, character development, and community contribution.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, discipline, respect, excellence, and compassion form the foundation of everything we do at Standard Secondary.",
  },
];

const stats = [
  { number: "30+", label: "Years of Excellence" },
  { number: "500+", label: "Students Enrolled" },
  { number: "50+", label: "Qualified Teachers" },
  { number: "95%", label: "SEE Pass Rate" },
];

const About = () => {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-gradient-hero section-padding text-primary-foreground">
        <div className="container-school">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              About Our School
            </h1>
            <p className="text-xl text-white/90">
              Building tomorrow's leaders through quality education, discipline, and values
              in the heart of Sunsari District, Nepal.
            </p>
          </motion.div>
        </div>
      </section>

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
                  Standard Secondary Boarding School was established with a vision to
                  provide quality education accessible to all. Located in the beautiful
                  Itahari-17, Sunsari District of Nepal, our school has grown to become
                  one of the most trusted educational institutions in the region.
                </p>
                <p>
                  Over the decades, we have maintained our commitment to academic
                  excellence while embracing modern teaching methodologies. Our English
                  medium instruction following the NEB Nepal curriculum ensures students
                  are well-prepared for both national examinations and global opportunities.
                </p>
                <p>
                  What sets us apart is our holistic approach to education. We believe
                  that true education goes beyond textbooks - it shapes character,
                  builds confidence, and nurtures talent. Our boarding facility provides
                  a home away from home, fostering independence and lifelong friendships.
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
                className="bg-card p-8 rounded-2xl shadow-lg border border-border"
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mb-6 shadow-golden">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
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
            {[
              {
                icon: Award,
                title: "Academic Excellence",
                description: "Consistently high SEE pass rates and top performers",
              },
              {
                icon: Users,
                title: "Experienced Faculty",
                description: "Qualified and dedicated teaching professionals",
              },
              {
                icon: BookOpen,
                title: "Modern Curriculum",
                description: "NEB curriculum with English medium instruction",
              },
              {
                icon: Heart,
                title: "Safe Environment",
                description: "24/7 security with CCTV surveillance",
              },
              {
                icon: Target,
                title: "Holistic Development",
                description: "Balance of academics, sports, and arts",
              },
              {
                icon: Eye,
                title: "Individual Attention",
                description: "Optimal student-teacher ratio for personalized learning",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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
