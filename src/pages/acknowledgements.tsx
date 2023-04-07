import React from "react";
import { Box } from "@mui/material";
import GrandProject from "@/components/pages/home/GrandProject";
import Excited from "@/components/pages/home/Excited";
import Acknowledgements from "@/components/pages/acknowledgeents/Acknowledgements";
import Foreward from "@/components/pages/acknowledgeents/Foreward";

const Acknowledgement = () => {
  return (
    <Box sx={{ pt: { xs: 3, md: 10 } }}>
      <GrandProject />
      <Acknowledgements />
      <Foreward />
      <Excited />
    </Box>
  );
};

export default Acknowledgement;
