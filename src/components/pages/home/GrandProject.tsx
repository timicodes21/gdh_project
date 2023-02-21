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
import classes from "../../../styles/Home.module.css";

interface IProps {
  templePage?: boolean;
}

const GrandProject: NextPage<IProps> = ({ templePage }) => {
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
        <Box className={classes.background} sx={{ mt: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
            }}
            data-aos="fade-up"
            data-aos-duration="2000"
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
              >
                {!templePage && (
                  <BlurredBadge onClick={() => router.push("/temple")}>
                    Explore temple
                  </BlurredBadge>
                )}
                <Box sx={{ mt: 2 }}></Box>
                {!templePage && (
                  <BlurredBadge onClick={openModal2}>
                    See whats new
                  </BlurredBadge>
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>
        {templePage && (
          <Box sx={{ mt: 4 }} data-aos="fade-up" data-aos-duration="2000">
            <p className="font-32 font-300 avenuex text-justify text-secondary-4">
              The Grand Temple for the Great Divine Holy Order is a religious
              building located at 27 Oke-Olu street, Iponri, Lagos, Nigeria. The
              construction of the temple began in 2009 and is currently underway
              with plans to complete it in 2023. The completion of the Grand
              Temple will fulfill a vision set by the Holy Order decades ago and
              provide a place of worship for its members.
            </p>
            <Box sx={{ mt: { xs: 2, md: 5 } }}>
              <ReadMore onClick={openModal} />
            </Box>
          </Box>
        )}
      </Wrapper>
      <CustomModal open={open} closeModal={closeModal}>
        <Box sx={{ overflowY: "scroll" }} className={classes?.scroll}>
          <Image
            src="/assets/icons/about_icon.svg"
            alt="question_mark"
            width={258}
            height={258}
          />
          <Box>
            <p className="font-52 font-400 text-secondary-3 montaga">
              About the temple
            </p>
            <p className="text-secondary-4 font-32 font-300 avenuex text-justify">
              The proposed project is the completion of the GrandTemple for
              Great Divine Holy Order at 27 Oke-Olustreet, Iponri, Lagos, Lagos
              State Nigeria. The buildingis currently under construction and the
              plan is tocomplete the construction this year 2023 and itrequires
              the necessary funding to be completed. Theproposed funding will be
              used to finish theconstruction of the church and provide the
              requiredequipment and furnishings. The completion of theGrand
              Temple will be the fulfilment of the vision setdecades ago for the
              Great Divine Holy Order while itwill provide a place of worship
              with ample room formembers and grace the community with the
              resourceof a beautiful edifice.The construction of the Grand
              Temple began since2009 and it has been done in phases to bring it
              tothe culmination point of just a few additionsnecessary to attain
              completion. Funding for theproject to bring it to its current
              state has beeninternally generated by members through the
              years.Currently, a total of Fifty Million (₦50,000,000:00)Naira
              has been expended on the project thus far.The Grand Temple is the
              3rd generation building forthe Great Divine Holy Order and this
              was envisionedsince 1946 when the first temple building
              wascompleted. The second-generation temple buildingwhich is
              currently in use was completed and dedicatedfor use in 1986 and is
              located just a few tens of metresaway from the yet to be completed
              Grand Temple inthe growing and developing community of
              Iponri,Lagos, Nigeria.
            </p>
          </Box>
        </Box>
      </CustomModal>
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

export default GrandProject;
