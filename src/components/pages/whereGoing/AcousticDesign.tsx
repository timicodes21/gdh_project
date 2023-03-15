import React from "react";
import { Box } from "@mui/material";
import Wrapper from "@/components/layout/Wrapper";
import Image from "next/image";
import classes from "../../../styles/Home.module.css";
import Carousel from "react-material-ui-carousel";
import {
  designSystemsImages,
  electricalSystemImages,
  floorPlanImages,
  stMaryImages,
} from "@/data/images";
import ReadMore from "@/components/buttons/ReadMore";
import { useModal } from "@/hooks/useModal";
import CustomModal from "@/components/modals/CustomModal";

const AcousticDesign = () => {
  const { open, openModal, closeModal } = useModal();

  return (
    <>
      <Box sx={{ py: 5 }}>
        <Wrapper>
          <div id="">
            <Box sx={{ mt: 10 }}>
              <p
                className="text-secondary-3 font-52 font-400 montaga text-center"
                data-aos="fade-up-left"
                data-aos-duration="1000"
              >
                Acoustic Design Strategy
              </p>
            </Box>

            <Box sx={{ px: { xs: 1, md: 5, lg: 10 } }}>
              <p
                className="text-secondary-4 font-32 font-300 avenuex text-justify text-justify"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                The acoustic performance of an auditorium generally depends on
                its geometry, the nature and size of the surfaces in that
                auditorium that are exposed to sound waves and the type of
                finishes used within the auditorium.
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
                {electricalSystemImages.map((item, index) => (
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
              Acoustic Design Strategy
            </p>
            <p className="text-secondary-4 font-32 font-300 avenuex text-justify line-150">
              <strong>PURPOSE FOR ACOUSTIC SOLUTION</strong> <br />
              <br />
              1. Improve speech intelligibility in the auditoria <br />
              2. Improve speech and music clarity <br />
              3. Create optimal audio system environment <br />
              4. Provide sufficient roof insulation in the main auditorium and
              presentation hall.
              <br />
              <br />
              Design report provides acoustical solutions for floor/seating
              areas, ceiling areas, floor plans are indicative and the coverage
              areas and positions of acoustical panels are approximate. Details
              of the exact areas will be shown in a comprehensive drawing in
              strategy with he architect and the project. Manager. <br />
              <br />
              <strong>STRATEGY</strong>
              <br />
              <br />
              The acoustic performance of an auditorium generally depends on its
              geometry, the nature and size of the surfaces in that auditorium
              that are exposed to sound waves and the type of finishes used
              within the auditorium. There are limits to the alteration that can
              be achieved with the structure and architecture of the building.
              The strategy is to treat all problematic situations with optimum
              technical and economic means. In order to achieve the above
              objective, the following would be the approach:
              <br />
              <br />
              1. Reduce the overall reverberation time (RT60 value) within the
              three auditoria to an acceptable level (about 0.7 seconds to 1.5
              seconds). <br />
              2. As much as possible, reduce surfaces exposed to acoustical
              reflection within the three auditoria. <br />
              3. Numbers 1 & 2 above should be achieved through appropriate
              sound absorption and diffusion where needed
              <br />
              <br />
              <strong>DESCRIPTION</strong>
              <br />
              <br />
              1. This hall is rectangular in shape with low flat roof (3.6m).
              Due to the hall geometry, the modal analysis shows a resonance
              produced will cause a lot of boominess within the space. <br /> 2.
              For frequencies lower than a few hundred Hertz, the measurement
              results show modal decay rather than reverberation times. <br />
              3. Any sound system installed within this space will experience
              the negative impact od the modal resonance or roominess. <br />
              4. Over 70% of the rear and side walls are glazed and as such,
              highly reflective. The unglazed areas are below 1.2m in height.
            </p>
          </Box>
        </Box>
      </CustomModal>
    </>
  );
};

export default AcousticDesign;
