import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IoMdCloseCircle } from "react-icons/io";
import { SxProps } from "@mui/material";
import { ReactNode } from "react";

const style: SxProps = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 400, md: 500, lg: 800 },
  bgcolor: "background.paper",
  border: "2px solid #FFF",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};

interface IProps {
  open: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const CustomModal: React.FC<IProps> = ({ open, closeModal, children }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ overflow: "scroll" }}
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IoMdCloseCircle
              onClick={closeModal}
              className="pointer font-24 text-secondary-2"
            />
          </Box>
          {children}
        </Box>
      </Modal>
    </div>
  );
};

export default CustomModal;
