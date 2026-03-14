"use client";

import { useState, useEffect } from "react";
import { event as gaEvent } from "@/lib/gtag";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ChevronDown, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import SchoolLogo from "./../../public/SchoolLogo-nobg.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Academics",
    path: "/academics",
    children: [
      { name: "Overview", path: "/academics" },
      { name: "Grades", path: "/academics/grades" },
    ],
  },
  { name: "Admissions", path: "/admissions" },
  { name: "Facilities", path: "/facilities" },
  { name: "Gallery", path: "/gallery" },
  { name: "Results", path: "https://www.standardschool.edu.np/Home" },
  { name: "Notices", path: "/notices" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  return (
    <>
      {/* Top Bar */}
      {/* <div className=" hidden bg-gradient-hero text-primary-foreground py-2 px-4">
        <div className="container-school flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+9779800000000"
              className="flex items-center gap-2"
              onClick={() =>
                gaEvent({
                  action: "click_phone",
                  category: "Contact",
                  label: "Header / Contact Section",
                })
              }
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+977 98XXXXXXXX</span>
            </a>
            <a
              href="mailto:standard@gmail.com"
              className="flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">
                standardschool2051@gmail.com
              </span>
            </a>
          </div>
          <Link href="/notices" className="flex items-center gap-2">
            <Bell className="w-4 h-4 animate-wiggle" />
            <span className="hidden sm:inline">Latest Notices</span>
          </Link>
        </div>
      </div> */}

      {/* Main Navbar */}
      <nav
        className={`fixed top-0 start-0 w-full left-0 z-50 m-0 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md shadow-md bg-secondary/80"
            : "bg-[hsl(var(--color-background)/1)]"
        }`}
      >
        <div className="container-school mb-0">
          <div className="flex h-18 pb-0 mb-0 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 ml-3 lg:ml-0 md:ml-0">
              <div className="w-16 h-16 pb-0 rounded-xl flex items-center justify-center">
                {/* <span className="text-2xl font-bold text-white">S</span> */}
                <Image
                  src={SchoolLogo}
                  alt="Standard Secondary Boarding School Logo"
                  width={100}
                  height={100}
                  priority
                />
              </div>
              <div className="hidden md:block">
                <h1 className="font-bold text-lg">Standard Secondary</h1>
                <p className="text-xs text-muted-foreground">Boarding School</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden top-0 lg:flex items-center gap-1 bg-yellow-100 px-4 py-2 rounded-2xl shadow-2xs shadow-amber-200">
              {navLinks.map((link) =>
                link.children ? (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-1">
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white/90 border-2">
                      {link.children.map((child) => (
                        <DropdownMenuItem
                          key={child.name}
                          asChild
                          className="border"
                        >
                          <Link href={child.path}>{child.name}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`px-3 py-0.5 transition-all border-2 rounded-2xl ${
                      isActive(link.path)
                        ? "text-primary border-primary bg-amber-50"
                        : "text-foreground border-transparent hover:border-muted"
                    }`}
                  >
                    {link.name}
                  </Link>
                ),
              )}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <Link href="/admissions">
                {/* <Button className="btn-primary-school">Apply Now</Button> */}
                <Button
                  className="btn-primary-school group"
                  onClick={() =>
                    gaEvent({
                      action: "click_apply_now",
                      category: "Admissions",
                      label: "Hero Section",
                    })
                  }
                >
                  Apply Now
                </Button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden mr-8 ml-8"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>

{/* Mobile Menu */}
{isOpen && (
  <div className="lg:hidden bg-white rounded-md py-4 px-4 border-t shadow-md">
    {navLinks.map((link) => (
      <div key={link.name}>
        <Link
          href={link.path}
          onClick={() => setIsOpen(false)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-xl mt-2 font-medium hover:bg-gray-100 transition"
        >
          {link.name}
        </Link>

        {link.children && (
          <div className="ml-4 border-l pl-3 mt-2 space-y-2">
            {link.children.map((child) => (
              <Link
                key={child.name}
                href={child.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition"
              >
                {child.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    ))}

    <Link href="/admissions">
      <Button className="w-full mt-4 bg-amber-500 border border-gray-300 hover:bg-amber-500">
        Apply Now
      </Button>
    </Link>
  </div>
)}

        </div>
      </nav>
    </>
  );
};
