"use client";

import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { NoticeMarquee } from "../shared/NoticeMarquee";
import { Footer } from "./Footer";
import { FloatingNotice } from "../shared/FloatingNotice";
import { FloatingWhatsapp } from "../shared/FloatingWhatsapp";

interface SiteLayoutProps {
  children?: ReactNode;
}

export const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <div className=" min-h-screen flex flex-col">
      <Navbar />
      <NoticeMarquee />
      <main className="flex-1 mt-16">{children}</main>      
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
};