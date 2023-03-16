import React from "react";
import { Box } from "@mui/material";
import Wrapper from "@/components/layout/Wrapper";
import Image from "next/image";
import classes from "../../../styles/Home.module.css";
import Carousel from "react-material-ui-carousel";
import { eccleImages } from "@/data/images";
import ReadMore from "@/components/buttons/ReadMore";
import { useModal } from "@/hooks/useModal";
import CustomModal from "@/components/modals/CustomModal";

const EcclesiasticBuilding = () => {
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
                THE ECCLESIASTIC BUILDING
              </p>
            </Box>

            <Box sx={{ px: { xs: 1, md: 5, lg: 10 } }}>
              <p
                className="text-secondary-4 font-32 font-300 avenuex text-justify text-justify"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                The initiative came from Elder Olusoji Olugbekan, the immediate
                past Great Divine Rabbi. His idea was that the Priesthood are
                workers in the Grand Temple, they must be closer to perform
                their divine functions. Therefore, he proposed this building to
                be erected on the land close to the Grand Temple.
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
                {eccleImages.map((item, index) => (
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
              THE ECCLESIASTIC BUILDING
            </p>
            <p className="text-secondary-4 font-32 font-300 avenuex text-justify line-150">
              The initiative came from Elder Olusoji Olugbekan, the immediate
              past Great Divine Rabbi. His idea was that the Priesthood are
              workers in the Grand Temple, they must be closer to perform their
              divine functions. Therefore, he proposed this building to be
              erected on the land close to the Grand Temple.
              <br />
              <br />
              Bro Ola Banwo made the architectural design draft. This was kept
              in view until recently when it was revisited.
              <br />
              <br />
              The building was named Ecclesiastical Building and made more
              inclusive by bringing in members of the Rabbinical Council, the
              female officers and the Sabbath School in different blocks.
              <br />
              <br />
              This building also contains a conference room for meetings. <br />
              <br /> A. THE ECCLESIASTIC BUILDING (BLOCK E) The Ecclesiastic
              Building shall be designed exclusively for the Tripod, Rabbinical
              Council and Holy Order Priests and their occasional guests. BLOCK
              E01 <br /> 1. General Lobby Area . This space shall be located on
              the ground floor of the Ecclesiastic Building. It shall comprise
              of:
              <br /> i. General Lobby/ Visitor's Lounge designed for 6 occupants
              <br /> ii. Tripod Secretarial Office which shall be adjoined to
              the General Lobby whilst having direct access to the Tripod
              Offices (located on the first floor) <br />
              iii. General restrooms and Ablution Spaces. <br /> 2. The Offices
              for the Priests of the Holy Order. This office shall be located on
              the ground floor of the Ecclesiastic Building. There shall be
              provision for the following end-users: <br />
              <br />
              Senior Priest. Enclosed Office en-suite with an oratory, ablution
              space and restroom <br />
              <br />
              Open Office for 20 priests. There will be provision of ample space
              for individual workstations with 2 visitors chairs; and general
              cabinet spaces for all priests. The open Office shall have a
              central ablution and restrooms for all priests. <br />
              <br />
              Priests Lounge/ Rest area designed for an average of 6 occupants
              at a seating. <br />
              <br />
              Library/ Research Room with 2 workstations <br />
              <br /> 2 Nr Consultation Rooms
            </p>
          </Box>
        </Box>
      </CustomModal>
    </>
  );
};

export default EcclesiasticBuilding;
