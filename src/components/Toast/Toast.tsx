import React from "react";
import styles from "./Toast.module.scss";
import Button3 from "../Button3/Button3";

import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  const showToastMessage = () => {
    toast("Success !", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
      hideProgressBar: true,
      icon: false,
      transition: Zoom,
      closeButton: false,
      pauseOnHover: false,
      closeOnClick: false,
    });
  };
  return (
    <div>
      <Button3 action={showToastMessage}>Trigger</Button3>
      <ToastContainer
        className={`${styles["toast-message"]}`}
        autoClose={2000}
      />
    </div>
  );
};

export default Toast;
