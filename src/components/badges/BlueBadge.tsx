import { Box } from "@mui/material";
import React from "react";
import { MdFileCopy } from "react-icons/md";

interface IProps {
  onCopy: () => void;
}

const BlueBadge: React.FC<IProps> = ({ onCopy }) => {
  return (
    <Box
      sx={{ p: { xs: 2, md: 4 }, background: "#E4F0FF", borderRadius: "32px" }}
    >
      <Box>
        <span className="font-16 font-400 text-primary satoshi">
          Account name
        </span>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <span className="font-24 font-500 text-primary satoshi">
          Account number
        </span>
        <MdFileCopy
          className="text-primary font-24 pointer"
          style={{ marginLeft: "10px" }}
          onClick={onCopy}
        />
      </Box>
    </Box>
  );
};

export default BlueBadge;
