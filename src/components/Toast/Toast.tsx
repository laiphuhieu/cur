import React, { useState, useEffect } from "react";
import styles from "./Toast.module.scss";

type ToastProps = {
  label: string;
  isShow: boolean;
  onClose: () => void;
};

const Toast = ({ label, isShow, onClose }: ToastProps) => {
  const [isToastShowing, setToastShowing] = useState(false);

  useEffect(() => {
    if (isShow) {
      setToastShowing(true);

      const timeToastShow = setTimeout(() => {
        setToastShowing(false);
        onClose();
      }, 3000);
      return () => clearTimeout(timeToastShow);
    }
  }, [isShow, onClose]);

  if (isToastShowing) {
    return (
      <div className={`${styles["overlay"]}`}>
        <div className={`${styles["toast-wrapper"]}`}>
          <p className={`${styles["toast-title"]}`}>{label}</p>
        </div>
      </div>
    );
  }
  return null;
};

export default Toast;
