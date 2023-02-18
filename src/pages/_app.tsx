import Navbar from "@/components/layout/Navbar";
import "@/styles/globals.css";
import { theme } from "@/utils/theme";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true);
  const { pathname } = useRouter();

  useEffect(() => {
    setIsSSR(false);
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
