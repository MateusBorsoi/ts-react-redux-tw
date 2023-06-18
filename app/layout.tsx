"use client";
import React from "react";
import ToastMsg from "@/components/Toast/Toast";
import { Providers } from "@/Providers/ContextProvider/Provider";
import "./globals.css";
import { LayoutProvider } from "@/Providers/LayoutProvider/LayoutProvider";


export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="pt-br">
      <body className="overflow-x-hidden">
          <Providers>
            <ToastMsg theme="light" bar="false" closetime="1000" />
            <LayoutProvider>
            {children}
            </LayoutProvider>
          </Providers>
      </body>
    </html>
  );
}
