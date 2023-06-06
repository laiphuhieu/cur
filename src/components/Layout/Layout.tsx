import React, { ReactNode } from "react";

type LayoutPropsType = {
  children: ReactNode;
  wrapperClassName?: string;
  isFullScreen?: boolean;
};

const Layout = ({
  children,
  wrapperClassName,
  isFullScreen,
}: LayoutPropsType) => {
  return (
    <div className={`${isFullScreen ? "min-h-[100vh] flex flex-col" : ""}`}>
      <div
        className={`${wrapperClassName} ${
          isFullScreen ? "flex-1 flex flex-col" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
