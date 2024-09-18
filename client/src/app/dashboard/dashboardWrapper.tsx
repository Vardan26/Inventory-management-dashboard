import React from "react";
import Navbar from "../(components)/navbar";

type Props = {
  children: React.ReactNode;
};

const DashboardWrapper = ({ children }: Props) => {
  return (
    <div className={"light flex bg-gray-50 text-gray-900 w-full min-h-screen"}>
      sidebar
      <main
        className={"light flex-col w-full h-full py-7 px-9 bg-gray-50 md:pl-24"}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
