"use client";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import Image from "next/image";

const FooterBase = () => {
  return (
    <Footer container>
      <div className="w-full mt-16">
        <div className="grid w-full justify-center items-start sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/images/logo.png"
              width={250}
              height={200}
              alt="Logo"
              className="p-5 w-[250px] max-xl:w-[200px]"
            />
            <div className="px-2 text-xs flex flex-col justify-center items-center font-montserrat text-slate-600">
              <p>explore@mammothmedia.ca</p>
              <p>call us at +919910007924</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-4 sm:gap-6 mt-5">
            <div>
              <Footer.Title title="Industries" />
              <Footer.LinkGroup col>
                <Footer.Link href="/industries/gems-jewellery">Gems & Jewellery</Footer.Link>
                <Footer.Link href="/industries/architecture">Architecture</Footer.Link>
                <Footer.Link href="/industries/fashion-apparel">Fashion & Aparrel</Footer.Link>
                <Footer.Link href="/industries/automotive-aftermarket">Automotive & Aftermarket</Footer.Link>
                <Footer.Link href="/industries/toys-games">Toys & Games</Footer.Link>
                <Footer.Link href="/industries/electronics-mobile">Electronics & Mobile</Footer.Link>
                <Footer.Link href="/industries/health-beauty">Health & Beauty</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Solutions" />
              <Footer.LinkGroup col>
                <Footer.Link href="/solutions/product-imagery">Product Imagery</Footer.Link>
                <Footer.Link href="/solutions/3d-product-modelling">3D Product Modelling</Footer.Link>
                <Footer.Link href="/solutions/augmented-reality">Augmented Reality</Footer.Link>
                <Footer.Link href="/solutions/3d-animations">3D Animations</Footer.Link>
                <Footer.Link href="/solutions/3d-lifestyle-scenes">3D Lifestyle Scenes</Footer.Link>
                <Footer.Link href="/solutions/enhanced-brand-content">Enhanced Brand Content</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="About Us" />
              <Footer.LinkGroup col>
                <Footer.Link href="/about-us">Our Services</Footer.Link>
                <Footer.Link href="/about-us">Why Us?</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Mammoth" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterBase;
