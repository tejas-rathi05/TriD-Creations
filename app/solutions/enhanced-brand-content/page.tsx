import TextImage from "@/components/TextImage";
import React from "react";

const page = () => {
  const text = `Elevate your brand story with enhanced content that goes beyond the product. Our team works closely with you to create a narrative that resonates with your audience. `;
  return (
    <div className="">
      <div className="">
        <TextImage
          title="Enhanced Brand Content"
          titleCustomStyle="text-7xl"
          subText={text}
          img="enhanced-brand.jpg"
          imgCustomStyle=""
          height={550}
          width={550}
        />
      </div>
    </div>
  );
};

export default page;
