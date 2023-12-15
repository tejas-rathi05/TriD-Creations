"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CiCircleChevRight } from "react-icons/ci";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./BreakpointCard.css";

// import required modules
import { Navigation } from "swiper/modules";
import { footerServices } from "@/constants";
import Link from "next/link";

const BreakPointCard = () => {
  return (
    <div className="">
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={"24px"}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            500: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3.2,
            },
          }}
          modules={[Navigation]}
          className="mySwiper rounded-3xl"
        >
          {footerServices.map((service) => (
            <SwiperSlide key={service.title}>
              <div className="w-[470px] h-[410px] cursor-pointer">
                <Image
                  src={service.imageURL}
                  alt="service"
                  width={410}
                  height={410}
                  className="w-full h-full object-cover"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 flex items-center justify-center rounded-2xl" />
                <div className="absolute top-0 left-0 w-full h-full text-white px-10">
                  <Link href={service.pageLink}>
                    <div className="relative text-left flex flex-col gap-y-64">
                      <h1 className="font-[Poppins] font-extrabold tracking-wider leading-snug text-xl md:text-2xl mt-14">
                        {service.title}
                      </h1>
                      <div className="flex justify-between items-center">
                        <p className="font-[Rethink Sans] font-extrabold tracking-wider text-lg md:text-xl">
                          {service.type}
                        </p>
                        <CiCircleChevRight size="38px" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="relative flex justify-end w-full space-x-4 mt-5">
          <button className="swiper-button-prev rounded-2xl p-4 bg-gray-800 text-white opacity-80 hover:opacity-100">
            <FaChevronLeft size="18px" />
          </button>
          <button className="swiper-button-next rounded-2xl p-4 bg-gray-800 text-white opacity-80 hover:opacity-100">
            <FaChevronRight size="18px" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BreakPointCard;
