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

  return (
    <div>
      <button
        onClick={handleClickAdd}
        style={{ margin: "24px", padding: "36px", background: "#fff" }}
      >
        Push to state array
      </button>
      <button
        onClick={handleClickRemove}
        style={{ margin: "24px", padding: "36px", background: "#fff" }}
      >
        Remove last item from array
      </button>
      <div>
        {instances.map((result: Item, id: number) => {
          console.log(result.name);
          return (
            <ul key={id}>
              <li>{result.name}</li>
            </ul>
          );
        })}
      </div>
      {instances.map((result: Item, id: number) => {
        return (
          <ul key={id}>
            <li>{result.name}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Instance;
