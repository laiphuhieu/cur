import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ margin: "30px" }}>
        <div>
          <button
            onClick={handleClickAdd}
            style={{
              padding: "36px",
              backgroundColor: "green",
              margin: "0 24px 50px 0",
            }}
          >
            Push to state array
          </button>
          <button
            onClick={handleClickRemove}
            style={{ padding: "36px", backgroundColor: "red" }}
          >
            Remove last item from array
          </button>
        </div>
        {instances.map((result: Item, id: number) => {
          return (
            <ul key={id}>
              <li>{result.name}</li>
            </ul>
          );
        })}
      </div>

      <div style={{ margin: "30px 30px 0 0" }}>
        {count}
        <div>
          <button onClick={handleIncrease} className="p-[16px] bg-green">
            Increase
          </button>
          <button
            onClick={handleDecrease}
            style={{
              fontSize: "60%",
              padding: "16px",
              marginLeft: "5px",
              backgroundColor: "red",
              borderRadius: "8%",
              color: "white",
            }}
          >
            Decrease
          </button>
          <button
            onClick={handleReset}
            style={{
              fontSize: "60%",
              padding: "16px",
              marginLeft: "5px",
              backgroundColor: "blue",
              borderRadius: "8%",
              color: "white",
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Instance;
