import React from "react";
import { useRecoilState } from "recoil";

import PlusButton from "@/components/PlusButton/PlusButton";
import MinusButton from "@/components/PlusButton/MinusButton";
import { countValue } from "@/recoil/atom/count";

const Recoil = () => {
  const [count] = useRecoilState(countValue);

  return (
    <div>
      <h1>this is recoil page</h1>
      <h2>Count value: {count}</h2>
      <PlusButton />
      <MinusButton />
    </div>
  );
};

export default Recoil;
