import React from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import Wrapper from "@/components/layout/Wrapper";
import ReadMore from "@/components/buttons/ReadMore";
import { useModal } from "@/hooks/useModal";
import CustomModal from "@/components/modals/CustomModal";
import classes from "../../../styles/Home.module.css";

const DesignConcept = () => {
  const { open, openModal, closeModal } = useModal();
  return (
    <Box sx={{ py: 5 }}>
      <div id="why_build">
        <Wrapper>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              md={6}
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <p className="font-52 font-400 text-secondary-3 montaga">
                Design Concept
              </p>
              <p className="text-secondary-4 font-32 font-300 text-justify avenuex line-150">
                The Architect (Bro. Ola Banwo) was divinely influenced on the
                concept of the Grand Temple to consist of 3 parts: The Holy of
                Holies (The Sanctuary), The Body of the Temple (Main Worship
                Area) and The Soul (The Projected Roof). The Holy of Holies is
                somewhat outside the Body of the Temple but remains connected,
                while the Body also supports the Soul which projects towards
                heaven.
              </p>
              <ReadMore onClick={openModal} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  height: "80vh",
                  mt: 10,
                }}
              >
                <Image
                  src="/assets/images/stages_table.PNG"
                  alt="question_mark"
                  layout="fill"
                />
              </Box>
            </Grid>
          </Grid>
        </Wrapper>
        <CustomModal open={open} closeModal={closeModal}>
          <Box sx={{ overflowY: "scroll" }} className={classes?.scroll}>
            <Image
              src="/assets/icons/question_mark.svg"
              alt="question_mark"
              width={272.4}
              height={373.74}
            />
            <Box>
              <p className="font-52 font-400 text-secondary-3 montaga">
                Design Concept
              </p>
              <p className="text-secondary-4 font-32 font-300 text-justify avenuex line-20">
                The Architect (Bro. Ola Banwo) was divinely influenced on the
                concept of the Grand Temple to consist of 3 parts: The Holy of
                Holies (The Sanctuary), The Body of the Temple (Main Worship
                Area) and The Soul (The Projected Roof). The Holy of Holies is
                somewhat outside the Body of the Temple but remains connected,
                while the Body also supports the Soul which projects towards
                heaven. <br />
                <br />
                The concept determined the geometry of the building, from the
                onset. The Holy of Holies stands apart from the Main Body of the
                Worship Area. A swoop roof, representing the Soul is separated
                from the gable-roofed Main Worship Area which represents the
                Body by a depressed curved skylight. The separation was followed
                through with tall glazing on both ends of the curved skylight.
                The curved roof stretches about 7-storeys high to suspend a
                two-and-a-half-storey high bright metal Crucifix ??? for all to
                see. With this divine concept the architectural designs evolved.
              </p>
            </Box>
          </Box>
        </CustomModal>
      </div>
    </Box>
  );
};

export default DesignConcept;
