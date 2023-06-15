import React, { useCallback, useMemo } from "react";
import styles from "./Button2.module.scss";

type ButtonProps = {
  action: () => void;
  label: string;
  color: "green" | "red" | "blue";
};

const Button2 = ({ action, label, color }: ButtonProps) => {
  const buttonColorStyle = useMemo(() => {
    switch (color) {
      case "green":
        return styles["btn__green"];
      case "red":
        return styles["btn__red"];
      case "blue":
        return styles["btn__blue"];
      default:
        return styles["btn__green"];
    }
  }, [color]);

  const handleClick = useCallback(() => {
    return action();
  }, [action]);
  return (
    <>
      <button
        onClick={handleClick}
        className={`${styles["btn"]} ${buttonColorStyle}`}
      >
        {label}
      </button>
    </>
  );
};

export default React.memo(Button2);
