import React from "react";

const NeedVideo = () => {
  return (
    <div className="my-20 flex justify-center items-center">
      <div className="w-[90vw] h-[50vh] sm:h-[70vh] rounded-3xl border-2 border-[#d37829] glow-effect relative overflow-hidden">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/videos/need-a-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex flex-col justify-center items-center z-20">
          <h1 className="font-bold text-center mb-10 font-montserrat text-6xl max-md:text-5xl max-sm:text-4xl -tracking-[0.03] leading-[0.9] text-white">
            NEED A DEMO?
          </h1>
          <button className="bg-[#d37829] text-white px-10 py-6 rounded-xl font-bold font-[Poppins] text-lg max-sm:text-sm hover:bg-transparent hover:text-[#d37829] hover:border-2 hover:border-[#d37829] hover:glow-effect transition-all ease-in">
            CONTACT US
          </button>
        </div>

        <div className="absolute bg-black opacity-60 w-full h-full top-0 left-0 z-10"></div>
      </div>
    </div>
  );
};

export default NeedVideo;

{
  /* <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/videos/HeroVideo.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col justify-center items-center asbsolute">
          <h1 className="font-bold text-center mb-10 font-montserrat text-6xl max-md:text-5xl max-sm:text-4xl -tracking-[0.03] leading-[0.9]">
            NEED A VIDEO?
          </h1>
          <button className="bg-[#d37829] text-white px-10 py-6 rounded-xl font-bold font-[Poppins] text-lg max-sm:text-sm hover:bg-transparent hover:text-[#d37829] hover:border-2 hover:border-[#d37829] hover:glow-effect transition-all ease-in">
            CONTACT US
          </button>
        </div> */
}
