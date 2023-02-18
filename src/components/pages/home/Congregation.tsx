import Wrapper from "@/components/layout/Wrapper";
import { Box } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import ReactPlayer from "react-player/youtube";

const Congregation = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Wrapper>
        <p className="text-secondary-3 font-52 font-400 montaga text-center">
          What the congregation is saying
        </p>

        <Box sx={{ mt: 5 }}>
          <Carousel>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=iLpxzQ_FriQ&ab_channel=UniversityofMinnesota"
              width="100%"
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=iLpxzQ_FriQ&ab_channel=UniversityofMinnesota"
              width="100%"
            />{" "}
            <ReactPlayer
              url="https://www.youtube.com/watch?v=iLpxzQ_FriQ&ab_channel=UniversityofMinnesota"
              width="100%"
            />{" "}
            <ReactPlayer
              url="https://www.youtube.com/watch?v=iLpxzQ_FriQ&ab_channel=UniversityofMinnesota"
              width="100%"
            />
          </Carousel>
          <span className="font-32 font-400 avenuex">Mr.Ajuwon</span> <br />
          <span className="font-32 font-400 avenuex">Occupation</span>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default Congregation;
