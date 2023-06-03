import "../layouts/globals.css";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";
import Navbar from "@/components/layout/Navbar";
import Login from "./login";
import Register from "./register";
import PageNotFound from "./404";
import Footer from "@/components/layout/Footer";
import { Provider } from "react-redux";
import { store } from "@/redux/store";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hasghy",
  description: "Sistema Hasghy",
};



export default function MyApp({ Component, pageProps }: AppProps) {

  const isAuthPage = Component === Login || Component === Register || Component === PageNotFound

  return (
    <Provider store={store}>
      {!isAuthPage && (<Navbar/>)}
      <Component {...pageProps} />
      {!isAuthPage && (<Footer/>)}
    </Provider>
  );
}
