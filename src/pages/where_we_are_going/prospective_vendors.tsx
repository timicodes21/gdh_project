import GrandProject from "@/components/pages/home/GrandProject";
import ProspectiveVendors from "@/components/pages/whereGoing/ProspectiveVendors";
import StMaryHall from "@/components/pages/whereGoing/StMaryHall";
import { Box } from "@mui/material";
import React from "react";

const Prospective = () => {
  return (
    <Box sx={{ pt: { xs: 3, md: 10 } }}>
      <GrandProject />
      <ProspectiveVendors />
    </Box>
  );
};

export default Prospective;
