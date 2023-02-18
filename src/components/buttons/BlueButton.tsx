import { Button, Box } from "@mui/material";
import React, { ReactNode } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

interface IProps {
  children: ReactNode;
  onClick: () => void;
  color?: string;
  width?: string;
  type?: "submit" | "button";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  arrow?: boolean;
}

const BlueButton: React.FC<IProps> = ({
  children,
  onClick,
  color,
  disabled,
  width,
  size,
  arrow,
}) => {
  return (
    <Button
      sx={{
        borderRadius: "32px",
        background: color ? color : "primary.main",
        width: width ? width : "inherit",
        color: "#F2F4F7",
        boxShadow: 0,
      }}
      onClick={onClick}
      variant="contained"
      className="font-16 font-700 montserrat"
      disabled={disabled}
      size={size}
    >
      {children}
      {arrow && <FaLongArrowAltRight style={{ marginLeft: 10 }} />}
    </Button>
  );
};

export default BlueButton;
