import MainCarousel from "@/components/MainCarousel/MainCarousel";
import { gems_jewelleryCarouselContent } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div className="">
      <MainCarousel itemArray={gems_jewelleryCarouselContent} vidURL="/videos/industries/GemsJewellery.mp4"/>
    </div>
  );
};

export default page;
