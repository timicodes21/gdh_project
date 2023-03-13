import React from "react";
import { Box } from "@mui/material";
import Wrapper from "@/components/layout/Wrapper";
import Image from "next/image";
import classes from "../../../styles/Home.module.css";
import Carousel from "react-material-ui-carousel";
import { designChangesImages, stageOneImages } from "@/data/images";
import ReadMore from "@/components/buttons/ReadMore";
import { useModal } from "@/hooks/useModal";
import CustomModal from "@/components/modals/CustomModal";

const JourneySoFar = () => {
  const { open, openModal, closeModal } = useModal();

  return (
    <>
      <Box sx={{ py: 5 }}>
        <Wrapper>
          <p
            className="text-secondary-3 font-52 font-400 montaga text-center"
            data-aos="fade-up-right"
            data-aos-duration="1000"
          >
            {/* The journey so far */}
            How it Started
          </p>
          <p
            className="text-primary avenuex font-40 font-400 text-center avenuex"
            data-aos="fade-up-left"
            data-aos-duration="1000"
          >
            THE CONSTRUCTION STAGES OF THE GRAND TEMPLE
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
              FOUNDATION
            </p>
            <p
              className="text-secondary-4 font-32 font-300 avenuex text-justify"
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="1000"
            >
              2009
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
              {stageOneImages.map((item, index) => (
                <Box className={classes.img_container} key={index}>
                  <Image alt="phase_1" src={item} fill />
                </Box>
              ))}
            </Carousel>
          </Box>
          <div id="where_we_are">
            <Box
              sx={{
                display: { xs: "block", lg: "flex" },

                px: { xs: 2, md: 10 },
                mt: 10,
              }}
            >
              <p
                className="text-secondary-3 font-52 font-400 montaga text-center"
                data-aos="fade-up-right"
                data-aos-duration="1000"
              >
                Changes in Design During Construction
              </p>
            </Box>

            <Box sx={{ px: { xs: 1, md: 5, lg: 10 } }}>
              <p
                className="text-secondary-4 font-32 font-300 avenuex text-justify text-justify"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                At construction stages additional design improvements were made.
                The width of the upper gallery was increase; additional
                Sanctuary doors were put in place; a pentacle balcony introduced
                behind the Holy of Holies; changes to the immolation area to
                include Saint Mary’s immolation; two bathrooms on the upper
                floor of the Sanctuary were added; access to the concrete roof
                was changed from cat ladder to concrete staircase.
              </p>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <ReadMore onClick={openModal} />
            </Box>
            <Box sx={{ mt: 10, py: 10, borderBottom: "0.5px solid #98A2B3" }}>
              <Carousel>
                {designChangesImages.map((item, index) => (
                  <Box className={classes.img_container} key={index}>
                    <Image alt="phase_2" src={item} fill />
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
      <CustomModal open={open} closeModal={closeModal}>
        <Box sx={{ overflowY: "scroll" }} className={classes?.scroll}>
          <Box>
            <p className="font-52 font-400 text-secondary-3 montaga">
              Changes in Design During Construction
            </p>
            <p className="text-secondary-4 font-32 font-300 avenuex text-justify line-150">
              At construction stages additional design improvements were made.
              The width of the upper gallery was increase; additional Sanctuary
              doors were put in place; a pentacle balcony introduced behind the
              Holy of Holies; changes to the immolation area to include Saint
              Mary’s immolation; two bathrooms on the upper floor of the
              Sanctuary were added; access to the concrete roof was changed from
              cat ladder to concrete staircase.
              <br />
              <br />
              The roof design was associated with leakages. The roof
              contractor’s attention was drawn to this challenge but with series
              of amendments and additional costs, there was no possible
              solution.
              <br />
              <br />A roof architect professional was employed who carried out
              repairs on the roof supports and sheets. When the leakages
              persisted, there was an advice that the suspended roof Crucifix
              should be redesigned. The Rabbinical Council made a divine
              investigation, and it was divinely approved. The new Crucifix was
              enclosed in a sheet covering to prevent rainwater passing through
              the Crucifix to the roof into the Body of the Temple. Here, the
              spiritual concept of the initial suspended Crucifix still
              subsisted. The new enclosed Crucifix is showing the divine
              presence of God, that surrounded Jesus the Christ on the cross,
              but was not visible and known to his accusers then. By divine
              revelation all mankind is now aware that Jesus Christ was never
              left alone on the cross by God His Heavenly Father. He was
              surrounded by God’s essence, power, and light.
            </p>
          </Box>
        </Box>
      </CustomModal>
    </>
  );
};

export default JourneySoFar;
