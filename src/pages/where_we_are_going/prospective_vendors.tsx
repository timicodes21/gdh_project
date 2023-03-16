import GrandProject from "@/components/pages/home/GrandProject";
import Ceiling from "@/components/pages/whereGoing/Ceiling";
import Columns from "@/components/pages/whereGoing/Columns";
import DesignStratedyRoma from "@/components/pages/whereGoing/DesignStrategyRoma";
import EcclesiasticBuilding from "@/components/pages/whereGoing/EcclesiasticBuilding";
import Flooring from "@/components/pages/whereGoing/Flooring";
import LatticeWall from "@/components/pages/whereGoing/LatticeWall";
import Parapet from "@/components/pages/whereGoing/Parapet";
import ProspectiveVendors from "@/components/pages/whereGoing/ProspectiveVendors";
import UnderCeiling from "@/components/pages/whereGoing/UnderCeiling";
import { Box } from "@mui/material";
import React from "react";

const Prospective = () => {
  return (
    <Box sx={{ pt: { xs: 3, md: 10 } }}>
      <GrandProject />
      <ProspectiveVendors />
      <Ceiling />
      <UnderCeiling />
      <LatticeWall />
      <Parapet />
      <Columns />
      <DesignStratedyRoma />
      <Flooring />
      <EcclesiasticBuilding />
    </Box>
  );
};

export default Prospective;
