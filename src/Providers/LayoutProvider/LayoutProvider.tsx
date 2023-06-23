"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { notFound, usePathname } from "next/navigation";

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {


  const pathname = usePathname();
  const validpage =
    pathname === "/login" || pathname === "/register" || pathname ==="/error"

  return (
    <>
      {!validpage && <Navbar />}
      <div>{children}</div>
      {!validpage && <Footer />}
    </>
  );
};
