import React from "react";

const DemoBanner = () => {
  const bg_color =
    "bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500";
  return (
    <div
      className={`w-full ${bg_color} h-14 flex space-x-4 justify-center items-center text-white px-6 mt-[85px] font-Poppins max-[1200px]:h-16`}
    >
      <div className="flex justify-center items-center text-center">
        <h1 className='max-[1200px]:text-[14px] max-md:text-[10px] '>
          Innovative 3D Solutions For Your Business
          <span className="px-3 max-sm:hidden">|</span>{" "}
          <span className="font-bold max-sm:hidden">
            Elevating Realities, Crafting Dreams
          </span>{" "}
          <span className="px-3 max-[1200px]:hidden">|</span>{" "}
          <span className="max-[1200px]:flex justify-center text-center">
            For Demo, Write to Us :
            <a href="#" className="underline ml-1">
              hello@mammoth.com
            </a>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default DemoBanner;
