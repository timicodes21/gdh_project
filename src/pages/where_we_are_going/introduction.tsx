import Excited from "@/components/pages/home/Excited";
import GrandProject from "@/components/pages/home/GrandProject";
import BackgroundIntro from "@/components/pages/whereGoing/BackgroundIntro";
import Introduction from "@/components/pages/whereGoing/Introduction";
import { Box } from "@mui/material";
import React from "react";

const Intro = () => {
  return (
    <Box sx={{ pt: { xs: 3, md: 10 } }}>
      <BackgroundIntro />
      <Introduction />
      <Excited />
    </Box>
  );
};

export default Intro;
