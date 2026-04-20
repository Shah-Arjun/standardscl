"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { event as gaEvent } from "@/lib/gtag";
import PageHero from "@/components/shared/PageHero";
import { contactInfo, socialLinks } from "@/data/data";
import { Send } from "lucide-react";







const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);


  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Google Analytics
    gaEvent({
      action: "submit_contact_form",
      category: "Contact",
      label: "Contact Page Form",
    });
  
    try {
      setLoading(true);
      toast.loading("Sending message...");
  
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json(); 
  
      toast.dismiss();
  
      if (data.success) {
        toast.success("Email sent successfully!");
  
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(data.error || "Failed to send message");
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Something went wrong. Please try again.");
      // console.error(error);
    } finally {
      setLoading(false);
    }
  };





  return (
    <SiteLayout>
      {/* Hero */}
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Get in touch with us for any inquiries."
        badge="GET IN TOUCH"
      />

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
                Our team is here to help. Reach out through any of the following
                channels.
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
                      <h4 className="font-bold text-foreground mb-1">
                        {info.title}
                      </h4>
                      {info.details.map((detail, index) => (
                        <p
                          key={index}
                          className="text-muted-foreground text-sm"
                        >
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
                <div className="flex gap-4">
                  {socialLinks.map(({ icon: Icon, href, label }, index) => (
                    <a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center
                 hover:bg-primary hover:text-primary-foreground
                 transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                  {/* tiktok */}
                  <a
                    href="https://www.tiktok.com/@standard.boarding?_r=1&_t=ZS-95gRDyVHNX5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center
                    hover:bg-primary hover:text-primary-foreground
                    transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M16 3c.3 2.5 1.8 4 4 4v3c-1.5 0-2.9-.4-4-1v6.5a5.5 5.5 0 1 1-5.5-5.5c.3 0 .7 0 1 .1v3.1a2.5 2.5 0 1 0 2.5 2.5V3h2z" />
                    </svg>
                  </a>
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
                      <Label htmlFor="email">Your Email Address</Label>
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

                  <Button
                    type="submit"
                    className="btn-primary-school w-full"
                    disabled={loading}
                  >
                    <Send className="mr-2 w-4 h-4" />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
};

export default Contact;
