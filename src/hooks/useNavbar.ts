import React, { useState, useEffect } from 'react';

export const useNavbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileNav, setMobileNav] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [languageText, setLanguageText] = useState('English');

  // write a function to allow users download the prospectus
  const downloadProspectus = () => {
    const fileName = 'The Grand Temple Prospectus.pdf';
    const fileUrl =
      'https://drive.google.com/uc?id=1glRroDm9rP7uKyhzMga2QjpSF21JynEs';
    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', fileName);
    downloadLink.setAttribute('href', fileUrl);
    downloadLink.setAttribute('target', '_blank');
    downloadLink.click();
  };

  const toggleNav = () => {
    setMobileNav(!mobileNav);
  };

  const toggleLanguageModal = () => {
    setShowLanguage(!showLanguage);
  };

  const closeNav = () => {
    setMobileNav(false);
  };

  const changeLanguage = (text: string) => {
    setLanguageText(text);
    setShowLanguage(false);
  };

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return {
    show,
    closeNav,
    toggleNav,
    mobileNav,
    showLanguage,
    toggleLanguageModal,
    changeLanguage,
    languageText,
    downloadProspectus,
  };
};
