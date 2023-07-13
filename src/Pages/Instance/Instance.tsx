import React, { useCallback, useEffect, useState } from "react";

// import Button2 from "@/components/Button2/Button2";
import instanceServices from "@/services/InstancesServices";
import useGetAccessToken from "@/custom-hooks/useGetAccessToken";
import worldServices from "@/services/worldServices";

// interface Item {
//   name: string;
//   url: string;
// }

interface Instance {
  name: string;
  id: number;
}

// const temp = {
//   name: "temp name",
//   url: "temp url",
// };

const Instance = () => {
  // const [instances, setInstances] = useState<Item[]>([]);
  // const [instances2, setInstances2] = useState([]);
  // const [count, setCount] = useState(0);
  const token = useGetAccessToken();
  const [instances, setInstances] = useState<any>([]);
  // const [data, setData] = useState([]);

  // const getItem = useCallback(() => {
  //   axios.get("https://pokeapi.co/api/v2/item/").then((response) => {
  //     setInstances(response.data.results);
  //   });
  // }, []);

  // useEffect(() => {
  //   getItem();
  // }, [getItem]);

  // const getInstance = useCallback(() => {
  //   axios
  //     .get("https://stagingapi.curiious.com/v1/Instances", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //     });
  // }, []);

  // useEffect(() => {
  //   getInstance();
  // }, [getInstance]);

  const getAllInstance = useCallback(async () => {
    try {
      const instanceData = await instanceServices.getAllInstances(token);
      setInstances(instanceData);

      console.log(instanceData);
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  const getAllWorld = useCallback(async () => {
    try {
      const worldData = await worldServices.getAllWorld(token);
      console.log("worldData:", worldData);
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  useEffect(() => {
    getAllWorld();
    getAllInstance();
  }, [getAllInstance, getAllWorld]);

  // const handleClickAdd = useCallback(() => {
  //   setInstances((prev) => [...prev, temp]);
  // }, []);

  // const handleClickRemove = useCallback(() => {
  //   setInstances((prev) => prev.slice(0, prev.length - 1));
  // }, []);

  // const handleIncrease = useCallback(() => {
  //   setCount((count) => count + 1);
  // }, []);

  // const handleDecrease = useCallback(() => {
  //   setCount((count) => Math.max(count - 1, -5));
  // }, []);

  // const handleReset = useCallback(() => {
  //   setCount(0);
  // }, []);

  return (
    <div>
      <div className=" px-[15px] md:px-[50px]">
        <div className="max-w-[1340px] w-full mx-auto md:pl-[24px]">
          <h1 className="text-[20px] leading-[22px] font-[400] xl:font-[700]">
            INSTANCES
          </h1>
          <div>
            <p className="lg:w-[526px] text-[16px] leading-[21px] mb-[15px] xl:mb-0">
              Select and edit instances to customise the immersive experience
              across all worlds.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col !px-0 md:!px-[50px] px-[15px] md:px-[50px]">
        <div className="max-w-[1340px] w-full mx-auto flex-1 bg-gray">
          <div className="md:pl-[22px] md:pr-[39px]">
            <div className="md:overflow-auto py-[14px] px-[10px] md:py-[29px]">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>DESCRIPTION</th>
                    <th>COLOURS</th>
                    <th>LOGO</th>
                    <th>LAUNCH</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                  </tr>
                </thead>

                <tbody>
                  {instances.map((instance: any, id: number) => {
                    return (
                      <tr key={id}>
                        <td>{instance.id}</td>
                        <td>
                          <p className="max-w-[156px]">{instance.name}</p>
                        </td>
                        <td>
                          <p className="max-w-[370px]">
                            {instance.description}
                          </p>
                        </td>
                        <td>
                          <div className="flex">
                            <div className="relative">
                              <div className="p-[1px] w-[30px] h-[30px] rounded-[7px] bg-[#fff]">
                                <div
                                  className={`w-full h-full rounded-[7px] bg-[${instance.primaryColor}]`}
                                ></div>
                              </div>
                            </div>
                            <div className="relative">
                              <div className="p-[1px] w-[30px] h-[30px] rounded-[7px] bg-[#fff]">
                                <div
                                  className={`w-full h-full rounded-[7px] bg-[${instance.secondaryColor}]`}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="w-[50px] h-[50px]">
                            <img
                              src={instance.logoUrl}
                              alt="Logo"
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="flex justify-between">
    //   <div>
    //     <div className="flex mb-[30px]">
    //       <Button2
    //         action={() => handleClickAdd()}
    //         label="Push to state array"
    //         color="green"
    //       />
    //       <Button2
    //         action={() => handleClickRemove()}
    //         label="Remove last item from array"
    //         color="red"
    //       />
    //     </div>
    //     {instances.map((result: Item, id: number) => {
    //       return (
    //         <ul key={id}>
    //           <li>{result.name}</li>
    //         </ul>
    //       );
    //     })}
    //   </div>

    //   {instances2}

    //   <div>
    //     {count}
    //     <div>
    //       <Button2
    //         action={() => handleIncrease()}
    //         label="Increase"
    //         color="green"
    //       />
    //       <Button2
    //         action={() => handleDecrease()}
    //         label="Decrease"
    //         color="red"
    //       />
    //       <Button2 action={() => handleReset()} label="Reset" color="blue" />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Instance;
