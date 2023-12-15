import React from "react";
import AccordionComponent from "./AccordionComponent";
import Image from "next/image";

const WhyUs = () => {
  return (
    <div className="flex justify-center items-center my-16">
      <div className="w-[90vw] max-w-[1600px] z-10 mb-10">
        <h2 className="font-[Poppins] font-bold tracking-wide text-7xl text-black bp:text-center mb-8">Why <span className="text-[#d37829]">Us?</span></h2>
        
        <div className="flex gap-10 rounded-[2rem] px-10 drop-shadow-2xl bg-gray-200 h-full">
          <div className="w-full lg:w-[400px]  p-10 z-10">
            <AccordionComponent />
          </div>
          <div className="h-full hidden z-10 lg:flex flex-1 justify-center items-center overflow-hidden">
            <Image
              src="/images/whyus.png"
              width={450} 
              height={450}
              alt="Logo"
              className="object-cover"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

