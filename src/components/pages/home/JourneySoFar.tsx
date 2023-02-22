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
          <p
            className="text-secondary-3 font-52 font-400 montaga text-center"
            data-aos="fade-up-right"
            data-aos-duration="1000"
          >
            The journey so far
          </p>
          <p
            className="text-primary avenuex font-40 font-400 text-center avenuex"
            data-aos="fade-up-left"
            data-aos-duration="1000"
          >
            THE CONSTRUCTION STAGES OF THE PROJECT
          </p>
          <Box
            sx={{
              display: { xs: "block", lg: "flex" },
              justifyContent: "space-between",
              px: { xs: 2, md: 10 },
            }}
          >
            <p
              className="text-secondary-4 font-32 font-300 avenuex text-justify"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              PHASE 1
            </p>
            <p
              className="text-secondary-4 font-32 font-300 avenuex text-justify"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              INTERIORS AND FINISHES
            </p>
            <p
              className="text-secondary-4 font-32 font-300 avenuex text-justify"
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="1000"
            >
              1989-2010
            </p>
          </Box>
          <Box
            sx={{ px: { xs: 1, md: 5, lg: 10 } }}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <p
              className="text-secondary-4 font-32 font-300 avenuex text-justify text-justify"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Here we have some block of text giving more information about the
              project Here we have some block of text giving more information
              about the project.
            </p>
          </Box>
          <Box
            sx={{ mt: 10 }}
            data-aos="flip-left"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <Carousel>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <Box className={classes.img_container} key={index}>
                  <Image alt="phase_1" src="/assets/images/phase_1.png" fill />
                </Box>
              ))}
            </Carousel>
          </Box>
          <div id="where_we_are">
            <Box
              sx={{
                display: { xs: "block", lg: "flex" },
                justifyContent: "space-between",
                px: { xs: 2, md: 10 },
                mt: 10,
              }}
            >
              <p
                className="text-secondary-4 font-32 font-300 avenuex text-justify"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                PHASE 2
              </p>
              <p
                className="text-secondary-4 font-32 font-300 avenuex text-justify"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                INTERIORS AND FINISHES
              </p>
              <p
                className="text-secondary-4 font-32 font-300 avenuex text-justify"
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="1000"
              >
                NON-JUL 2022
              </p>
            </Box>

            <Box sx={{ px: { xs: 1, md: 5, lg: 10 } }}>
              <p
                className="text-secondary-4 font-32 font-300 avenuex text-justify text-justify"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                Here we have some block of text giving more information about
                the project Here we have some block of text giving more
                information about the project.
              </p>
            </Box>
            <Box sx={{ mt: 10, py: 10, borderBottom: "0.5px solid #98A2B3" }}>
              <Carousel>
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <Box className={classes.img_container} key={index}>
                    <Image
                      alt="phase_2"
                      src="/assets/images/phase_2.png"
                      fill
                    />
                  </Box>
                ))}
              </Carousel>
            </Box>
          </div>
          <div id="where_we_are_going">
            <Box sx={{ mt: 10 }}>
              <p
                className="text-secondary-3 font-52 font-400 montaga text-center"
                data-aos="fade-up-left"
                data-aos-duration="1000"
              >
                Where we are going
              </p>
              <p
                className="text-primary avenuex font-40 font-400 text-center avenuex"
                data-aos="fade-up-right"
                data-aos-duration="1000"
              >
                ThE FINAL LOOK OF THE PROJECT IN 3D RENDERS
              </p>
            </Box>
            <Box
              sx={{
                display: { xs: "block", lg: "flex" },
                justifyContent: "space-between",
                px: { xs: 2, md: 10 },
                mt: 10,
              }}
            >
              <p
                className="text-secondary-4 font-32 font-300 avenuex text-justify"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                PHASE 3
              </p>
              <p
                className="text-secondary-4 font-32 font-300 avenuex text-justify"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                INTERIORS AND FINISHES
              </p>
              <p
                className="text-secondary-4 font-32 font-300 avenuex text-justify"
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="1000"
              >
                THE FUTURE
              </p>
            </Box>
            <Box sx={{ px: { xs: 1, md: 5, lg: 10 } }}>
              <p
                className="text-secondary-4 font-32 font-300 avenuex text-justify text-justify"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                Here we have some block of text giving more information about
                the project Here we have some block of text giving more
                information about the project.
              </p>
            </Box>
            <Box
              sx={{ mt: 10, py: 10, borderBottom: "0.5px solid #98A2B3" }}
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <Carousel>
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <Box className={classes.img_container} key={index}>
                    <Image
                      alt="phase_3"
                      src="/assets/images/phase_3.png"
                      fill
                    />
                  </Box>
                ))}
              </Carousel>
            </Box>
          </div>
        </Wrapper>
      </Box>
    </>
  );
};

export default JourneySoFar;
