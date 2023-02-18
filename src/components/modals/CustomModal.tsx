import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
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
    // <Modal
    //   open={open}
    //   onClose={closeModal}
    //   aria-labelledby="modal-modal-title"
    //   aria-describedby="modal-modal-description"
    //   style={{ overflow: "scroll" }}
    // >
    <Dialog open={open} onClose={closeModal} scroll="body">
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
    // </Modal>
  );
};

export default CustomModal;
