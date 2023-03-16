import React from "react";
import { Box } from "@mui/material";
import Wrapper from "@/components/layout/Wrapper";
import Image from "next/image";
import classes from "../../../styles/Home.module.css";
import Carousel from "react-material-ui-carousel";
import { underCeilingImages } from "@/data/images";
import ReadMore from "@/components/buttons/ReadMore";
import { useModal } from "@/hooks/useModal";
import CustomModal from "@/components/modals/CustomModal";

const UnderCeiling = () => {
  const { open, openModal, closeModal } = useModal();

  return (
    <>
      <Box sx={{ py: 5 }}>
        <Wrapper>
          <div id="">
            <Box sx={{ mt: 10 }}>
              <p
                className="text-secondary-3 font-52 font-400 montaga text-center"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                Under Ceiling Solution by Roma, Italy
              </p>
            </Box>

            <Box sx={{ px: { xs: 1, md: 5, lg: 10 } }}>
              <p
                className="text-secondary-4 font-32 font-300 avenuex text-justify text-justify"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                When one enters in the temple, since the door won’t be opened
                for all the height of the actual opening, the gaze of the
                visitor will be direct to the altar wall. Nevertheless the
                entrance is the most important place of a place of worship, this
                is the reason we give such a big importance to the entrance
                door. On the floor, in front of the door, the visitor will find
                on the logo of the temple.
              </p>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <ReadMore onClick={openModal} />
              </Box>
            </Box>

            <Box
              sx={{ mt: 10, py: 10, display: "flex", justifyContent: "center" }}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <Carousel sx={{ width: { xs: "90%", md: "80%", lg: "55%" } }}>
                {underCeilingImages.map((item, index) => (
                  <Box className={classes.img_container} key={index}>
                    <Image alt="design_systems" src={item} fill />
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
              {" "}
              Under Ceiling Solution by Roma, Italy
            </p>
            <p className="text-secondary-4 font-32 font-300 avenuex text-justify line-150">
              When one enters in the temple, since the door won’t be opened for
              all the height of the actual opening, the gaze of the visitor will
              be direct to the altar wall. Nevertheless the entrance is the most
              important place of a place of worship, this is the reason we give
              such a big importance to the entrance door. On the floor, in front
              of the door, the visitor will find on the logo of the temple.
              <br /> <br />
              At the top on the ceiling a ceiling framed with oakwood, on two
              levels, will hide the structural steps of the gallery. This will
              be obtained by installing flat pLasterboards between the
              trabeation (beams) the columns sustain. At the same time we
              purpose to increase the section of the beams to look similar to a
              trabeation by increasing their diameter to that of the columns.{" "}
              <br />
              <br />
              Coming back to the suspended ceiling, the panels on the surface
              that looks at the floor will be framed with a wooden frame, of the
              same wood the visitor will find all over the building, and inside
              the frame, the same wall paper you have in the convex areas in the
              main ceiling.
              <br />
              <br />
            </p>
          </Box>
        </Box>
      </CustomModal>
    </>
  );
};

export default UnderCeiling;
