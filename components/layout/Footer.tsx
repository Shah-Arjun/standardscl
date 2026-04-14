import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Copyright,
} from "lucide-react";
import Link from "next/link";
import { event as gaEvent } from "@/lib/gtag";
import Image from "next/image";
import SchoolLogo from "@/public/SchoolLogo.png";
import { TikTok_Sans } from "next/font/google";




const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Admissions", path: "/admissions" },
  { name: "Facilities", path: "/facilities" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];



// const academicLinks = [
//   { name: "Pre-Primary", path: "/grades#pre-primary" },
//   { name: "Primary", path: "/grades#primary" },
//   { name: "Lower Secondary", path: "/grades#lower-secondary" },
//   { name: "Secondary", path: "/grades#secondary" },
// ];



export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
  {/* Main Footer */}
  <div className="section-padding pb-10">
    <div className="container-hero">

      {/* FLEX CONTAINER */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-10">

        {/* School Info */}
        <div className="w-full sm:w-[48%] lg:w-[30%]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-golden rounded-xl flex items-center justify-center">
              <Image src={SchoolLogo} alt="School logo" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl md:text-2xl">
                Standard Secondary
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Boarding School
              </p>
            </div>
          </div>
          <p className="text-golden font-semibold italic text-sm md:text-base">
            "Education is Main Path of Success"
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full sm:w-[48%] lg:w-[30%]">
          <h4 className="font-heading font-bold text-lg mb-6 text-golden">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm md:text-base">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="text-muted-foreground hover:text-golden hover:ml-2 transition-all"
                >
                  &gt; {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="w-full sm:w-[48%] lg:w-[30%]">
          <h4 className="font-heading font-bold text-lg mb-6 text-golden">
            Contact Us
          </h4>

          <ul className="space-y-4 text-sm md:text-base">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-golden mt-1" />
              <span className="text-muted-foreground">
                Itahari-17, Sunsari, Nepal
              </span>
            </li>

            <li className="flex flex-wrap items-center gap-2">
              <Phone className="w-5 h-5 text-golden" />
              <a href="tel:025590085" className="hover:text-golden hover:underline">
                025-590085
              </a>
              <span>|</span>
              <a href="tel:+9779812363723" className="hover:text-golden hover:underline">
                +977 9812363723
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-golden" />
              <a
                href="mailto:standardschool2051@gmail.com"
                className="hover:text-golden hover:underline"
              >
                standardschool2051@gmail.com
              </a>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://www.facebook.com/profile.php?id=100046922456345"
              target="_blank"
              className="w-9 h-9 rounded-full bg-golden/20 flex items-center justify-center hover:bg-golden hover:text-foreground transition"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a
              href="#"
              className="w-9 h-9 rounded-full bg-golden/20 flex items-center justify-center hover:bg-golden hover:text-foreground transition"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href="#"
              className="w-9 h-9 rounded-full bg-golden/20 flex items-center justify-center hover:bg-golden hover:text-foreground transition"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M16 3c.3 2.5 1.8 4 4 4v3c-1.5 0-2.9-.4-4-1v6.5a5.5 5.5 0 1 1-5.5-5.5c.3 0 .7 0 1 .1v3.1a2.5 2.5 0 1 0 2.5 2.5V3h2z" />
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Map */}
      <div className="w-full mt-8 rounded-xl overflow-hidden border border-border">
        <div className="relative w-full min-h-[250px] md:min-h-[320px]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1146.125499502753!2d87.22085152316471!3d26.681266376883094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6b54a9ea5841%3A0xaaa3d314ed1a04bb!2sM6JC%2BFX9%2C%20Ramdhuni%20Bhasi%2056705%2C%20Nepal!5e0!3m2!1sen!2suk!4v1769857331191!5m2!1sen!2suk" className="absolute inset-0 w-full h-full" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="School Location" />
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-border/20 py-6 px-4">
  <div className="container-school flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">

    {/* LEFT SIDE */}
    <div className="space-y-1">
      <p className="text-muted-foreground text-sm">
        <Copyright className="w-4 h-4 inline" />{" "}
        {new Date().getFullYear()} Standard Secondary Boarding School. All
        rights reserved.
      </p>

      {/* Developer */}
      <p className="flex flex-wrap justify-center md:justify-start items-center gap-1 text-muted-foreground/70 text-xs">
        <span>Developer:</span>

        <a
          href="#"
          className="text-golden font-medium hover:underline"
          onClick={() =>
            gaEvent({
              action: "click_dev",
              category: "Footer",
              label: "Developer Name",
            })
          }
        >
          Arjun
        </a>

        <span>|</span>

        <a
          href="tel:+9779807307132"
          className="text-golden font-medium hover:underline"
          onClick={() =>
            gaEvent({
              action: "click_phone",
              category: "Footer",
              label: "Developer Phone",
            })
          }
        >
          +977 9807307132
        </a>
      </p>
    </div>

    {/* RIGHT SIDE */}
    <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
      <Link
        href="/"
        className="text-muted-foreground hover:text-golden transition-colors"
      >
        Privacy Policy
      </Link>

      <Link
        href="/"
        className="text-muted-foreground hover:text-golden transition-colors"
      >
        Terms of Service
      </Link>
    </div>

  </div>
</div>


</footer>
  );
};
