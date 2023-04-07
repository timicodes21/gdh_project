import { useState, useCallback } from 'react';

export const useExcited = () => {
  const [value, setValue] = useState('');
  const [copied, setCopied] = useState(false);

  function scrollToTop() {
    if (window !== undefined) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  const copyToClipboard = useCallback(() => {
    setCopied(true);
  }, []);

  return { scrollToTop, value, setValue, copied, setCopied, copyToClipboard };
};
