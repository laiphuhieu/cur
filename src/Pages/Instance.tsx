import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

import Button2 from "@/components/Button2/Button2";

interface Item {
  name: string;
  url: string;
}

const temp = {
  name: "temp name",
  url: "temp url",
};

const Instance = () => {
  const [instances, setInstances] = useState<Item[]>([]);
  const [count, setCount] = useState(0);

  const getItem = useCallback(() => {
    axios.get("https://pokeapi.co/api/v2/item/").then((response) => {
      setInstances(response.data.results);
    });
  }, []);

  useEffect(() => {
    getItem();
  }, [getItem]);

  const handleClickAdd = useCallback(() => {
    setInstances((prev) => [...prev, temp]);
  }, []);

  const handleClickRemove = useCallback(() => {
    setInstances((prev) => prev.slice(0, prev.length - 1));
  }, []);

  const handleIncrease = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const handleDecrease = useCallback(() => {
    setCount((count) => Math.max(count - 1, -5));
  }, []);

  const handleReset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div className="flex justify-between">
      <div>
        <div className="flex mb-[30px]">
          <Button2
            action={() => handleClickAdd()}
            label="Push to state array"
            color="green"
          />
          <Button2
            action={() => handleClickRemove()}
            label="Remove last item from array"
            color="red"
          />
        </div>
        {instances.map((result: Item, id: number) => {
          return (
            <ul key={id}>
              <li>{result.name}</li>
            </ul>
          );
        })}
      </div>

      <div>
        {count}
        <div>
          <Button2
            action={() => handleIncrease()}
            label="Increase"
            color="green"
          />
          <Button2
            action={() => handleDecrease()}
            label="Decrease"
            color="red"
          />
          <Button2 action={() => handleReset()} label="Reset" color="blue" />
        </div>
      </div>
    </div>
  );
};

export default Instance;
