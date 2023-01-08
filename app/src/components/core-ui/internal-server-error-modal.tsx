import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ServerError from "types/iServerError";

interface Props {
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
  openStatus: boolean;
  errorContent?: ServerError;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function InternalServerErrorModal({
  openStatus,
  handleClose,
  errorContent,
}: Props) {
  return (
    <Modal
      open={openStatus}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {errorContent?.exceptionMessage && (
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {errorContent.exceptionMessage}
          </Typography>
        )}
        {errorContent?.innerExceptionMessage && (
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {errorContent.innerExceptionMessage}
          </Typography>
        )}
        {errorContent?.stackTrace && (
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {errorContent.stackTrace}
          </Typography>
        )}
      </Box>
    </Modal>
  );
}
