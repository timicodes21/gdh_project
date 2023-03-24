import React, { useEffect, useState, useRef } from "react";
import { Box, ButtonBase } from "@mui/material";
import Wrapper from "@/components/layout/Wrapper";
import Image from "next/image";
import classes from "../../../styles/Home.module.css";
import Carousel from "react-material-ui-carousel";
import {
  designChangesImages,
  musicalEquipmentsImages,
  stageOneImages,
  stainedGlassImages,
} from "@/data/images";
import ReadMore from "@/components/buttons/ReadMore";
import { useModal } from "@/hooks/useModal";
import CustomModal from "@/components/modals/CustomModal";

const JourneySoFar = () => {
  const { open, openModal, closeModal } = useModal();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      console.log("entry intersecting", entry.isIntersecting);
      if (entry.isIntersecting) {
        ref?.current?.classList.add("animate");
      }
    });

    observer.observe(ref?.current);

    return () => {
      observer.unobserve(ref?.current);
    };
  }, []);

  return (
    <>
      <div ref={ref} id="construction_stages" className="slanted-container">
        <Box sx={{ py: 5 }}>
          <Wrapper>
            <p
              className="text-secondary-3 font-52 font-400 montaga text-center"
              data-aos="fade-up-right"
              data-aos-duration="1000"
            >
              The Construction Stages of the Grand Temple
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
                Here we have some block of text giving more information about
                the project Here we have some block of text giving more
                information about the project.
              </p>
            </Box>
            <Box
              sx={{ mt: 10, display: "flex", justifyContent: "center" }}
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <Carousel
                sx={{
                  width: {
                    xs: "90%",
                    md: "80%",
                    lg: "75%",
                  },
                  height: { lg: "80vh" },
                }}
                navButtonsAlwaysVisible
                indicators
              >
                {stageOneImages.map((item, index) => (
                  <Box className={classes.img_container} key={index}>
                    <Image alt="phase_1" src={item} fill />
                  </Box>
                ))}
              </Carousel>
            </Box>
            <div id="design_changes">
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
                  At construction stages additional design improvements were
                  made. The width of the upper gallery was increase; additional
                  Sanctuary doors were put in place; a pentacle balcony
                  introduced behind the Holy of Holies; changes to the
                  immolation area to include Saint Mary’s immolation; two
                  bathrooms on the upper floor of the Sanctuary were added;
                  access to the concrete roof was changed from cat ladder to
                  concrete staircase.
                </p>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "end" }}>
                <ReadMore onClick={openModal} />
              </Box>
              <Box
                sx={{
                  mt: 10,
                  py: 10,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Carousel
                  navButtonsAlwaysVisible
                  sx={{
                    width: { xs: "90%", md: "80%", lg: "75%" },
                    height: { lg: "80vh" },
                  }}
                >
                  {designChangesImages.map((item, index) => (
                    <Box className={classes.img_container} key={index}>
                      <Image alt="phase_2" src={item} fill />
                    </Box>
                  ))}
                </Carousel>
              </Box>
            </div>
            <div id="stained_glass">
              <p
                className="text-secondary-3 font-52 font-400 montaga text-center"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Stained Glass
              </p>
              <Box
                sx={{ display: "flex", justifyContent: "center", mb: 10 }}
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <Carousel
                  navButtonsAlwaysVisible
                  sx={{
                    width: { xs: "90%", md: "80%", lg: "75%" },
                    height: { lg: "80vh" },
                  }}
                >
                  {stainedGlassImages.map((item, index) => (
                    <Box className={classes.img_container} key={index}>
                      <Image alt="phase_3" src={item} fill />
                    </Box>
                  ))}
                </Carousel>
              </Box>
            </div>
            <div id="musical_equipment">
              <p
                className="text-secondary-3 font-52 font-400 montaga text-center"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                Musical Equipment
              </p>
              <Box
                sx={{ display: "flex", justifyContent: "center", mb: 10 }}
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <Carousel
                  navButtonsAlwaysVisible
                  sx={{
                    width: { xs: "90%", md: "80%", lg: "75%" },
                    height: { lg: "80vh" },
                  }}
                >
                  {musicalEquipmentsImages.map((item, index) => (
                    <Box className={classes.img_container} key={index}>
                      <Image alt="phase_3" src={item} fill />
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
                The width of the upper gallery was increase; additional
                Sanctuary doors were put in place; a pentacle balcony introduced
                behind the Holy of Holies; changes to the immolation area to
                include Saint Mary’s immolation; two bathrooms on the upper
                floor of the Sanctuary were added; access to the concrete roof
                was changed from cat ladder to concrete staircase.
                <br />
                <br />
                The roof design was associated with leakages. The roof
                contractor’s attention was drawn to this challenge but with
                series of amendments and additional costs, there was no possible
                solution.
                <br />
                <br />A roof architect professional was employed who carried out
                repairs on the roof supports and sheets. When the leakages
                persisted, there was an advice that the suspended roof Crucifix
                should be redesigned. The Rabbinical Council made a divine
                investigation, and it was divinely approved. The new Crucifix
                was enclosed in a sheet covering to prevent rainwater passing
                through the Crucifix to the roof into the Body of the Temple.
                Here, the spiritual concept of the initial suspended Crucifix
                still subsisted. The new enclosed Crucifix is showing the divine
                presence of God, that surrounded Jesus the Christ on the cross,
                but was not visible and known to his accusers then. By divine
                revelation all mankind is now aware that Jesus Christ was never
                left alone on the cross by God His Heavenly Father. He was
                surrounded by God’s essence, power, and light.
              </p>
            </Box>
          </Box>
        </CustomModal>
      </div>
    </>
  );
};

export default JourneySoFar;
