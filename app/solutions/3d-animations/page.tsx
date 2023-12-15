import React from "react";

const page = () => {
  return (
    <div className="w-full flex justify-center items-center ms:p-5">
      <div className="w-full h-[75vh] ms:rounded-3xl relative overflow-hidden">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/videos/3d-animation.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex flex-col justify-end items-start z-20">
          <h1 className="font-bold text-left text-transparent mb-10 font-[Poppins] text-5xl max-md:text-4xl max-sm:text-3xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text leading-[1.2] p-10">
            3D Product <br /> Modelling and <br /> Animations.
          </h1>
        </div>

        <div className="absolute bg-black opacity-60 w-full h-full top-0 left-0 z-10"></div>
      </div>
    </div>
  );
};

export default page;

{
  /* <div className="relative object-cover">
        <video autoPlay loop muted>
          <source src="/videos/industries/GemsJewellery.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex justify-start items-end z-20">
          <h1 className="text-transparent text-5xl font-[Afacad] font-extrabold w-1/3 bg-gradient-to-r from-purple-400 to-white bg-clip-text leading-[0.9] p-14">
          3D Product <br /> Modelling and <br /> Animations.
          </h1>
        </div>

        <div
          className={`absolute bg-black opacity-60 w-full h-full top-0 left-0 z-10`}
        ></div>
      </div> */
}
