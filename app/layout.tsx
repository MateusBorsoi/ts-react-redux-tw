"use client";

import { Providers } from "@/redux/provider/Provider";
import "./globals.css";
import 'tailwindcss/tailwind.css';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import ToastMsg from "@/components/Toast/Toast";

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
          <PersistGate loading={null} persistor={persistor}>
            <Navbar />
            <ToastMsg theme="light" bar="false" closetime="1000" />
            {children}
            <Footer />
          </PersistGate>
        </Providers>
      </body>
    </html>
  );
}
