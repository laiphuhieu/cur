import React from "react";

import Button from "../Button";

import { URLS } from "@/utils/constants";

const DashboardTable = () => {
  const dashboardContent = [
    {
      btnLabel: "instances",
      linkTo: URLS.INSTANCE,
      info: "Manage universal changes to the naming and branding to your instances.",
    },
    {
      btnLabel: "worlds",
      linkTo: URLS.WORLD,
      info: "Change settings, welcome text, introductory video and music settings.",
    },
    {
      btnLabel: "GALLERIES",
      linkTo: URLS.GALLERY,
      info: "Add links to documents, videos and imagery to create multimedia resource galleries on any topic.",
    },
    {
      btnLabel: "MESSAGE BALLS",
      linkTo: URLS.MESSAGE,
      info: "Post questions and thought starters to all users via interactive message balls set throughout the immersive environment.",
    },
    {
      btnLabel: "USERS",
      linkTo: URLS.USER,
      info: "Manage users, reset passwords and select the enrolments and permissions assigned to each user.",
    },
    {
      btnLabel: "sessions",
      linkTo: URLS.SESSIONS,
      info: "Add scheduled events and modify the details of any session, bulk enroll users to sessions.",
    },
  ];
  return (
    <div className="lg:w-[900px] w-full mx-auto bg-gray pt-[32px] pb-[34px] lg:py-[50px] px-[10px] lg:pl-[90px] lg:pr-[55px]">
      {dashboardContent.map((item, idx) => (
        <div
          key={idx}
          className={`lg:flex justify-between ${
            idx + 1 !== dashboardContent.length ? "pb-[30px] lg:pb-[20px]" : ""
          }`}
        >
          <div className="w-full flex mb-[20px] lg:mb-[0] justify-center lg:block lg:w-[auto]">
            <Button
              size="large"
              type="link"
              color="black"
              href={item.linkTo}
              label={item.btnLabel}
            />
          </div>
          <p
            className={`text-[16px] text-left sm:text-center lg:text-left leading-[24px] w-full lg:w-[450px] ${
              idx + 1 !== dashboardContent.length ? "lg:min-h-[80px]" : ""
            }`}
          >
            {item.info}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DashboardTable;
