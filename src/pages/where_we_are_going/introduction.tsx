import Excited from "@/components/pages/home/Excited";
import BackgroundIntro from "@/components/pages/whereGoing/backgrounds/BackgroundIntro";
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
