"use client";

import RingModel from "@/canvas/Ring";
import React from "react";
import { RecoilRoot } from "recoil";
import state from "@/store";
import { useSnapshot } from "valtio";
import ProductModellingHeading from "@/components/ProductModellingHeading";
import ProductCustomizer from "@/components/ProductCustomizer";

const ThreeDModellingPage = () => {
  const snap = useSnapshot(state);
  return (
    <RecoilRoot>
      <div className="flex flex-col lg:flex-row w-full lg:h-[78vh] 3xl:h-[50vh] py-6 px-14 max-md:px-8 gap-10">
        <div className="w-full lg:w-1/2">
          <ProductModellingHeading />
          <div className=" p-5">
            <ProductCustomizer />
          </div>
        </div>
        <div className="w-full lg:w-1/2 min-h-[350px] transition-all ease-in flex justify-center items-center bg-gray-200 rounded-2xl relative">
          <RingModel />
          {state.intro && (
            <div
              className="absolute bottom-5 left-5"
              onClick={() => (state.intro = false)}
            >
              <a
                href="#_"
                className="relative items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
              >
                <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                  <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                  <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                </span>
                <span className="relative text-white">Customize</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </RecoilRoot>
  );
};

export default ThreeDModellingPage;

// grid grid-cols-2 py-6 px-14 h-[78vh]

{
  /* <div
          className={`justify-center items-center ${
            snap.intro ? "col-span-1" : "grid-cols-none"
          }`}
        >
          <ProductModellingHeading />
          <div className="absolute p-5">
            <ProductCustomizer />
          </div>
        </div>
        <div
          className={`transition-all ease-in flex justify-center items-center bg-gray-200 rounded-2xl relative ${
            snap.intro ? "col-span-1" : "col-span-2"
          } relative`}
        >
          <RingModel />
          {state.intro && (
            <div className="absolute bottom-5 left-5" onClick={() => state.intro = false}>
              <a
                href="#_"
                className="relative items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
              >
                <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                  <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                  <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                </span>
                <span className="relative text-white">Customize</span>
              </a>
            </div>
          )}
        </div> */
}
