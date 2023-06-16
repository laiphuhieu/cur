import React, { useCallback } from "react";
import styles from "./Button3.module.scss";

type ChildrenProps = {
  children?: React.ReactNode;
  action: () => void;
};

const Button3 = ({ children, action }: ChildrenProps) => {
  const handleClick = useCallback(() => {
    return action();
  }, [action]);

  return (
    <button className={styles.button} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button3;
