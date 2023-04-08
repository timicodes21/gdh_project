import BlurredBadge from "@/components/buttons/BlurredBadge";
import ReadMore from "@/components/buttons/ReadMore";
import Wrapper from "@/components/layout/Wrapper";
import CustomModal from "@/components/modals/CustomModal";
import VideoModal from "@/components/modals/VideoModal";
import { useModal } from "@/hooks/useModal";
import { Box, Grid } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import ReactPlayer from "react-player";
import classes from "../../../../styles/Home.module.css";

interface IProps {
  templePage?: boolean;
}

const ElectricalIntro: NextPage<IProps> = ({ templePage }) => {
  const { open, openModal, closeModal } = useModal();
  const {
    open: open2,
    openModal: openModal2,
    closeModal: closeModal2,
  } = useModal();
  const router = useRouter();
  return (
    <Box sx={{ py: 5 }}>
      <Wrapper>
        <BsChevronLeft
          className="font-24 font-800 pointer"
          onClick={() => router.back()}
        />
        <Box className={classes.electrical_background} sx={{ mt: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Grid container sx={{ px: 5, pb: 3 }}>
              <Grid
                item
                xs={12}
                md={templePage ? 12 : 6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
                data-aos="fade-down"
                data-aos-duration="500"
              >
                <span className="font-64 font-400 montaga text-white">
                  The Grand Temple {templePage ? "" : "project"}
                </span>
                <br />
                <span className="font-18 font-400 text-white avenir">
                  THE GREAT DIVINE HOLY ORDER OF THE THIRD ERA
                </span>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: { xs: "flex-start", lg: "flex-end" },
                  alignItems: { xs: "flex-start", lg: "flex-end" },
                  mt: { xs: 3, lg: 0 },
                }}
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-delay="500"
              >
                {/* {!templePage && (
                  <BlurredBadge onClick={() => router.push("/temple")}>
                    Explore temple
                  </BlurredBadge>
                )} */}
                <Box sx={{ mt: 2 }}></Box>
                {/* {!templePage && (
                  <BlurredBadge onClick={openModal2}>
                    See whats new
                  </BlurredBadge>
                )} */}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Wrapper>
      <VideoModal open={open2} closeModal={closeModal2}>
        <Box>
          <Box>
            <BsChevronLeft
              className="font-24 font-800 pointer"
              onClick={closeModal2}
            />
          </Box>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=iLpxzQ_FriQ&ab_channel=UniversityofMinnesota"
            width="100%"
          />
        </Box>
      </VideoModal>
    </Box>
  );
};

export default ElectricalIntro;
