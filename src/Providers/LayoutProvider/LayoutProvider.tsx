"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import { usePathname } from "next/navigation";

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const validpages = {
    layout: ["/login", "/register", "/error"],
  };
  const validpage = validpages.layout.includes(pathname);
  return (
    <>
      {!validpage && <Navbar />}
      <div>{children}</div>
      {!validpage && <Footer />}
    </>
  );
};
