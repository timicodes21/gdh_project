import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import classes from "../../styles/Home.module.css";

interface IProps {
  src: string;
  alt?: string;
}

const TempleImageLayout: React.FC<IProps> = ({ src, alt }) => {
  return (
    <Box sx={{ mt: 10 }}>
      <Box sx={{ position: "relative" }}>
        <Box className={classes.img_container}>
          <Image alt={alt ?? ""} src={src} fill />
        </Box>
        <Box
          sx={{ position: "absolute", bottom: 200, left: 200 }}
          data-aos="fade-up"
          data-aos-delay=""
          data-aos-duration="2000"
        >
          <span
            className="font-64 font-400 montaga text-white"
            style={{ lineHeight: "70%" }}
          >
            Name of this <br />
            part
          </span>
          <br />
          <Box sx={{ mt: 3 }}></Box>
          <span className="font-18 font-400 avenir text-white">
            THE GREAT DIVINE HOLY ORDER OF THE THIR ERA
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default TempleImageLayout;
