"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { FaChevronLeft } from "react-icons/fa";

const NavMenuLinks = ({ isOpen, onClose }: any) => {
  const [showIndustries, setShowIndustries] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);

  const toggleIndustries = () => {
    setShowIndustries(!showIndustries);
  };
  const toggleSolutions = () => {
    setShowSolutions(!showSolutions);
  };

  return (
    <div
      className={`absolute left-0 top-0 h-screen bg-gray-800 ${
        isOpen ? "block shadow-xl" : "hidden"
      }`}
    >
      {showIndustries && (
        <div className="bg-white absolute w-full h-full text-gray-800 p-8">
          <div className="mt-10 mb-5 flex items-center">
            <div
              onClick={toggleIndustries}
              className="bg-gray-300 p-2 rounded-full hover:bg-gray-400 justify-center items-center"
            >
              <FaChevronLeft size="20px" />
            </div>
            <h1 className="text-2xl ml-5 font-bold">INDUSTRIES</h1>
          </div>

          <div className="w-full h-[1px] bg-gray-800" />

          <div className="mt-5 p-5 flex flex-col space-y-5">
            <a href="/industries/gems-jewellery">Gems & Jewellery</a>
            <a href="/industries/architecture">Architecture</a>
            <a href="/industries/automotive-aftermarket">
              Automotive & Aftermarket
            </a>
            <a href="/industries/electronics-mobile">Electronics & Mobile</a>
            <a href="/industries/fashion-apparel">Fashion & Aparrel</a>
            <a href="/industries/toys-games">Toys & Games</a>
            <a href="/industries/health-beauty">Health & Beauty</a>
          </div>
        </div>
      )}
      {showSolutions && (
        <div className="bg-white absolute w-full h-full text-gray-800 p-8">
          <div className="mt-10 mb-5 flex items-center">
            <div
              onClick={toggleSolutions}
              className="bg-gray-300 p-2 rounded-full hover:bg-gray-400 justify-center items-center"
            >
              <FaChevronLeft size="20px" />
            </div>
            <h1 className="text-2xl ml-5 font-bold">SOLUTIONS</h1>
          </div>

          <div className="w-full h-[1px] bg-gray-800" />

          <div className="mt-5 p-5 flex flex-col space-y-5">
            <a href="/solutions/product-imagery">Product Imagery</a>
            <a href="/solutions/3d-product-modelling">3D Product Modelling</a>
            <a href="/solutions/augmented-reality">Augmented Reality</a>
            <a href="/solutions/3d-animations">3D Animations</a>
            <a href="/solutions/3d-lifestyle-scenes">3D Lifestyle Scenes</a>
            <a href="/solutions/enhanced-brand-content">
              Enhanced Brand Content
            </a>
          </div>
        </div>
      )}
      <div className="flex justify-between items-center mt-6 p-8 h-20">
        <Image
          src="/images/logo-white.png"
          width={200}
          height={200}
          alt="Logo"
          className="mr-3 w-[200px] max-xl:w-[200px] object-contain"
        />
        <div onClick={onClose}>
          <IoClose style={{ color: "white", "font-size": "26px" }} />
        </div>
      </div>
      <div className="text-white mt-10 mx-8 space-y-5 text-lg font-Poppins">
        <div
          className="px-8 h-16 flex items-center justify-start hover:bg-gray-600 rounded-lg underline"
          onClick={toggleIndustries}
        >
          Industries
        </div>
        <div
          className="px-8 h-16 flex items-center justify-start hover:bg-gray-600 rounded-lg underline"
          onClick={toggleSolutions}
        >
          Solutions
        </div>
        <a href="/about-us">
          <div className="px-8 h-16 flex items-center justify-start hover:bg-gray-600 rounded-lg">
            About Us
          </div>
        </a>
        <div className="px-8 h-16 flex items-center justify-start hover:bg-gray-600 rounded-lg">
          Our Work
        </div>
      </div>
    </div>
  );
};

export default NavMenuLinks;
