import React from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import Wrapper from "@/components/layout/Wrapper";
import { FaLongArrowAltRight } from "react-icons/fa";
import ReadMore from "@/components/buttons/ReadMore";
import { useModal } from "@/hooks/useModal";
import CustomModal from "@/components/modals/CustomModal";
import classes from "../../../styles/Home.module.css";

const WhyBuild = () => {
  const { open, openModal, closeModal } = useModal();
  return (
    <Box sx={{ py: 5 }}>
      <div id="why_build">
        <Wrapper>
          <Grid container>
            <Grid
              item
              xs={12}
              md={5}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "80vh",
                }}
              >
                <Image
                  src="/assets/icons/question_mark.svg"
                  alt="question_mark"
                  width={272.4}
                  height={373.74}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={7}
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="2000"
            >
              <p className="font-52 font-400 text-secondary-3 montaga">
                Why build a temple?{" "}
              </p>
              <p className="text-secondary-4 font-32 font-300 text-justify avenuex">
                The Great Divine Holy Order of the Third Era was established in
                1941 with the goal of building a Grand Temple according to
                God&apos;s specified dimensions. The organization started in
                rented rooms and has since built two Temporary Temples, with the
                second one currently in use. The dream of building the Grand
                Temple is yet to be fulfilled.
              </p>
              <ReadMore onClick={openModal} />
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
                Why build a temple?{" "}
              </p>
              <p className="text-secondary-4 font-32 font-300 text-justify avenuex">
                The Great Divine Holy Order of the Third Era was thronically
                christened in a divine message of 16th September 1941, and the
                divine structure was called the Cogent Arrangement. Ever since
                then, God declared His intention for the Holy Order to build a
                Grand Temple for Him. The dimensions were specified. The Holy
                Order started from a very humble beginning, using a rented room
                and parlor apartment as her place of worship. They started at
                13, Jebba Street, Ebute Meta West, and later moved to 33, Jones
                Street, Ebute Meta West. Later land was secured at Iponri
                village, close to Ebute Meta West. After much efforts, the first
                Temporary Temple was built in 1961 on this land, this building
                is now being used as the Sabbath School. Efforts were
                intensified to build a more spacious and befitting place of
                worship, which resulted in dedicating the second Temporary
                Temple on 10th of August, 1986. This is the present Temple we
                are using now, it is a three floor building. Holy Order of Saint
                Mary chapel is on the ground floor, the the sanctuary and the
                body of the Temple is on the first floor, and the prayer
                chambers and others on the second floor. Still the command and
                intention of God to build a Grand Temple for Him, with His
                specifications is yet to be fulfilled.
              </p>
            </Box>
          </Box>
        </CustomModal>
      </div>
    </Box>
  );
};

export default WhyBuild;
