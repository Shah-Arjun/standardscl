"use client"

import { motion } from "framer-motion";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/shared/PageHero";
import {
  FlaskConical,
  Monitor,
  Building2,
  Trophy,
  Bus,
  Shield,
  Tv,
  Wifi,
  BookOpen,
  Utensils,
} from "lucide-react";

const facilities = [
  {
    icon: FlaskConical,
    title: "Science Laboratory",
    description:
      "State-of-the-art physics, chemistry, and biology labs with modern equipment for hands-on experiments and practical learning experiences.",
    features: ["Modern Equipment", "Safety Measures", "Expert Supervision"],
  },
  {
    icon: Monitor,
    title: "Computer Lab",
    description:
      "Fully equipped computer laboratory with latest computers, high-speed internet, and dedicated computer training programs for all students.",
    features: ["Latest Computers", "High-Speed Internet", "Regular Training"],
  },
  {
    icon: Building2,
    title: "Hostel Facility",
    description:
      "Safe and comfortable boarding facility with separate wings for boys and girls, providing a home away from home environment.",
    features: ["24/7 Supervision", "Nutritious Meals", "Study Rooms"],
  },
  {
    icon: Trophy,
    title: "Sports Ground",
    description:
      "Spacious playground for various sports including football, cricket, basketball, badminton, and athletics.",
    features: ["Multiple Sports", "Professional Coaching", "Annual Events"],
  },
  {
    icon: Bus,
    title: "Transportation",
    description:
      "Safe and reliable school bus service covering major routes in Itahari and surrounding areas with experienced drivers.",
    features: ["GPS Tracking", "Experienced Drivers", "Wide Coverage"],
  },
  {
    icon: Shield,
    title: "CCTV & Security",
    description:
      "Comprehensive security system with CCTV surveillance throughout the campus and trained security personnel.",
    features: ["24/7 Surveillance", "Trained Guards", "Emergency Response"],
  },
  {
    icon: Tv,
    title: "Smart Classrooms",
    description:
      "Modern smart classrooms with interactive digital boards, projectors, and audio-visual equipment for enhanced learning.",
    features: ["Digital Boards", "Projectors", "Audio-Visual Aids"],
  },
  {
    icon: BookOpen,
    title: "Library",
    description:
      "Well-stocked library with thousands of books, magazines, and reference materials to support academic and recreational reading.",
    features: ["Vast Collection", "Reading Area", "Digital Resources"],
  },
  {
    icon: Wifi,
    title: "Digital Campus",
    description:
      "Wi-Fi enabled campus supporting digital learning initiatives and online educational resources.",
    features: ["Campus-Wide WiFi", "Digital Learning", "Online Resources"],
  },
  {
    icon: Utensils,
    title: "Cafeteria",
    description:
      "Hygienic cafeteria serving nutritious meals prepared under strict quality standards with variety of options.",
    features: ["Nutritious Food", "Hygienic Preparation", "Variety Menu"],
  },
];



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
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center flex-shrink-0 shadow-golden group-hover:scale-110 transition-transform">
                    <facility.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                      {facility.title}
                    </h3>
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
