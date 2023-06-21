import React, {
  useCallback,
  useEffect,
  useState,
  ChangeEvent,
  useRef,
} from "react";
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
  const tempCheckedItems = useRef<any>([]);
  const [instances, setInstances] = useState<Item[]>([]);
  const [instancesFilter, setInstancesFilter] = useState<Item[]>([]);
  const [count, setCount] = useState(0);
  const [checkedItems, setCheckedItems] = useState([]);

  const getItem = useCallback(() => {
    axios.get("https://pokeapi.co/api/v2/item/").then((response) => {
      setInstances(response.data.results);
      setInstancesFilter(response.data.results);
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

  const handleClickDel = useCallback(() => {
    console.log(123);
  }, []);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const itemChecked = e.target.value;

      tempCheckedItems.current.push(itemChecked);

      if (tempCheckedItems.current.length) {
        const foundItem = tempCheckedItems.current.find((element: any) => {
          if (element === itemChecked) {
            return true;
          }

          return false;
        });

        console.log("foundItem:", foundItem);
      }

      setCheckedItems(tempCheckedItems.current);
    },
    [checkedItems]
  );

  console.log("bb:", checkedItems);

  const handleClickPush = useCallback(() => {
    console.log(456);
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
        {instancesFilter &&
          instancesFilter.map((result: Item, index: number) => {
            return (
              <ul key={index} className="flex mt-[20px]">
                <li>{result.name}</li>
                <input
                  onChange={handleChange}
                  value={index}
                  type="checkbox"
                  className="ml-[10px]"
                />
              </ul>
            );
          })}
        <Button2
          action={() => handleClickDel()}
          label="Remove items are checked"
          color="red"
        />
        <Button2
          action={() => handleClickPush()}
          label="Revert item"
          color="green"
        />
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
