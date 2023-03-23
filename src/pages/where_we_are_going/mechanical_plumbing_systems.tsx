import Excited from "@/components/pages/home/Excited";
import GrandProject from "@/components/pages/home/GrandProject";
import MechanicalIntro from "@/components/pages/whereGoing/backgrounds/MechanicalIntro";
import StMaryHall from "@/components/pages/whereGoing/StMaryHall";
import { Box } from "@mui/material";
import React from "react";

const MechanicalPlumbing = () => {
  return (
    <Box sx={{ pt: { xs: 3, md: 10 } }}>
      <MechanicalIntro />
      <StMaryHall />
      <Excited />
    </Box>
  );
};

export default MechanicalPlumbing;
