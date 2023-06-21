import React, { useState, useEffect } from "react";

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
      <div className="fixed left-0 top-0 h-screen w-screen z-10 flex justify-center items-center">
        <div className="w-[300px] h-[300px] flex items-center bg-white">
          <p className="text-center w-[100%]">{label}</p>
        </div>
      </div>
    );
  }
  return null;
};

export default Toast;
