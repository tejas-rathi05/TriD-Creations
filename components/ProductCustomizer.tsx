import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideAnimation, fadeAnimation } from "../config/motion";
import state from "@/store";
import { useSnapshot } from "valtio";
import ColorPicker from "./ColorPicker";
import { IoArrowBackOutline } from "react-icons/io5";

const ProductCustomizer = () => {
  const snap = useSnapshot(state);
  return (
    <div className="flex flex-col">
      <AnimatePresence>
        {!snap.intro && (
          <>
            <motion.div className="z-10 top-5 right-5 mb-8" {...fadeAnimation}>
              <button
                onClick={() => (state.intro = true)}
                className="bg-gray-200 rounded-xl px-5 py-3 font-[Poppins]"
              >
                <IoArrowBackOutline />
              </button>
            </motion.div>
            <motion.div
              key="custom"
              className="left-0 z-10"
              {...slideAnimation("left")}
            >
              <div className="flex items-center w-full ">
                <ColorPicker />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductCustomizer;
