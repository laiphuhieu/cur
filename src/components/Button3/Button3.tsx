import React, { useCallback } from "react";

type ButtonProps3 = {
  action: () => void;
  label: string;
};

const Button3 = ({ action, label }: ButtonProps3) => {
  const handleClick = useCallback(() => {
    return action();
  }, [action]);

  return <button onClick={handleClick}>{label}</button>;
};

export default Button3;
