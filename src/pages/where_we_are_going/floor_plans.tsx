import Excited from "@/components/pages/home/Excited";
import GrandProject from "@/components/pages/home/GrandProject";
import FloorIntro from "@/components/pages/whereGoing/backgrounds/FloorIntro";
import StMaryHall from "@/components/pages/whereGoing/StMaryHall";
import { Box } from "@mui/material";
import React from "react";

const FloorPlans = () => {
  return (
    <Box sx={{ pt: { xs: 3, md: 10 } }}>
      <FloorIntro />
      <StMaryHall />
      <Excited />
    </Box>
  );
};

export default FloorPlans;
