import Navbar from "@/components/layout/Navbar";
import "@/styles/globals.css";
import { theme } from "@/utils/theme";
import { ThemeProvider } from "@mui/material";
import AOS from "aos";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true);
  const { pathname } = useRouter();

  useEffect(() => {
    setIsSSR(false);
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);

  if (isSSR) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        {pathname !== "/" && <Navbar />}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
