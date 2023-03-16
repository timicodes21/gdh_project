import React from "react";
import { Box } from "@mui/material";
import Wrapper from "@/components/layout/Wrapper";
import Image from "next/image";
import classes from "../../../styles/Home.module.css";
import Carousel from "react-material-ui-carousel";
import { latticeImages, parapetImages } from "@/data/images";
import ReadMore from "@/components/buttons/ReadMore";
import { useModal } from "@/hooks/useModal";
import CustomModal from "@/components/modals/CustomModal";

const Parapet = () => {
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
                PARAPET, STEP PROTECTION AND RAILINGS BY ROMA, ITALY
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
              <Carousel sx={{ width: { xs: "90%", md: "80%", lg: "55%" } }}>
                {parapetImages.map((item, index) => (
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
              PARAPET, STEP PROTECTION AND RAILINGS BY ROMA, ITALY
            </p>
            <p className="text-secondary-4 font-32 font-300 avenuex text-justify line-150">
              <strong>
                Grand Temple : Parapet – Step Protection - Railing
              </strong>
              <br /> <br />
              Wood: American laminated oak: SPECIFIC WEIGHT 750 kg/m3 at 12%
              C.U. The drying process must be carried out slowly to avoid the
              risk of cracking and deformation. Double thermoacoustic seal.
              Painting carried out with products certified in the respect of the
              environment. Initial treatment of antibacterial, anti-mould and
              anti-fungal impregnation. Intermediate phase with polyurethane
              bottom and spray finish. Decorations, dimensions and shapes as per
              project. <br /> <br />
              <strong>Parapet</strong>
              <br /> <br />
              Wooden base in laminated oak that clad the thickness of the slab
              on the front and a laminated safety glass 8/8.2 . project as per
              drawing <br /> <br /> Parapet total length quoted: ml 46.00
              Parapet linear length: ml 34.00 <br /> <br /> Parapet curved
              length: ml 12,00 <br /> <br />
              <strong>Step Protection</strong>
              <br /> <br />
              We refer to the gallery and choir steps at the second floor.
              <br /> <br /> The estimated quantity of this protection is 198 ml
              <br /> <br />
              We propose oak wood risers that clad the step on the front higher
              than the step of 40-45 cm to be a protection for people. It would
              be fixed directly on the step cement structure by chemical and
              mechanical system. The way of fixing will be submitted in a second
              phase.
              <br /> <br />
              <strong>Staircase Bannister</strong>
              <br /> <br />
              Wood: American laminated oak: SPECIFIC WEIGHT 750 kg/m3 at 12%
              C.U. The drying process must be carried out slowly to avoid the
              risk of cracking and deformation. Double thermo-acoustic seal.
              Painting carried out with products certified in the respect of the
              environment. Initial treatment of antibacterial, antimould and
              anti-fungal impregnation. Intermediate phase with polyurethane
              bottom and spray finish. Decorations, dimensions and shapes as per
              project.
            </p>
          </Box>
        </Box>
      </CustomModal>
    </>
  );
};

export default Parapet;
