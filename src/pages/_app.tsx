import "../layouts/globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/redux/provider";
import type { AppProps } from "next/app";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hasghy",
  description: "Sistema Hasghy",
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />;
    </Providers>
  );
}
