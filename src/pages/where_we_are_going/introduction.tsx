import GrandProject from "@/components/pages/home/GrandProject";
import Introduction from "@/components/pages/whereGoing/Introduction";
import { Box } from "@mui/material";
import React from "react";

const Intro = () => {
  return (
    <Box sx={{ pt: { xs: 3, md: 10 } }}>
      <GrandProject />
      <Introduction />
    </Box>
  );
};

export default Intro;
