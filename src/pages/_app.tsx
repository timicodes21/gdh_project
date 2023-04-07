import Navbar from '@/components/layout/Navbar';
import '@/styles/globals.css';
import { theme } from '@/utils/theme';
import { ThemeProvider } from '@mui/material';
import AOS from 'aos';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import 'aos/dist/aos.css';
import Home from '.';

export default function App({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true);
  const { pathname } = useRouter();

  // useEffect(() => {
  //   const handleBeforeUnload = () => {
  //     localStorage.clear();
  //   };
  //   window.addEventListener('beforeunload', handleBeforeUnload);
  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, []);

  useEffect(() => {
    setIsSSR(false);
    AOS.init({
      easing: 'ease-out-cubic',
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
        <Toaster />
        {pathname !== '/' &&
          localStorage.getItem('access_token') === 'granted' && <Navbar />}
        {/* <Component {...pageProps} /> */}
        {/* if pathname is not "/", check the local storage for access_token === 'granted, if present render the component, else redirect to login page */}
        {pathname !== '/' &&
        localStorage.getItem('access_token') === 'granted' ? (
          <Component {...pageProps} />
        ) : (
          <Home />
        )}
      </ThemeProvider>
    </>
  );
}
