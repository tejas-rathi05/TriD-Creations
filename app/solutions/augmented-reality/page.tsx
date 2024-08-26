import TextImage from "@/components/TextImage";
import React from "react";

const page = () => {
  const text = `Bring your products into the real world with our Augmented Reality (AR) integration services. With TriD Creations, customers can virtually place your products in their own environment using their smartphones or tablets. `;
  return (
    <div className="">
      <div className="">
        <TextImage
          title="Augmented Reality {AR}"
          titleCustomStyle="text-8xl"
          subText={text}
          img="augmented-reality.png"
          imgCustomStyle="bg-gray-300 rounded-2xl"
          height={500}
          width={500}
        />
      </div>
    </div>
  );
};

export default page;
