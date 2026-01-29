"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";



const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["Itahari-17, Sunsari District", "Nepal"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["9800000000", "025-XXXXXX"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["standard@gmail.com", "info@standardschool.edu.np"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Sunday - Friday: 8:00 AM - 5:00 PM", "Saturday: Closed"],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

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
              Contact Us
            </h1>
            <p className="text-xl text-white/90">
              We'd love to hear from you. Get in touch with us for any inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-school">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                Have questions about admissions, academics, or anything else? 
                Our team is here to help. Reach out through any of the following channels.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="flex gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary transition-colors"
                  >
                    <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center flex-shrink-0 shadow-golden">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{info.title}</h4>
                      {info.details.map((detail, index) => (
                        <p key={index} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-heading font-bold text-foreground mb-4">
                  Follow Us
                </h4>
                <div className="flex items-center gap-4">
                  {[Facebook, Instagram, Youtube, Twitter].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-card p-8 rounded-2xl shadow-lg border border-border"
              >
                <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                  Send a Message
                </h2>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="98XXXXXXXX"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="Inquiry about..."
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Write your message here..."
                      required
                      className="mt-2"
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="btn-primary-school w-full">
                    <Send className="mr-2 w-4 h-4" />
                    Send Message
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.2!2d87.27!3d26.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTTZKQytGWDksIFJhbWRodW5pIEJoYXNpIDU2NzA1LCBOZXB1bA!5e0!3m2!1sen!2snp!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="School Location"
        />
      </section>
    </SiteLayout>
  );
};

export default Contact;
