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
  const [instance, setInstance] = useState<Item[]>([]);

  const getItem = useCallback(() => {
    axios.get("https://pokeapi.co/api/v2/item/").then((response) => {
      setInstance(response.data.results);
    });
  }, []);

  useEffect(() => {
    getItem();
  }, [getItem]);

  return (
    <div>
      {instance.map((result: Item, id: number) => {
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
