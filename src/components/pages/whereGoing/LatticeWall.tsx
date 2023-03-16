import React from "react";
import { Box } from "@mui/material";
import Wrapper from "@/components/layout/Wrapper";
import Image from "next/image";
import classes from "../../../styles/Home.module.css";
import Carousel from "react-material-ui-carousel";
import { doorsImages, latticeImages, underCeilingImages } from "@/data/images";
import ReadMore from "@/components/buttons/ReadMore";
import { useModal } from "@/hooks/useModal";
import CustomModal from "@/components/modals/CustomModal";

const LatticeWall = () => {
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
                Lattice Wall Caldding by Roma
              </p>
            </Box>

            <Box sx={{ px: { xs: 1, md: 5, lg: 10 } }}>
              <p
                className="text-secondary-4 font-32 font-300 avenuex text-justify text-justify"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Altar Decorative panels P1: Wooden slats at the side of the
                altar wall. Realised in solid oakwood 12 cm thick with camera
                for rockwool insulation 2.5 cm thick, at the back, decorated as
                per pictures, with 2 doors opening.
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
              <Carousel
                navButtonsAlwaysVisible
                sx={{ width: { xs: "90%", md: "80%", lg: "55%" } }}
              >
                {latticeImages.map((item, index) => (
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
              Lattice Wall Caldding by Roma
            </p>
            <p className="text-secondary-4 font-32 font-300 avenuex text-justify line-150">
              Internal Panels
              <br />
              <br />
              Altar Decorative panels P1: Wooden slats at the side of the altar
              wall. Realised in solid oakwood 12 cm thick with camera for
              rockwool insulation 2.5 cm thick, at the back, decorated as per
              pictures, with 2 doors opening. <br />
              <br /> Wall Panels P2: frame in solid oakwood , internal structure
              in solid wood with oak veneer 2 cm thick rockwool insulation at
              the back 2,5 cm thick. <br />
              <br /> Altar panels above the central doors P3: decorative solid
              oakwood panel 2 cm thick with rockwool insulation at the back
            </p>
          </Box>
        </Box>
      </CustomModal>
    </>
  );
};

export default LatticeWall;
