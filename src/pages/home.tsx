import React from "react";
import { Box } from "@mui/material";
import GrandProject from "@/components/pages/home/GrandProject";
import WhyBuild from "@/components/pages/home/WhyBuild";
import TempleImportance from "@/components/pages/home/TempleImportance";
import JourneySoFar from "@/components/pages/home/JourneySoFar";
import Congregation from "@/components/pages/home/Congregation";
import Excited from "@/components/pages/home/Excited";

const home = () => {
  return (
    <Box sx={{ pt: { xs: 3, md: 10 } }}>
      <GrandProject />
      <WhyBuild />
      <TempleImportance />
      <JourneySoFar />
      <Congregation />
      <Excited />
    </Box>
  );
};

export default home;
