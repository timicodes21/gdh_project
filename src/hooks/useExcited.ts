import { useState, useCallback } from "react";

export const useExcited = () => {
  const [value, setValue] = useState("1010101010110");
  const [copied, setCopied] = useState(false);

  function scrollToTop() {
    if (window !== undefined) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  const copyToClipboard = useCallback(() => {
    setCopied(true);
  }, []);

  return { scrollToTop, value, setValue, copied, setCopied, copyToClipboard };
};
