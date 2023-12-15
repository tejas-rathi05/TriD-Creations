"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./MainCarousel.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const MainCarousel = ({ itemArray, vidURL }: any) => {
  return (
    <>
      <div className="w-full h-[80vh] relative overflow-hidden">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src={vidURL} type="video/mp4" />
        </video>
        <div className="absolute w-full h-full top-0 left-0 z-10  ">
          <Swiper
            rewind={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper bg-black bg-opacity-50 relative"
          >
            {itemArray.map((item: any) => (
              <SwiperSlide key={item.heading}>
                <div className="absolute bottom-0 left-0 md:w-1/2 p-10 md:px-20 text-left ">
                  <h1 className="text-transparent text-4xl ms:text-6xl bp:text-8xl font-[Afacad] font-extrabold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text leading-[0.9] py-5 max-sm:text-center">
                    {item.heading}
                  </h1>
                  <p className="py-5 text-xs ms:text-sm bp:text-lg text-gray-300 max-md:text-xs max-sm:text-center">
                    {item.subtext}
                  </p>
                </div>

                {/* <div
                      className={`absolute bg-black opacity-60 w-full h-full top-0 left-0 z-10`}
                    ></div> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default MainCarousel;
