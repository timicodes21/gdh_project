import Excited from "@/components/pages/home/Excited";
import GrandProject from "@/components/pages/home/GrandProject";
import EcclesiasticBuilding from "@/components/pages/whereGoing/EcclesiasticBuilding";
import { Box } from "@mui/material";
import React from "react";

const Prospective = () => {
  return (
    <Box sx={{ pt: { xs: 3, md: 10 } }}>
      <GrandProject />
      <EcclesiasticBuilding />
      <Excited />
    </Box>
  );
};

export default Prospective;
