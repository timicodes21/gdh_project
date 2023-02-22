import TempleImageLayout from "@/components/layout/TempleImageLayout";
import Wrapper from "@/components/layout/Wrapper";
import { templeImages, templeImagesSectionB } from "@/data/temple";
import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import classes from "../../../styles/Home.module.css";

interface IProps {
  sectionB?: boolean;
}

const TempleImageSection: React.FC<IProps> = ({ sectionB }) => {
  return (
    <Box sx={{ py: 5 }}>
      <Wrapper>
        <Box>
          <Box
            className="text-center"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <span className="text-primary font-30 font-400 avenuex text-center">
              {sectionB ? "SECTION B," : "SECTION A,"}
            </span>
          </Box>
          <Box
            className="text-center"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <span className="text-secondary-3 font-40 font-400 montaga">
              Section name
            </span>
          </Box>
          <Box
            sx={{ px: { xs: 1, md: 5, lg: 10 } }}
            data-aos="fade-up"
            data-aos-delay=""
            data-aos-duration="1000"
          >
            <p className="text-secondary-4 font-32 font-400 avenuex text-center">
              Here we have some block of text giving more information about the
              project Here we have some block of text giving more information
              about the project.
            </p>
          </Box>
          {sectionB
            ? templeImagesSectionB?.map((item, index) => (
                <TempleImageLayout key={index} index={index} src={item?.src} />
              ))
            : templeImages?.map((item, index) => (
                <TempleImageLayout key={index} index={index} src={item?.src} />
              ))}
        </Box>
      </Wrapper>
    </Box>
  );
};

export default TempleImageSection;
