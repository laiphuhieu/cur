import React, { useCallback } from "react";

import { countValue } from "@/recoil/atom/count";
import { useRecoilState } from "recoil";

const PlusButton = () => {
  const [count, setCount] = useRecoilState(countValue);

  const handlePlus = useCallback(() => {
    let countTmp = count;

    countTmp++;
    setCount(countTmp);
  }, [count, setCount]);

  return <button onClick={handlePlus}>+</button>;
};

export default PlusButton;
