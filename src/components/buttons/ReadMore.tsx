import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import {
  AiFillPauseCircle,
  AiFillPlayCircle,
  AiOutlinePause,
} from "react-icons/ai";

interface IProps {
  onClick: () => void;
  onPlay?: () => void;
  onPause?: () => void;
  isPlaying?: boolean;
}

const ReadMore: React.FC<IProps> = ({
  onClick,
  onPlay,
  isPlaying,
  onPause,
}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
        className="pointer"
      >
        {isPlaying ? (
          <AiFillPauseCircle
            onClick={onPause}
            style={{ color: "#667085", fontSize: "32px" }}
          />
        ) : (
          <AiFillPlayCircle
            onClick={onPlay}
            style={{ color: "#667085", fontSize: "32px" }}
          />
        )}
        {/* <Image
          src="/assets/icons/play_icon.svg"
          alt="play icon"
          width={23}
          height={23}
          onClick={onPlay}
        /> */}
        <p
          className="text-secondary-4 font-20 font-400 avenuex pointer"
          style={{ margin: "0 10px" }}
          onClick={onClick}
        >
          Read more
        </p>
        <FaLongArrowAltRight className="text-secondary-4 font-20 font-400" />
      </Box>
    </>
  );
};

export default ReadMore;
