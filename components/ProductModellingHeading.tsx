import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import state from "@/store";
import { useSnapshot } from "valtio";

const ProductModellingHeading = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="text-7xl font-[Poppins] font-extrabold text-gradient-animation py-5 max-xl:text-6xl max-md:text-5xl max-sm:text-4xl">
                Dynamic 3D <br className="xl:block hidden" /> Product Renders{" "}
                <br className="xl:block hidden" />
                <span className="text-5xl max-xl:text-4xl max-md:text-3xl max-sm:text-2xl">
                  &
                </span>{" "}
                Animations
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with our brand-new 3D
                customization tool. <strong>Unleash your imagination</strong>{" "}
                and define your own style.
              </p>
              <button className="bg-[#0f172a] mt-5 w-[200px] text-white px-6 py-5 rounded-xl font-bold font-[Poppins] text-lg max-sm:text-sm hover:bg-transparent hover:text-[#0f172a] hover:border-[#0f172a] hover:ring-2 hover:ring-[#0f172a] transition-all ease-in ">
                Contact Us
              </button>
              
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default ProductModellingHeading;
