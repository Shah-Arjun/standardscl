import { ReactNode } from "react";
import { Navbar } from "./Navbar";
//import { FloatingNotice } from "../shared/FloatingNotice";
//import { NoticeMarquee } from "../shared/NoticeMarquee";
import { Footer } from "./Footer";

interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* <NoticeMarquee /> */}
      <main className="flex-1">{children}</main>
      <Footer />
      {/* <FloatingNotice /> */}
    </div>
  );
};