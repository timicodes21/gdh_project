import Excited from "@/components/pages/home/Excited";
import GrandProject from "@/components/pages/home/GrandProject";
import StMaryHall from "@/components/pages/whereGoing/StMaryHall";
import { Box } from "@mui/material";
import React from "react";

const MechanicalPlumbing = () => {
  return (
    <Box sx={{ pt: { xs: 3, md: 10 } }}>
      <GrandProject />
      <StMaryHall />
      <Excited />
    </Box>
  );
};

export default MechanicalPlumbing;
