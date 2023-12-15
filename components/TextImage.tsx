import React from "react";
import Image from "next/image";

const TextImage = ({
  imgCustomStyle,
  height,
  width,
  title,
  subText,
  titleCustomStyle,
  img
}: any) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center w-full p-5 ms:px-10 gap-10 md:p-10 xl:p-14">
      <div className="w-full">
        <h1
          className={`font-[Poppins] font-extrabold text-gradient-animation py-5 max-xl:text-6xl max-md:text-5xl max-sm:text-4xl ${titleCustomStyle}`}
        >
          {title}
        </h1>
        <p className="max-w-lg font-normal text-gray-600 text-sm mt-5">
          {subText}
        </p>
      </div>
      <div className={`w-full flex justify-center  ${imgCustomStyle}`}>
        <Image
          src={`/images/solutionsPage/${img}`}
          width={width}
          height={height}
          alt="image"
          className="object-contain rounded-2xl"
        />
      </div>
    </div>
  );
};

export default TextImage;
