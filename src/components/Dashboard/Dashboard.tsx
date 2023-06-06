import React from 'react';

import DashboardTable from './DashboardTable';

const Dashboard = () => {
  return (
    <div className="pt-[51px] lg:pt-[91px] pb-[5px] lg:pb-[31px]">
      <div className="text-center mb-[38px] lg:mb-[24px]">
        <h1 className="px-[24px] font-[300] lg:font-[400]">
          Welcome to the <br className="block md:hidden" /> Curiious Client Portal
        </h1>
        <h2 className="px-[28px] md:w-full lg:w-[653px] mx-auto pt-[15px]">
          Update your virtual environment by editing information in each of the sections below.
        </h2>
      </div>
      <div className="mx-[5px] lg:mx-0">
        <DashboardTable />
      </div>
    </div>
  );
};

export default Dashboard;
