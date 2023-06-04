import "../layouts/globals.css";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";
import Navbar from "@/components/layout/Navbar";
import Login from "./login";
import Register from "./register";
import PageNotFound from "./404";
import Footer from "@/components/layout/Footer";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hasghy",
  description: "Sistema Hasghy",
};

export default function MyApp({ Component, pageProps }: AppProps) {
  const isAuthPage =
    Component === Login || Component === Register || Component === PageNotFound;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {!isAuthPage && <Navbar />}
        <Component {...pageProps} />
        {!isAuthPage && <Footer />}
      </PersistGate>
    </Provider>
  );
}
