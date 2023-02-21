import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import { BsArrowRight } from "react-icons/bs";

interface IProps {
  children: ReactNode;
  onClick: () => void;
}

const BlurredBadge: React.FC<IProps> = ({ children, onClick }) => {
  return (
    <Box
      sx={{
        borderRadius: "12px",
        background:
          "linear-gradient(155.41deg, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.13) 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "200px", md: "378px" },
      }}
      className="pointer"
      onClick={onClick}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <p className="font-20 font-700 text-white satoshi">{children}</p>
        <Box sx={{ mx: 1 }}></Box>
        <BsArrowRight className="text-white font-700 font-24" />
      </Box>
    </Box>
  );
};

export default BlurredBadge;
