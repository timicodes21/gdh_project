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
          sx={{
            position: "absolute",
            bottom: { xs: 50, md: 100, lg: 200 },
            left: { xs: 50, md: 100, lg: 200 },
          }}
          data-aos="fade-up"
          data-aos-delay=""
          data-aos-duration="2000"
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
          <span className="font-18 font-400 avenir text-white">
            THE GREAT DIVINE HOLY ORDER OF THE THIRD ERA
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default TempleImageLayout;
