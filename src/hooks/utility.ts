import { useState } from "react";

export const usePasswordShow = () => {
  const [passwordShow, setPasswordShow] = useState<boolean>(false);

  const showPassword = () => {
    setPasswordShow(!passwordShow);
  };

  return { passwordShow, showPassword };
};
