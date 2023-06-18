"use client";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LayoutProps } from "../.next/types/app/layout";
import { PersistGate } from "redux-persist/integration/react";
import ToastMsg from "@/components/Toast/Toast";
import { persistor } from "@/redux/store";
import { Providers } from "@/redux/provider/Provider";
import './globals.css'

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="pt-br">
      <body>
        <Providers>
            <ToastMsg theme="light" bar="false" closetime="1000" />
            <Navbar />
            {children}
            <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
