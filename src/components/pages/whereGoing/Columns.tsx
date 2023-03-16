import React from "react";
import { Box } from "@mui/material";
import Wrapper from "@/components/layout/Wrapper";
import Image from "next/image";
import classes from "../../../styles/Home.module.css";
import Carousel from "react-material-ui-carousel";
import { columnImages } from "@/data/images";
import ReadMore from "@/components/buttons/ReadMore";
import { useModal } from "@/hooks/useModal";
import CustomModal from "@/components/modals/CustomModal";

const Columns = () => {
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
                Columns by Roma, Italy
              </p>
            </Box>

            <Box sx={{ px: { xs: 1, md: 5, lg: 10 } }}>
              <p
                className="text-secondary-4 font-32 font-300 avenuex text-justify text-justify"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                The columns will be finished in a marble-like paint called
                MARMORINO NATURALE. The thickness of this paint makes it
                possible to decorate whilst at the same time covering small
                imperfections, thus saving on the cost of screeding the surface.
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
                {columnImages.map((item, index) => (
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
              Columns by Roma, Italy
            </p>
            <p className="text-secondary-4 font-32 font-300 avenuex text-justify line-150">
              <strong> Finishing of Columns </strong> <br />
              <br />
              The columns will be finished in a marble-like paint called
              MARMORINO NATURALE. The thickness of this paint makes it possible
              to decorate whilst at the same time covering small imperfections,
              thus saving on the cost of screeding the surface. The product
              creates a stable link with the surface, preserving the vapour
              permeability of the whole wall structure. The product also impedes
              the development of moulds and bacterial colonies. The product can
              give a matt finish or can be polished with FINITURA AUTOLUCIDANTE
              by OIKOS. MARMORINO NATURALE has a low odour level, is non
              inflammable and is friendly to both humans and the environment.
              <br />
              <br />
              The “shiny marble” finish is gained by applying the finish
              FINITURA AUTOLUCIDANTE by OIKOS, spreading it with an inox steel
              trowel in a thin coat and immediately smoothing over the surface
              with the same tool to polish it. For exterior applica- tions: on
              FINITURA AUTOLUCIDANTE by OIKOS, after 7 days it is recommended to
              apply PROTET- TIVO PER STUCCO E MARMORINO by OIKOS to obtain
              greater water repellence and protect the surface from atmospheric
              agents.
              <br />
              <br />8 Nr Altar half columns <br /> 20 Nr columns with 400mm Ø{" "}
              <br />8 columns radius 300 mm Ø <br />
              Columns tagged for finishing are internal columns only.
            </p>
          </Box>
        </Box>
      </CustomModal>
    </>
  );
};

export default Columns;
