import React from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import Wrapper from "@/components/layout/Wrapper";
import { FaLongArrowAltRight } from "react-icons/fa";
import ReadMore from "@/components/buttons/ReadMore";
import { useModal } from "@/hooks/useModal";
import CustomModal from "@/components/modals/CustomModal";
import classes from "../../../styles/Home.module.css";

const Introduction = () => {
  const { open, openModal, closeModal } = useModal();
  return (
    <Box sx={{ py: 5 }}>
      <div id="why_build">
        <Wrapper>
          <Grid container>
            <Grid item xs={12} md={5}>
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
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <p className="font-52 font-400 text-secondary-3 montaga">
                Introduction
              </p>
              <p className="text-secondary-4 font-32 font-300 text-justify avenuex line-150">
                At this stage of the construction of the Grand Temple, there is
                a need for a prospectus to explain the journey so far and the
                stages towards completion
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
                Introduction
              </p>
              <p className="text-secondary-4 font-32 font-300 text-justify avenuex line-20">
                At this stage of the construction of the Grand Temple, there is
                a need for a prospectus to explain the journey so far and the
                stages towards completion. <br />
                <br />
                Building a house of God, especially of this magnitude requires
                engineering expertise, funds, commitment and above all God’s
                sanctions. <br />
                <br />
                If God do not build the house, the workers labour in vain. The
                Grand Temple, is not the idea or concept of man, it is God’s
                command. He demanded from us to build for Him a Grand Temple
                with His specification. He even directed the founding fathers to
                move to the west of Ebute Meta, where they found land at Iponri.{" "}
                <br />
                <br />
                Holy Order is a peculiar Christian organization, in many
                aspects, these include
                <br />
                <br />
                God is the Founder, unlike some churches and sects that were
                founded by men and women
                <br />
                <br />
                God commanded us not to engage in open evangelism, crusade and
                membership drive. We can only propagate His words through our
                attitude and character
                <br />
                <br />
                To worship in the Temple you must be a member. To be a member
                you must fulfil some conditions as a Christian
                <br />
                <br />
                All these limit membership and reduce inflow of funds, unlike
                other churches. This explains why we started late and why we
                adopted direct labour approach at a stage
                <br />
                <br />
                However, this is a God’s plan and hitherto He has helped us
              </p>
            </Box>
          </Box>
        </CustomModal>
      </div>
    </Box>
  );
};

export default Introduction;
