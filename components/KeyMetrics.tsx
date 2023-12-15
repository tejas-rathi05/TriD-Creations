import React from "react";
import { metrics } from "@/constants";

const KeyMetrics = () => {
  return (
    <div>
      <section className="bg-gray-900 p-16 shadow-md text-white">
        <div className="flex flex-wrap justify-center gap-24">
          {metrics.map((metric) => (
            <div
              key={metric.title}
              className="flex flex-col items-center text-center "
            >
              <i className={`fa-2x text-gray-500 mb-4 ${metric.icon}`}></i>
              <span className="text-5xl font-extrabold font-[Raleway] mb-3">
                {metric.count}
                <span className="text-[#d37829]">+</span>{" "}
              </span>
              <span className="text-base text-gray-500 font-[Poppins]">
                {metric.title}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default KeyMetrics;
