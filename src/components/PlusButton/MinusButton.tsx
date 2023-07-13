import React, { useCallback } from "react";
import { countValue } from "@/recoil/atom/count";
import { useRecoilState } from "recoil";

const MinusButton = () => {
  const [count, setCount] = useRecoilState(countValue);

  const handleMinus = useCallback(() => {
    let countTmp = count;

    countTmp--;
    setCount(countTmp);
  }, [setCount, count]);
  return <button onClick={handleMinus}>-</button>;
};

export default MinusButton;
