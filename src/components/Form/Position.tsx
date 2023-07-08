import React from "react";

import styles from "./Position.module.scss";

interface positionProps {
  label: string;
  type: string;

  children?: React.ReactNode;
}

const Position = ({ label, type }: positionProps) => {
  return (
    <div className="lg:inline-block relative w-full">
      <div className="mb-[20px] flex">
        <label className="mt-[8px] mr-[16px] w-[177px] text-right">
          {label}
        </label>
        <div className="flex">
          <p className={`${styles["position-title"]}`}>X</p>
          <input type={type} className={`${styles["position-input"]}`} />
        </div>
      </div>
    </div>
  );
};

export default Position;
