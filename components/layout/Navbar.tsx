"use client";

import { useState, useEffect } from "react";
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
      <div className="bg-gradient-hero text-primary-foreground py-2 px-4">
        <div className="container-school flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:9800000000" className="flex items-center gap-2">
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
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[hsl(var(--color-background)/0.9)] backdrop-blur-md shadow-md"
            : "bg-[hsl(var(--color-background)/1)]"
        }`}
      >
        <div className="container-school">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 ml-3 xs:ml-3 md:ml-3">
              <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">S</span>
              </div>
              <div className="hidden md:block">
                <h1 className="font-bold text-lg">Standard Secondary</h1>
                <p className="text-xs text-muted-foreground">Boarding School</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger asChild className="flex items-center">
                      <button
                        className={`flex items-center gap-1 px-4 py-1 transition-all border-2 rounded-bl-xl rounded-tr-xl ${
                          isActive(link.path)
                            ? "border-primary text-primary"
                            : "border-transparent text-foreground hover:border-muted"
                        }`}
                      >
                        {link.name}
                        <ChevronDown className="w-4 h-4" />
                      </button>
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
                    className={`px-3 py-0.5 transition-all border-2 rounded-bl-xl rounded-tr-xl ${
                      isActive(link.path)
                        ? "text-primary border-primary"
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
                <Button className="btn-primary-school">Apply Now</Button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden mr-3">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3"
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/admissions">
                <Button className="w-full mt-4">Apply Now</Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
