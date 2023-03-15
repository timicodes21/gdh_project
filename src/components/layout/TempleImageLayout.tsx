import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import classes from "../../styles/Home.module.css";

interface IProps {
  src: string;
  alt?: string;
  index: number;
}

const TempleImageLayout: React.FC<IProps> = ({ src, alt, index }) => {
  return (
    <Box sx={{ mt: 10 }}>
      <Box sx={{ position: "relative" }}>
        <Box
          className={classes.img_container}
          data-aos={index % 2 ? "fade-right" : "fade-left"}
          data-aos-duration="1000"
        >
          <Image alt={alt ?? ""} src={src} fill />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 50, md: 100, lg: 200 },
            left: { xs: 50, md: 100, lg: 200 },
          }}
          data-aos={index % 2 ? "fade-right" : "fade-left"}
          data-aos-duration="1000"
        >
          <Box
            sx={{ lineHeight: "70%", display: { xs: "none", md: "inline" } }}
          >
            <span className="font-60 font-400 montaga text-white">
              Name of this <br />
              part
            </span>
          </Box>
          <br />
          <Box sx={{ mt: 3 }}></Box>
          <span
            className="font-18 font-400 avenir text-white"
            data-aos={index % 2 ? "fade-left" : "fade-right"}
            data-aos-duration="1000"
          >
            THE GREAT DIVINE HOLY ORDER OF THE THIRD ERA
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default TempleImageLayout;
