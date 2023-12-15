import React from "react";

const HeroVideo = () => {
  return (
    <div className="w-full h-[80vh]">
      <div className="w-full h-full relative overflow-hidden">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/videos/HeroVideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-end z-20">
          <h1 className="hero-video-text max-sm:text-3xl 3xl:text-8xl 3xl:p-36 font-[Afacad] ">
            Unrivalled 3D <br /> Experience for your <br /> Consumers.
          </h1>
        </div>

        <div className="absolute bg-black opacity-60 w-full h-full top-0 left-0 z-10"></div>
      </div>
    </div>
  );
};

export default HeroVideo;
