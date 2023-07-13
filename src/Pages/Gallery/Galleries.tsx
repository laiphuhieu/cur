import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import useGetAccessToken from "@/custom-hooks/useGetAccessToken";
import worldServices from "@/services/worldServices";
import galleriesServices from "@/services/galleriesServices";
import Spinner from "@/components/Spinner/Spinner";
import { Gallery } from "@/types/gallery";
import { Worlds } from "@/types/worlds";

const Galleries = () => {
  const token = useGetAccessToken();
  const [galleries, setGalleries] = useState<Gallery[] | any>([]);
  const [worlds, setWorlds] = useState<Worlds[] | any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllGalleries = useCallback(async () => {
    try {
      setIsLoading(true);
      const instanceData = await galleriesServices.getAllGalleries(token);
      setGalleries(instanceData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  const getAllWorld = useCallback(async () => {
    try {
      setIsLoading(true);
      const worldData = await worldServices.getAllWorld(token);
      setWorlds(worldData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  useEffect(() => {
    getAllWorld();
    getAllGalleries();
  }, [getAllGalleries, getAllWorld]);

  function handleRemove(id: number | string) {
    setGalleries(galleries?.filter((gallery: Gallery) => gallery.id !== id));
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <div className=" px-[15px] md:px-[50px]">
        <div className="max-w-[1340px] w-full mx-auto md:pl-[24px]">
          <h1 className="text-[20px] leading-[22px] font-[400] xl:font-[700]">
            GALLERIES
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
            <div className="py-[14px] px-[10px] md:py-[29px]">
              <table>
                <thead>
                  <tr className="border-b-[3px] border-b-[black] border-solid ">
                    <th className="text-left w-[8%]">ID</th>
                    <th className="text-left w-[20%]">TITLE</th>
                    <th className="text-left w-[20%]">MEDIA GALLERY TYPE</th>
                    <th className="w-[10%]">LINKS</th>
                    <th className="text-left w-[18%]">WORLD NAME</th>
                    <th className="w-[10%]">LOGO</th>
                    <th className=" w-[7%]">EDIT</th>
                    <th className=" w-[7%]">DELETE</th>
                  </tr>
                </thead>

                <tbody>
                  {galleries?.map((gallery: Gallery, id: number) => {
                    return (
                      <tr
                        key={id}
                        className="border-b-[1px] border-b-[black] border-solid"
                      >
                        <td>{gallery.id}</td>
                        <td>
                          <p className="max-w-[231px] pr-[49px]">
                            {gallery.title}
                          </p>
                        </td>
                        <td>
                          <p>{gallery.addressable.slice(21)}</p>
                        </td>
                        <td className="text-center">{gallery.world}</td>

                        <td className="max-w-[226px]">
                          <p>
                            <Link
                              to={`/gallery/edit/${gallery.id}`}
                              className="underline underline-offset-2 transition-all hover:text-soft-blue"
                            >
                              {worlds.find(
                                (world: Worlds) => world.id === gallery.world
                              )?.name || ""}
                            </Link>
                          </p>
                        </td>
                        <td className="flex justify-center">
                          <div className="w-[50px] h-[50px]">
                            <img
                              src="https://curiiouseventscontprod.blob.core.windows.net/imagery/amgs/1/2gA1l8Ub1klTyG1sXvpQ.jpeg?sv=2022-11-02&se=2023-07-07T06%3A51%3A14Z&sr=b&sp=r&sig=wpQhojNe9Xda3WBiKk%2Fx7g4z88Kgh9xuUUaQVIsfFoc%3D"
                              alt="Logo"
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </td>
                        <td className="align-middle">
                          <div className="flex justify-center align-middle cursor-pointer">
                            <Link to={`/gallery/edit/${gallery.id}`}>
                              <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M9.28937 12.3563L20.3137 1.35031C22.119 -0.450102 25.0449 -0.450102 26.8502 1.35031L28.6459 3.14301C30.4514 4.94553 30.4514 7.86899 28.6459 9.66957L17.5689 20.7282C16.7609 21.5349 15.6651 21.9883 14.5223 21.9883H8.9963C8.3745 21.9883 7.87482 21.4769 7.89028 20.8563L8.02895 15.2891C8.05676 14.1866 8.50783 13.1365 9.28937 12.3563ZM27.0813 4.70505L25.2865 2.91318C24.3451 1.97435 22.8189 1.97435 21.8779 2.91276L20.971 3.8182L26.1744 9.01295L27.0817 8.10709C28.0226 7.16885 28.0226 5.64473 27.0813 4.70505ZM24.6097 10.575L19.4063 5.38024L10.8541 13.9183C10.4739 14.2978 10.2546 14.8085 10.241 15.3444L10.1296 19.7779L14.5223 19.7792C15.0086 19.7792 15.4775 19.6104 15.8506 19.3052L16.0043 19.1661L24.6097 10.575ZM14.0022 0.0569408C14.6132 0.0569408 15.1086 0.551457 15.1086 1.16147C15.1086 1.72066 14.6924 2.18279 14.1523 2.25592L14.0022 2.26601H8.48659C4.7669 2.26601 2.35756 4.72943 2.21905 8.55496L2.21274 8.90646V21.1506C2.21274 25.0629 4.50492 27.6363 8.15139 27.7843L8.48659 27.791H21.5034C25.2323 27.791 27.6344 25.3329 27.7724 21.5025L27.7787 21.1506V15.2185C27.7787 14.6085 28.2741 14.114 28.8851 14.114C29.4452 14.114 29.9081 14.5295 29.9814 15.0686L29.9915 15.2185V21.1506C29.9915 26.2492 26.7564 29.8342 21.8485 29.9945L21.5034 30.0001H8.48659C3.50296 30.0001 0.154842 26.5308 0.00522889 21.5038L0 21.1506V8.90646C0 3.81278 3.24338 0.22309 8.14215 0.062553L8.48659 0.0569408H14.0022Z"
                                  fill="black"
                                ></path>
                              </svg>
                            </Link>
                          </div>
                        </td>
                        <td className="align-middle">
                          <div
                            className="flex justify-center cursor-pointer"
                            onClick={() => handleRemove(gallery.id)}
                          >
                            <svg
                              width="29"
                              height="30"
                              viewBox="0 0 29 30"
                              fill="none"
                              className="stroke"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.4"
                                d="M24.9872 11.2017C24.9872 11.2017 24.1727 21.3042 23.7002 25.5597C23.4752 27.5922 22.2197 28.7832 20.1632 28.8207C16.2497 28.8912 12.3317 28.8957 8.41974 28.8132C6.44124 28.7727 5.20674 27.5667 4.98624 25.5702C4.51074 21.2772 3.70074 11.2017 3.70074 11.2017"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                opacity="0.4"
                                d="M24.9872 11.2017C24.9872 11.2017 24.1727 21.3042 23.7002 25.5597C23.4752 27.5922 22.2197 28.7832 20.1632 28.8207C16.2497 28.8912 12.3317 28.8957 8.41974 28.8132C6.44124 28.7727 5.20674 27.5667 4.98624 25.5702C4.51074 21.2772 3.70074 11.2017 3.70074 11.2017"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                opacity="0.4"
                                d="M24.9872 11.2017C24.9872 11.2017 24.1727 21.3042 23.7002 25.5597C23.4752 27.5922 22.2197 28.7832 20.1632 28.8207C16.2497 28.8912 12.3317 28.8957 8.41974 28.8132C6.44124 28.7727 5.20674 27.5667 4.98624 25.5702C4.51074 21.2772 3.70074 11.2017 3.70074 11.2017"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                opacity="0.4"
                                d="M24.9872 11.2017C24.9872 11.2017 24.1727 21.3042 23.7002 25.5597C23.4752 27.5922 22.2197 28.7832 20.1632 28.8207C16.2497 28.8912 12.3317 28.8957 8.41974 28.8132C6.44124 28.7727 5.20674 27.5667 4.98624 25.5702C4.51074 21.2772 3.70074 11.2017 3.70074 11.2017"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                opacity="0.4"
                                d="M24.9872 11.2017C24.9872 11.2017 24.1727 21.3042 23.7002 25.5597C23.4752 27.5922 22.2197 28.7832 20.1632 28.8207C16.2497 28.8912 12.3317 28.8957 8.41974 28.8132C6.44124 28.7727 5.20674 27.5667 4.98624 25.5702C4.51074 21.2772 3.70074 11.2017 3.70074 11.2017"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                opacity="0.4"
                                d="M24.9872 11.2017C24.9872 11.2017 24.1727 21.3042 23.7002 25.5597C23.4752 27.5922 22.2197 28.7832 20.1632 28.8207C16.2497 28.8912 12.3317 28.8957 8.41974 28.8132C6.44124 28.7727 5.20674 27.5667 4.98624 25.5702C4.51074 21.2772 3.70074 11.2017 3.70074 11.2017"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M27.0622 6.35889H1.62518"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M22.1608 6.35923C20.9833 6.35923 19.9693 5.52673 19.7383 4.37323L19.3738 2.54923C19.1488 1.70773 18.3868 1.12573 17.5183 1.12573H11.1688C10.3003 1.12573 9.53834 1.70773 9.31334 2.54923L8.94884 4.37323C8.71784 5.52673 7.70384 6.35923 6.52634 6.35923"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
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
  );
};
export default Galleries;
