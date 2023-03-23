import Excited from "@/components/pages/home/Excited";
import GrandProject from "@/components/pages/home/GrandProject";
import ElectricalIntro from "@/components/pages/whereGoing/backgrounds/ElectricalIntro";
import DesignSystemsElec from "@/components/pages/whereGoing/DesignSystemsElect";
import StMaryHall from "@/components/pages/whereGoing/StMaryHall";
import { Box } from "@mui/material";
import React from "react";

const ElectricalLighting = () => {
  return (
    <Box sx={{ pt: { xs: 3, md: 10 } }}>
      <ElectricalIntro />
      <DesignSystemsElec />
      <Excited />
    </Box>
  );
};

export default ElectricalLighting;
