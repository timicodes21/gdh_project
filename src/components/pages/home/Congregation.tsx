import Wrapper from "@/components/layout/Wrapper";
import { congregation } from "@/data/temple";
import { Box } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import ReactPlayer from "react-player/youtube";

const Congregation = () => {
  return (
    <Box sx={{ py: 5 }}>
      <div id="congregation">
        <Wrapper>
          <p
            className="text-secondary-3 font-52 font-400 montaga text-center"
            data-aos="fade-right"
            data-aos-delay=""
            data-aos-duration="1000"
          >
            What the congregation is saying
          </p>

          <Box sx={{ mt: 5 }}>
            <Carousel animation="slide">
              {congregation?.map((item, index) => (
                <Box key={index}>
                  <ReactPlayer url={item?.url} width="100%" />
                  <Box>
                    <span className="font-32 font-400 avenuex">
                      {item?.name}
                    </span>{" "}
                    <br />
                    <span className="font-32 font-400 avenuex">
                      {item?.occupation}
                    </span>
                  </Box>
                </Box>
              ))}
            </Carousel>
          </Box>
        </Wrapper>
      </div>
    </Box>
  );
};

export default Congregation;
