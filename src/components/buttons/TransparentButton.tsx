import { Button, Box } from "@mui/material";
import React, { ReactNode } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FaLongArrowAltRight } from "react-icons/fa";

interface IProps {
  children: ReactNode;
  onClick: () => void;
  color?: string;
  width?: string;
  type?: "submit" | "button";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  dropdown?: boolean;
}

const TransparentButton: React.FC<IProps> = ({
  children,
  onClick,
  color,
  disabled,
  width,
  size,
  dropdown,
}) => {
  return (
    <Button
      sx={{
        borderRadius: "32px",
        background: color ? color : "primary.main",
        width: width ? width : "inherit",
        color: "primary.main",
        px: { xs: 2, md: 5 },
      }}
      onClick={onClick}
      variant="outlined"
      className="font-16 font-500 satoshi"
      disabled={disabled}
      size={size}
    >
      {children}
      {dropdown && (
        <FiChevronDown
          style={{ marginLeft: 10, color: "#386EB2" }}
          className="text-primary"
        />
      )}
    </Button>
  );
};

export default TransparentButton;
