"use client"

import { CheckCircle, Eye, Heart, Target } from "lucide-react";
import { SectionHeader } from "../shared/SectionHeader";
import { motion } from "framer-motion";




const reasons = [
  {
    icon: Target,
    title: "Our Mission",
    description: ["a", "b", "c"]
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: ['a', 'b', 'c']
  },
  {
    icon: Heart,
    title: "Our Values",
    description: [
      "Inclusive and Respect",
      "Discipline and Moral Integrity",
      "Quality Education with Culture",
      "Creativity and Innovation",
      "Social Responsibility and Civic Sense"
    ]
  },
];


const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-school">
        <SectionHeader
          title="What Drives Us"
          subtitle="Our mission, vision, and values guide everything we do"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background p-8 rounded-2xl shadow-lg border border-border hover:scale-103 hover:shadow-amber-600 hover:shadow-md"
            >
              <div className="flex gap-3 mb-2">
                <span className="">
                  <item.icon className="w-8 h-8 text-primary" />
                </span>
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">{item.title}</h3>
              </div>   
              
              {item.description.map((d) => (
                <div className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                  <CheckCircle className="text-mint shrink-0 mt-1.5" size={20} />
                  <p className="mt-1 font-body text-primary-foreground/80 font-medium">{d}</p>
              </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;


