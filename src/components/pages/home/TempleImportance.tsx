import React from "react";
import { Box, Grid } from "@mui/material";
import Wrapper from "@/components/layout/Wrapper";
import classes from "../../../styles/Home.module.css";
import ReadMore from "@/components/buttons/ReadMore";
import Image from "next/image";

const TempleImportance = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Wrapper>
        <Box sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", right: 0, top: 0 }}>
            <Image
              src="/assets/icons/exclamation_icon.svg"
              alt="question_mark"
              width={110}
              height={373}
            />
          </Box>
          <p className="text-secondary-3 font-52 font-400 montaga text-center">
            Importance of the temple
          </p>
          <Grid container>
            <Grid item xs={12} md={2}></Grid>
            <Grid item xs={12} md={8}>
              <Box
                className={classes.shadow_bg_1}
                sx={{ py: { xs: 2, md: 5 }, px: { xs: 2, md: 10 } }}
              >
                <p className="text-secondary-4 font-32 font-400 avenuex">
                  The temple will bring close interaction with the creator,
                  protection from attacks and accusations, love and favor of the
                  Almighty..
                </p>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}></Grid>
          </Grid>
          <Grid container sx={{ mt: { xs: 5, md: 10 } }}>
            <Grid item xs={12} md={2}></Grid>
            <Grid item xs={12} md={8}>
              <Box
                className={classes.shadow_bg_2}
                sx={{ py: { xs: 2, md: 5 }, px: { xs: 2, md: 10 } }}
              >
                <p className="text-secondary-4 font-32 font-400 avenuex">
                  The temple will bring close interaction with the creator,
                  protection from attacks and accusations, love and favor of the
                  Almighty..
                </p>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}></Grid>
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <ReadMore onClick={() => {}} />
          </Box>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default TempleImportance;
