import MainCarousel from "@/components/MainCarousel/MainCarousel";
import { automotive_aftermarketCarouselContent } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div className="">
      <MainCarousel itemArray={automotive_aftermarketCarouselContent} vidURL="/videos/industries/Automotive.mp4"/>
    </div>
  );
};

export default page;
