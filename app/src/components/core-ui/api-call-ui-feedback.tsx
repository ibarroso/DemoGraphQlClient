import { Backdrop, CircularProgress } from "@mui/material";
import React, { Ref, useImperativeHandle } from "react";
import ServerError from "types/iServerError";
import InternalServerErrorModal from "./internal-server-error-modal";

export interface ApiCallRefs {
  OpenBackdrop: () => void;
  CloseBackdrop: () => void;
  SetApiCallError: (error: ServerError) => void;
}

const ApiCallUiFeedback = React.forwardRef(ApiCallUiFeedbackWrapped);

export default ApiCallUiFeedback;

function ApiCallUiFeedbackWrapped(empty: {}, ref: Ref<ApiCallRefs>) {
  const [openBackdrop, setOpenBackdrop] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<ServerError>();

  const closingModalHandler = () => setOpenModal(false);

  function OpenBackdrop() {
    setOpenBackdrop(true);
  }

  function CloseBackdrop() {
    setOpenBackdrop(false);
  }

  function SetApiCallError(error: ServerError) {
    setErrorMessage(error);
    setOpenModal(true);
  }

  useImperativeHandle(ref, () => ({
    OpenBackdrop,
    CloseBackdrop,
    SetApiCallError,
  }));

  return (
    <>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          marginTop: "0px ! important;",
        }}
        aria-hidden={false}
        open={openBackdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <InternalServerErrorModal
        openStatus={openModal}
        handleClose={closingModalHandler}
        errorContent={errorMessage}
      />
    </>
  );
}
