import * as React from "react";
import Box from "@mui/material/Box";
import { IoMdCloseCircle } from "react-icons/io";
import { Dialog, SxProps, Modal } from "@mui/material";
import { ReactNode } from "react";

const style: SxProps = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #FFF",
  boxShadow: 24,
  p: 4,
  minWidth: { xs: 320, md: 600, lg: 900 },
  maxWidth: 992,
};

interface IProps {
  open: boolean;
  closeModal: () => void;
  children: ReactNode;
  noMaxWidth?: boolean;
  hideCloseIcon?: boolean;
}

const VideoModal: React.FC<IProps> = ({
  open,
  closeModal,
  children,
  hideCloseIcon,
}) => {
  return (
    <Modal open={open} onClose={closeModal}>
      <Box sx={style}>
        {!hideCloseIcon && (
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IoMdCloseCircle
              onClick={closeModal}
              className="pointer font-24 text-secondary-2"
            />
          </Box>
        )}
        {children}
      </Box>
    </Modal>
  );
};

export default VideoModal;
