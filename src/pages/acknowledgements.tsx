import React from 'react';
import { Box } from '@mui/material';
import GrandProject from '@/components/pages/home/GrandProject';
import Excited from '@/components/pages/home/Excited';
import Acknowledgements from '@/components/pages/acknowledgeents/Acknowledgements';
import Foreward from '@/components/pages/acknowledgeents/Foreward';
import EccIntro from '@/components/pages/whereGoing/backgrounds/EccIntro';

const Acknowledgement = () => {
  return (
    <Box>
      {/* <GrandProject /> */}
      <EccIntro />
      <Acknowledgements />
      <Foreward />
      <Excited />
    </Box>
  );
};

export default Acknowledgement;
