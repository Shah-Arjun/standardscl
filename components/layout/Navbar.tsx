"use client";

import { useState, useEffect } from "react";
import { event as gaEvent } from "@/lib/gtag";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import SchoolLogo from "./../../public/SchoolLogo-nobg.png";
import TopNavbar from "./TopNavbar";



const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "Academics",
    path: "/academics",
    children: [
      { name: "Overview", path: "/academics" },
      { name: "Grades", path: "/academics/grades" },
    ],
  },
  { name: "Facilities", path: "/facilities" },
  { name: "Gallery", path: "/gallery" },
  { name: "Teachers", path: "/teachers" },
  { name: "Results", path: "https://www.standardschool.edu.np/Home", external: true },
  { name: "Notices", path: "/notices" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];




export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);


  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // if link active deciding arrow function
  const isActive = (path: string, external?: boolean) => {
    if (external) return false;        // External links are never "active"
    return pathname === path || pathname.startsWith(path + "/");
  };



  return (
  <>
  <TopNavbar />

    <nav
      className={`left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "fixed top-0 bg-background/95 shadow-md border-b" : "bg-transparent"
      }`}
    >
      <div className="w-full mx-auto px-4 md:px-8">
        {/* desktop navbar */}
        <div className="flex h-18 items-center justify-between">
          {/* logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src={SchoolLogo} width={72} height={72} priority className="object-contain" alt="logo"/>
            {/* logo-text */}
            <div className="hidden md:block leading-tight">
              <h1 className="font-bold text-2xl tracking-tight">Standard Secondary</h1>
              <p className="text-md text-muted-foreground">Boarding School</p>
            </div>
          </Link>


          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-">
            {navLinks.map((link) =>
              link.children ? ( //if children then show dropdown
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 rounded-xl hover:bg-primary transition-colors">
                    {link.name}
                    <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="min-w-40 bg-white">
                    {link.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild className="hover:bg-primary">
                        <Link href={child.path} className="w-full">
                          {child.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  href={link.path}
                  target={link.external ? "_blank" : undefined} //open external link in new tab
                  rel={link.external ? "noopener noreferrer" : undefined} //security for external
                  className={`px-4 py-2 rounded-xl transition-all font-medium ${
                    isActive(link.path, link.external)
                      ? "text-primary bg-primary/20"
                      : "hover:bg-primary hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ),
            )}
          </div>

          {/* Desktop CTA */}
          <div className="flex items-center gap-2">
            {/* CTA Button */}
            <div className="block lg:block">
              <Link
                href="/admissions"
                onClick={() =>
                  gaEvent({
                    action: "click_apply_now",
                    category: "Admissions",
                    label: "Navbar",
                  })
                }
                className="inline-flex items-center justify-center px-2 py-2.5 text-md lg:text-lg font-medium rounded-4xl btn-primary-school text-white hover:border-2 border-secondary"
              >
                Get Admission
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 ml-2 rounded-md border border-gray-300 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>




        {/* Mobile Menu -- opens when clicked */}
        <div
          className={`fixed top-0 right-0 h-full w-[60%] sm:w-[50%] md:w-[40%] bg-background border-l shadow-lg z-50 py-6 px-4 mb-4 space-y-2 lg:hidden transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between">
            <h3 className="text-2xl text-gray-500">Menu</h3>
            <button onClick={() => setIsOpen(false)} className="border border-gray-300 p-2 rounded-md">
              <X size={24} className="text-gray-700" />
            </button>
          </div>
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.children ? (
                <div>
                  {/* Parent menu list - clickable */}
                  <button type="button" onClick={() => setOpenMobileMenu(openMobileMenu === link.name ? null : link.name)} className="w-full flex items-center justify-between px-4 py-3 font-medium rounded-xl hover:bg-accent transition-colors">
                    {link.name}
                    <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${openMobileMenu === link.name ? "rotate-180" : ""}`} />
                  </button>

                  {/* Children (dropdown) */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                      openMobileMenu === link.name
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-6 mt-1 space-y-1 border-l">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 text-sm rounded-lg hover:bg-accent transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={link.path}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl hover:bg-accent transition-colors font-medium"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}

          <div className="mt-6">
            <Button asChild className="w-full btn-primary-school p-5">
              <Link href="/admissions" onClick={() => setIsOpen(false)}>Get Admission</Link>
            </Button>
          </div>

        </div>
      </div>
    </nav>
    </>
  );
};