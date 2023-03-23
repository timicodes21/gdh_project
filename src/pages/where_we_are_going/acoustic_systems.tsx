import Excited from "@/components/pages/home/Excited";
import GrandProject from "@/components/pages/home/GrandProject";
import AcousticDesign from "@/components/pages/whereGoing/AcousticDesign";
import AcousticIntro from "@/components/pages/whereGoing/backgrounds/AcousticIntro";
import DesignSystemsElec from "@/components/pages/whereGoing/DesignSystemsElect";
import StMaryHall from "@/components/pages/whereGoing/StMaryHall";
import { Box } from "@mui/material";
import React from "react";

const ElectricalLighting = () => {
  return (
    <Box sx={{ pt: { xs: 3, md: 10 } }}>
      <AcousticIntro />
      <AcousticDesign />
      <Excited />
    </Box>
  );
};

export default ElectricalLighting;
