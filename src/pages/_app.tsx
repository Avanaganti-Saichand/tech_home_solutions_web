import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../fontawesome";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// ⬇️ NEW: Toast Setup
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}
