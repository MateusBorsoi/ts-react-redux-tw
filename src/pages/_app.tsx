import "../layouts/globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/redux/provider";
import type { AppProps } from "next/app";
import Navbar from "@/components/menu/Navbar";
import Login from "./login";
import Register from "./register";
import PageNotFound from "./404";
import Footer from "@/components/menu/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hasghy",
  description: "Sistema Hasghy",
};



export default function MyApp({ Component, pageProps }: AppProps) {

  const isAuthPage = Component === Login || Component === Register || Component === PageNotFound

  return (
    <Providers>
      {!isAuthPage && (<Navbar/>)}
      <Component {...pageProps} />
      {!isAuthPage && (<Footer/>)}
    </Providers>
  );
}
