"use client";

import { useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import {
  FileText,
  Calendar,
  ClipboardList,
  Download,
  CheckCircle,
  ArrowRight,
} from "lucide-react";



const steps = [
  {
    number: 1,
    title: "Submit Application",
    description: "Fill out the online form or collect from office",
  },
  {
    number: 2,
    title: "Entrance Test",
    description: "Appear for entrance examination",
  },
  {
    number: 3,
    title: "Interview",
    description: "Student and parent interview",
  },
  {
    number: 4,
    title: "Admission Confirmation",
    description: "Submit documents and fees",
  },
];



const requirements = [
  "Birth Certificate (Original & Copy)",
  "Character Certificate from previous school",
  "Transfer Certificate (if applicable)",
  "Recent passport-size photos (4 copies)",
  "Parent's Citizenship copy",
  "Previous grade mark sheet",
];



const Admissions = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    grade: "",
    message: "",
  });



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      "Application submitted successfully! We will contact you soon.",
    );
    setFormData({
      studentName: "",
      parentName: "",
      email: "",
      phone: "",
      grade: "",
      message: "",
    });
  };


  
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-gradient-hero section-padding text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container-school relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 animate-pulse-glow">
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="font-semibold">Admissions Open 2025-2026</span>
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              Join Our Family
            </h1>
            <p className="text-xl text-white/90">
              Begin your child's journey to excellence. Limited seats available
              for the upcoming academic year.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-padding bg-background">
        <div className="container-school">
          <SectionHeader
            title="Admission Process"
            subtitle="Simple and transparent admission procedure"
          />

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-hero -translate-x-1/2 z-0" />
                )}
                <div className="bg-card p-6 rounded-2xl border border-border relative z-10 h-full">
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mb-4 shadow-golden">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Form */}
      <section className="section-padding bg-muted">
        <div className="container-school">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                Documents Required
              </h2>
              <div className="bg-card p-6 rounded-2xl border border-border mb-8">
                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                Important Dates
              </h2>
              <div className="space-y-4">
                <div className="bg-card p-4 rounded-xl border border-border flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Entrance Exam</p>
                    <p className="text-muted-foreground text-sm">
                      March 15, 2025
                    </p>
                  </div>
                </div>
                <div className="bg-card p-4 rounded-xl border border-border flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <ClipboardList className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">
                      Last Date to Apply
                    </p>
                    <p className="text-muted-foreground text-sm">
                      March 10, 2025
                    </p>
                  </div>
                </div>
              </div>

              {/* Download Prospectus */}
              <Button className="btn-secondary-school mt-8 w-full group">
                <Download className="mr-2 w-5 h-5" />
                Download Prospectus
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                Online Application
              </h2>
              <form
                onSubmit={handleSubmit}
                className="bg-card p-8 rounded-2xl shadow-lg border border-border"
              >
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="studentName">Student's Full Name</Label>
                    <Input
                      id="studentName"
                      value={formData.studentName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          studentName: e.target.value,
                        })
                      }
                      placeholder="Enter student's full name"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="parentName">Parent/Guardian Name</Label>
                    <Input
                      id="parentName"
                      value={formData.parentName}
                      onChange={(e) =>
                        setFormData({ ...formData, parentName: e.target.value })
                      }
                      placeholder="Enter parent's full name"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="your@email.com"
                        required
                        className="mt-2"
                      />
                    </div>
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
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="grade">Applying for Grade</Label>
                    <Select
                      value={formData.grade}
                      onValueChange={(value) =>
                        setFormData({ ...formData, grade: value })
                      }
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select Grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nursery">Nursery</SelectItem>
                        <SelectItem value="lkg">LKG</SelectItem>
                        <SelectItem value="ukg">UKG</SelectItem>
                        <SelectItem value="1">Grade 1</SelectItem>
                        <SelectItem value="2">Grade 2</SelectItem>
                        <SelectItem value="3">Grade 3</SelectItem>
                        <SelectItem value="4">Grade 4</SelectItem>
                        <SelectItem value="5">Grade 5</SelectItem>
                        <SelectItem value="6">Grade 6</SelectItem>
                        <SelectItem value="7">Grade 7</SelectItem>
                        <SelectItem value="8">Grade 8</SelectItem>
                        <SelectItem value="9">Grade 9</SelectItem>
                        <SelectItem value="10">Grade 10</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">
                      Additional Message (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Any additional information..."
                      className="mt-2"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="btn-primary-school w-full">
                    Submit Application
                    <ArrowRight className="ml-2 w-4 h-4" />
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

export default Admissions;
