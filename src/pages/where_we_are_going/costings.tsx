import Excited from '@/components/pages/home/Excited';
import AcousticIntro from '@/components/pages/whereGoing/backgrounds/AcousticIntro';
import EccIntro from '@/components/pages/whereGoing/backgrounds/EccIntro';
import Costings from '@/components/pages/whereGoing/Costings';
import { Box } from '@mui/material';
import React from 'react';

const Costing = () => {
  return (
    <Box sx={{ pt: { xs: 3, md: 10 } }}>
      <AcousticIntro />
      <Costings />
      <Excited />
    </Box>
  );
};

export default Costing;
