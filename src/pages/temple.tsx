import Excited from "@/components/pages/home/Excited";
import GrandProject from "@/components/pages/home/GrandProject";
import TempleImageSection from "@/components/pages/temple/TempleImageSection";
import { Box } from "@mui/material";
import React from "react";

const temple = () => {
  return (
    <Box sx={{ pt: 10 }}>
      <GrandProject templePage />
      <TempleImageSection />
      <Excited templePage />
      <TempleImageSection sectionB />
      <Excited />
    </Box>
  );
};

export default temple;
