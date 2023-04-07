import React from "react";
import { Box } from "@mui/material";
import GrandProject from "@/components/pages/home/GrandProject";
import WhyBuild from "@/components/pages/home/WhyBuild";
import TempleImportance from "@/components/pages/home/TempleImportance";
import JourneySoFar from "@/components/pages/home/JourneySoFar";
import Congregation from "@/components/pages/home/Congregation";
import Excited from "@/components/pages/home/Excited";
import GrandTemple from "@/components/pages/home/GrandTemple";
import DesignConcept from "@/components/pages/home/DesignConcept";
import ChallengesFaced from "@/components/pages/home/ChallengesFaced";
import SpiritualImportance from "@/components/pages/home/SpiritualImportance";
import LinksAndConnections from "@/components/pages/home/LinksAndConnections";
import SpiritualImplications from "@/components/pages/home/SpiritualImplications";

const home = () => {
  return (
    <Box sx={{ pt: { xs: 3, md: 10 } }}>
      <GrandProject />
      <WhyBuild />
      <SpiritualImplications />
      <TempleImportance />
      <GrandTemple />
      <DesignConcept />
      <ChallengesFaced />
      <SpiritualImportance />
      <LinksAndConnections />
      <JourneySoFar />
      {/* <Congregation /> */}
      <Excited />
    </Box>
  );
};

export default home;
