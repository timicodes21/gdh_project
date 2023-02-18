import BlurredBadge from "@/components/buttons/BlurredBadge";
import ReadMore from "@/components/buttons/ReadMore";
import Wrapper from "@/components/layout/Wrapper";
import { Box, Grid } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import classes from "../../../styles/Home.module.css";

interface IProps {
  templePage?: boolean;
}

const GrandProject: NextPage<IProps> = ({ templePage }) => {
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
                  THE GREAT DIVINE HOLY ORDER OF THE THIR ERA
                </span>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                {!templePage && (
                  <BlurredBadge onClick={() => router.push("/temple")}>
                    Explore temple sections
                  </BlurredBadge>
                )}
                <Box sx={{ mt: 2 }}></Box>
                {!templePage && (
                  <BlurredBadge onClick={() => {}}>See whats new</BlurredBadge>
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>
        {templePage && (
          <Box sx={{ mt: 4 }}>
            <span className="font-32 font-400 avenuex text-secondary-4">
              The Grand Temple for the Great Divine Holy Order is a religious
              building located at 27 Oke-Olu street, Iponri, Lagos, Nigeria. The
              construction of the temple began in 2009 and is currently underway
              with plans to complete it in 2023. The completion of the Grand
              Temple will fulfill a vision set by the Holy Order decades ago and
              provide a place of worship for its members.
            </span>
            <Box sx={{ mt: { xs: 2, md: 5 } }}>
              <ReadMore onClick={() => {}} />
            </Box>
          </Box>
        )}
      </Wrapper>
    </Box>
  );
};

export default GrandProject;
