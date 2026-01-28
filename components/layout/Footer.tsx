"use client"

import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Admissions", path: "/admissions" },
  { name: "Facilities", path: "/facilities" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const academicLinks = [
  { name: "Pre-Primary", path: "/grades#pre-primary" },
  { name: "Primary", path: "/grades#primary" },
  { name: "Lower Secondary", path: "/grades#lower-secondary" },
  { name: "Secondary", path: "/grades#secondary" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-school">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* School Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-golden rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-foreground">S</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg">Standard Secondary</h3>
                  <p className="text-sm text-muted-foreground">Boarding School</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nurturing young minds since establishment. We believe in holistic education
                that prepares students for life's challenges.
              </p>
              <p className="text-golden font-semibold italic">"Learning for Life"</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-6 text-golden">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-muted-foreground hover:text-golden transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academics */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-6 text-golden">Academics</h4>
              <ul className="space-y-3">
                {academicLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-muted-foreground hover:text-golden transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-6 text-golden">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-golden mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">
                    Itahari-17, Sunsari District, Nepal
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-golden shrink-0" />
                  <a href="tel:9800000000" className="text-muted-foreground hover:text-golden transition-colors">
                    9800000000
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-golden shrink-0" />
                  <a href="mailhref:standard@gmail.com" className="text-muted-foreground hover:text-golden transition-colors">
                    standard@gmail.com
                  </a>
                </li>
              </ul>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-golden/20 flex items-center justify-center hover:bg-golden hover:text-foreground transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-golden/20 flex items-center justify-center hover:bg-golden hover:text-foreground transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-golden/20 flex items-center justify-center hover:bg-golden hover:text-foreground transition-all"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-golden/20 flex items-center justify-center hover:bg-golden hover:text-foreground transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 rounded-2xl overflow-hidden border border-border/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.2!2d87.27!3d26.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTTZKQytGWDksIFJhbWRodW5pIEJoYXNpIDU2NzA1LCBOZXB1bA!5e0!3m2!1sen!2snp!4v1"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location"
            />
          </div>
        </div>
      </div>

      {/* Bothrefm Bar */}
      <div className="border-t border-border/20 py-6 px-4">
        <div className="container-school flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} Standard Secondary Boarding School. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-golden transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-golden transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
