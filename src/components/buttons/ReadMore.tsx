import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

interface IProps {
  onClick: () => void;
}

const ReadMore: React.FC<IProps> = ({ onClick }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
        className="pointer"
        onClick={onClick}
      >
        <Image
          src="/assets/icons/play_icon.svg"
          alt="question_mark"
          width={23}
          height={23}
        />
        <p
          className="text-secondary-4 font-20 font-400 avenuex"
          style={{ margin: "0 10px" }}
        >
          Read more
        </p>
        <FaLongArrowAltRight className="text-secondary-4 font-20 font-400" />
      </Box>
    </>
  );
};

export default ReadMore;
