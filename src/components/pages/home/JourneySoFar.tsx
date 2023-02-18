import React from "react";
import { Box } from "@mui/material";
import Wrapper from "@/components/layout/Wrapper";
import Image from "next/image";
import classes from "../../../styles/Home.module.css";
import Carousel from "react-material-ui-carousel";

const JourneySoFar = () => {
  return (
    <>
      <Box sx={{ py: 5 }}>
        <Wrapper>
          <p className="text-secondary-3 font-52 font-400 montaga text-center">
            The journey so far
          </p>
          <p className="text-primary avenuex font-40 font-400 text-center avenuex">
            THE CONSTRUCTION STAGES OF THE PROJECT
          </p>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: { xs: 2, md: 10 },
            }}
          >
            <p className="text-secondary-4 font-32 font-400 avenuex">PHASE 1</p>
            <p className="text-secondary-4 font-32 font-400 avenuex">
              INTERIORS AND FINISHES
            </p>
            <p className="text-secondary-4 font-32 font-400 avenuex">
              1989-2010
            </p>
          </Box>
          <Box sx={{ px: { xs: 1, md: 5, lg: 10 } }}>
            <p className="text-secondary-4 font-32 font-400 avenuex text-center">
              Here we have some block of text giving more information about the
              project Here we have some block of text giving more information
              about the project.
            </p>
          </Box>
          <Box sx={{ mt: 10 }}>
            <Carousel>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <Box className={classes.img_container} key={index}>
                  <Image alt="phase_1" src="/assets/images/phase_1.png" fill />
                </Box>
              ))}
            </Carousel>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: { xs: 2, md: 10 },
              mt: 10,
            }}
          >
            <p className="text-secondary-4 font-32 font-400 avenuex">PHASE 2</p>
            <p className="text-secondary-4 font-32 font-400 avenuex">
              INTERIORS AND FINISHES
            </p>
            <p className="text-secondary-4 font-32 font-400 avenuex">
              NON-JUL 2022
            </p>
          </Box>
          <Box sx={{ px: { xs: 1, md: 5, lg: 10 } }}>
            <p className="text-secondary-4 font-32 font-400 avenuex text-center">
              Here we have some block of text giving more information about the
              project Here we have some block of text giving more information
              about the project.
            </p>
          </Box>
          <Box sx={{ mt: 10, py: 10, borderBottom: "0.5px solid #98A2B3" }}>
            <Carousel>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <Box className={classes.img_container} key={index}>
                  <Image alt="phase_2" src="/assets/images/phase_2.png" fill />
                </Box>
              ))}
            </Carousel>
          </Box>
          <Box sx={{ mt: 10 }}>
            <p className="text-secondary-3 font-52 font-400 montaga text-center">
              Where we are going
            </p>
            <p className="text-primary avenuex font-40 font-400 text-center avenuex">
              ThE FINAL LOOK OF THE PROJECT IN 3D RENDERS
            </p>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: { xs: 2, md: 10 },
              mt: 10,
            }}
          >
            <p className="text-secondary-4 font-32 font-400 avenuex">PHASE 3</p>
            <p className="text-secondary-4 font-32 font-400 avenuex">
              INTERIORS AND FINISHES
            </p>
            <p className="text-secondary-4 font-32 font-400 avenuex">
              THE FUTURE
            </p>
          </Box>
          <Box sx={{ px: { xs: 1, md: 5, lg: 10 } }}>
            <p className="text-secondary-4 font-32 font-400 avenuex text-center">
              Here we have some block of text giving more information about the
              project Here we have some block of text giving more information
              about the project.
            </p>
          </Box>
          <Box sx={{ mt: 10, py: 10, borderBottom: "0.5px solid #98A2B3" }}>
            <Carousel>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <Box className={classes.img_container} key={index}>
                  <Image alt="phase_3" src="/assets/images/phase_3.png" fill />
                </Box>
              ))}
            </Carousel>
          </Box>
        </Wrapper>
      </Box>
    </>
  );
};

export default JourneySoFar;
