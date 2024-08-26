"use client";

import React, { useState } from "react";
import Image from "next/image";
import { NavigationMenuDemo } from "./NavigationMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import NavMenuLinks from "./NavMenuLinks";
import Link from "next/link";

const NavBar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const toggleNavMenu = () => {
    setShowMediaIcons(!showMediaIcons);
  };
  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-white h-[85px] flex justify-between items-center px-10 md:px-24">
      <div>
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={1920}
            height={1080}
            alt="Logo"
            className="w-fit h-[75px] object-contain"
          />
        </Link>
      </div>
      <div className="max-[1200px]:hidden">
        <NavigationMenuDemo />
      </div>
      <div>
        {showMediaIcons && (
          <NavMenuLinks isOpen={showMediaIcons} onClose={toggleNavMenu} />
        )}
        <button className="bg-[#d37829] text-white p-2 px-6 rounded-xl text-sm font-bold max-[1200px]:hidden">
          3D Modeling Animation: Free Consultation
        </button>
        <div className="hidden max-[1200px]:block cursor-pointer">
          <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
