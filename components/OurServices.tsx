import React from "react";
import BreakPointCard from "./BreakpointCard/BreakpointCard";

const OurServices = () => {
  return (
    <div className={`bg-gray-100`}>
      <div className="bp:flex bp:flex-col bp:justify-center bp:items-center">
        <div className="px-[28px] py-10 bp:px-[34px] max-w-[1600px] ">
          <h1 className="font-[Poppins] font-bold tracking-wide text-7xl mt-10 bp:text-center pb-10">
            OUR SERVICES
          </h1>
          <div className="mt-6">
            <BreakPointCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
