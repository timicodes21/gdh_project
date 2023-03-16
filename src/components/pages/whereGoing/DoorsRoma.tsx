import React from "react";
import { Box } from "@mui/material";
import Wrapper from "@/components/layout/Wrapper";
import Image from "next/image";
import classes from "../../../styles/Home.module.css";
import Carousel from "react-material-ui-carousel";
import { doorsImages, underCeilingImages } from "@/data/images";
import ReadMore from "@/components/buttons/ReadMore";
import { useModal } from "@/hooks/useModal";
import CustomModal from "@/components/modals/CustomModal";

const DoorsRoma = () => {
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
                Doors By Roma
              </p>
            </Box>

            <Box sx={{ px: { xs: 1, md: 5, lg: 10 } }}>
              <p
                className="text-secondary-4 font-32 font-300 avenuex text-justify text-justify"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Our project philosophy incorporates themes and symbols suggested
                from the Committee or just used in the building we’re working
                on. This is the reason we used in our design, the logo founded
                several times in the church, the Hexagram, and we added a new
                one. You’ ll be able to find both these symbols all around the
                building, to draw a red line that follow who will go into the
                church.
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
                {doorsImages.map((item, index) => (
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
              Doors by Roma
            </p>
            <p className="text-secondary-4 font-32 font-300 avenuex text-justify line-150">
              <strong> Introduction</strong> <br />
              <br /> Our project philosophy incorporates themes and symbols
              suggested from the Committee or just used in the building we’re
              working on. This is the reason we used in our design, the logo
              founded several times in the church, the Hexagram, and we added a
              new one. You’ ll be able to find both these symbols all around the
              building, to draw a red line that follow who will go into the
              church.
              <br />
              <br /> The geometry we are using: Hexagram is made of two
              equilateral triangles The hexagram is inscribed it in a circle.
              Endness knot is made of lines that drawn endless lines . You will
              find all these geometries, in different forms, in the wooden
              works, in the ceilings,in the floorings.
              <br />
              <br /> At the moment we are presenting our proposal for the Saint
              Mary’s floor doors of the Temple. We developed the design
              following the concept explained above. The design, if approved
              will be extended to the other doors of the building. Since we are
              proposing for this Temple a palette of light colours for all the
              finishes, we are suggesting Oakwood doors. <br />
              <br /> MAIN DOOR <br />
              <br /> In our idea when you arrive at the entrance of the Temple
              you must understand where you are and where you’re going. The
              entrance, the space in front of the entrance, the door before
              entering must declare where you are. This is the reason we give
              such an importance to the main door.
              <br />
              <br /> The door become itself a symbol where, who can read, can
              find everything he’ll find inside. Following this idea you can
              find the Hexagram in the handle of the door. The circle is the
              handle itself and inside there is the hexagram . At the top a fix
              panel whith the Endless knot inscribed. <br />
              <br />
              <strong>Grand Temple External Doors</strong> <br />
              <br /> Wood: American Laminated Oak: SPECIFIC WEIGHT 750 kg/m3 at
              12% C.U. <br />
              <br />
              The drying process must be carried out slowly to avoid the risk of
              cracking and deformation. Frames entirely made of laminated/solid
              wood thickness mm. 68x80. Solid laminated wood door from mm.
              68x120. Structure in laminated wood, assembled by junction with
              90x12 pins, to ensure maximum strength over time
              <strong>Grand Temple Internal Doors</strong> <br />
              <br /> Wood: American Laminated Oak: SPECIFIC WEIGHT 750 kg/m3 at
              12% C.U. <br />
              <br />
              Office doors: Solid wood doors with oak veneer, 4,4 cm thick,
              frames and subframes in solid oak included; Altar doors:
              Synchronized double sliding doors with decorative cover panels,
              frame in solid oak wood, central panel in oak strips 2.5 cm thick
              , handles and frames in solid wood 2 cm thick. Door A- B Wood:
              American laminated oak. SPECIFIC WEIGHT 750 kg/m3 at 12% C.U. The
              drying process must be carried out slowly to avoid the risk of
              cracking and deformation. Frames entirely made of laminated/solid
              wood thickness mm. 25. Solid laminated wood door from mm. 65.
              Structure in laminated wood, assembled by junction with 90x12
              pins, to ensure maximum strength over time. <br />
              <br />
              <strong>TECHNICAL CHARACTERISTICS</strong> <br />
              <br /> - Complete closure with two turns, thanks to a gear drive
              mechanism made of cold pressed steel.The sturdy and resistant gear
              teeth ensure precision and durability. No maintenance is required.
              The moment of the device is irreversible: once they slide out, the
              bolts cannot be pushed back in. <br />
              <br /> - Sintered steel spring latch, bevelled and convex on both
              sides to reduce friction at closing. <br />
              <br /> - Cylinder-fastening screw supplied with the lock. <br />
              <br /> - 8mm brass follower, with sturdy counter-spring to support
              even the heaviest handles. <br />
              <br /> - Total locking can stroke: 20mm, downstroke when closing.{" "}
              <br />
              <br /> - European profile cylinder hole. Designed to house
              cylinders with ani-pull cam. <br />
              <br /> - Holes for fitting handle plate, escutcheon and rose with
              through screws. <br />
              <br /> - Protection bushings on the case’s through holes. <br />
              <br /> - Only 18mm distance between cylinder axis an outer edge of
              case, for improved efficiency on PVC and wood/aluminium profiles.{" "}
              <br />
              <br /> - Silver finish. <br />
              <br /> - 1900 to 2400mm lengths. <br />
              <br /> - 85 and 92 mm lock centres. <br />
              <br /> - 35 to 80mm backsets. <br />
              <br /> - 16 60 20mm steel forend
              <br />
            </p>
          </Box>
        </Box>
      </CustomModal>
    </>
  );
};

export default DoorsRoma;
