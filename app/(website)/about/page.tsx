"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { PrincipalMessage } from "@/components/home/PrincipalMessage";
import { SiteLayout } from "@/components/layout/SiteLayout";
import PageHero from "@/components/shared/PageHero";
import { CheckCircle, Bus, BookOpen, Laptop, FlaskConical } from "lucide-react";
import { values, whyUs, stats } from "@/data/data";
import { 
  Users, 
  Shield, 
  Palette, 
  Award 
} from "lucide-react";




// Features Data 
const features = [
  {
    title: "Computer & Technology",
    bgColor: "bg-blue-100 group-hover:bg-blue-200",
    icon: <Laptop className="w-5 h-5 text-blue-600" />,
    items: [
      "20+ modern computers",
      "Internet & email learning",
      "Smart board facilities",
    ],
  },
  {
    title: "Robotics & IT Training",
    bgColor: "bg-cyan-100 group-hover:bg-cyan-200",
    icon: <Award className="w-5 h-5 text-cyan-600" />, // Robotics feel
    items: [
      "Robotics training by special instructors",
      "Advanced IT skills development",
      "Hands-on practical sessions",
    ],
  },
  {
    title: "Science Laboratory",
    bgColor: "bg-purple-100 group-hover:bg-purple-200",
    icon: <FlaskConical className="w-5 h-5 text-purple-600" />,
    items: [
      "Modern science laboratory",
      "Resources for practical learning",
    ],
  },
  {
    title: "Transportation",
    bgColor: "bg-orange-100 group-hover:bg-orange-200",
    icon: <Bus className="w-5 h-5 text-orange-600" />,
    items: [
      "Safe and reliable school bus",
      "Coverage in nearby areas",
      "Affordable student-friendly rates",
    ],
  },
  {
    title: "Teaching Methodology",
    bgColor: "bg-indigo-100 group-hover:bg-indigo-200",
    icon: <BookOpen className="w-5 h-5 text-indigo-600" />,
    items: [
      "Student-centered learning",
      "English Medium with Nepali support when needed",
      "Interactive and practical approach",
    ],
  },
  {
    title: "Scouts & Clubs",
    bgColor: "bg-emerald-100 group-hover:bg-emerald-200",
    icon: <Users className="w-5 h-5 text-emerald-600" />,
    items: [
      "Scouts",
      "Bal Club",
      "Student Quality Circle (SQC)",
      "Red Cross Society",
    ],
  },
  {
    title: "Extra Curricular Activities",
    bgColor: "bg-pink-100 group-hover:bg-pink-200",
    icon: <Palette className="w-5 h-5 text-pink-600" />,
    items: [
      "Dance and Music classes",
      "Art and Craft sessions",
      "Sports and cultural programs",
    ],
  },
  {
    title: "Safety & Other Facilities",
    bgColor: "bg-rose-100 group-hover:bg-rose-200",
    icon: <Shield className="w-5 h-5 text-rose-600" />,
    fullWidth: true,
    items: [
      "24/7 CCTV surveillance",
      "Secure and safe campus",
      "Hygienic school canteen",
    ],
  },
];






const About = () => {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <PageHero
        title="About Our School"
        subtitle="Building tomorrow's leaders through quality education, discipline, and values in the heart of Sunsari District, Nepal."
        badge="WHO WE ARE"
      />



      {/* Our Story + Features Section */}
      <section className="section-padding bg-background">
        <div className="container-school mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg"
            >
              <div className="space-y-8 prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  Standard Secondary Boarding School, established in <strong>2051 BS</strong> and located in <strong>Itahari-17, Pakali</strong>, is a well-recognized academic institution committed to quality education from <strong>Play Group to Class 10</strong>. 
                  Guided by a team of highly qualified and dedicated teachers, the school provides a <strong>supportive and student-centered learning environment</strong>.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  It is a <strong>centre for excellence</strong> where students learn and develop their <strong>full potential</strong>. 
                  The school is known for its excellent teaching-learning environment with <strong>appropriate class sizes</strong>.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Spread over <strong>0-4-10 bigha</strong> of land, the school features a spacious campus with a <strong>four-storey building</strong> containing more than <strong>30 rooms</strong> and a beautiful garden, creating a peaceful and inspiring atmosphere for learning.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  The school was established to provide quality education to the children of Itahari Municipality and surrounding areas. 
                  Our <strong>excellent SLC and SEE results</strong> in the early years reflect the dedication of our teachers. 
                  We are proud of our students who have achieved <strong>distinction</strong> in board examinations.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  With continuous development and <strong>modern infrastructure</strong>, we strive to provide every facility required for a <strong>complete and holistic educational experience</strong>.
                </p>
              </div>
            </motion.div>




            
              {/* Features Grid - Optimized */}
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl border bg-card hover:shadow-md transition-all duration-300 group ${
                      feature.fullWidth ? "md:col-span-2 lg:col-span-1" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${feature.bgColor}`}>
                        {feature.icon}
                      </div>
                      <h3 className="font-semibold text-lg text-foreground">{feature.title}</h3>
                    </div>

                    <ul className="space-y-3">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-gray-600">
                          <CheckCircle 
                            size={18} 
                            className="text-green-500 mt-1 flex-shrink-0" 
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

          </div>




          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl text-center border hover:border-primary/50 transition-all"
              >
                <p className="font-heading font-bold text-4xl md:text-5xl text-primary mb-2">
                  {stat.number}
                </p>
                <p className="text-muted-foreground text-sm md:text-base font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* Mission, Vision & Values */}
      <section className="section-padding bg-muted">
        <div className="container-school mx-auto px-4">
          <SectionHeader
            title="What Drives Us"
            subtitle="Our mission, vision, and values guide everything we do"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-5">{item.title}</h3>
                <div className="space-y-4">
                  {item.description.map((desc, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle className="text-emerald-500 shrink-0 mt-1" size={22} />
                      <p className="text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal Message */}
      <PrincipalMessage />

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-school mx-auto px-4">
          <SectionHeader
            title="Why Choose Us"
            subtitle="Discover what makes Standard Secondary the right choice for your child"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex gap-5 p-7 bg-card rounded-2xl border border-border hover:border-primary hover:shadow-md transition-all group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-xl mb-2 text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">
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