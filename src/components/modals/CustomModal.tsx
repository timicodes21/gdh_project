import * as React from "react";
import Box from "@mui/material/Box";
import { IoMdCloseCircle } from "react-icons/io";
import { Dialog, SxProps } from "@mui/material";
import { ReactNode } from "react";

const style: SxProps = {
  bgcolor: "background.paper",
  border: "2px solid #FFF",
  boxShadow: 24,
  p: 4,
};

interface IProps {
  open: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const CustomModal: React.FC<IProps> = ({ open, closeModal, children }) => {
  return (
    <Dialog open={open} onClose={closeModal} maxWidth="lg">
      <Box sx={style}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IoMdCloseCircle
            onClick={closeModal}
            className="pointer font-24 text-secondary-2"
          />
        </Box>
        {children}
      </Box>
    </Dialog>
  );
};

export default CustomModal;
