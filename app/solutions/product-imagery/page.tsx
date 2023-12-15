import TextImage from "@/components/TextImage";
import React from "react";

const page = () => {
  const text = `High-Resolution Product Photography with Animated Highlights
  Our dedication to quality extends to high-resolution product photography, now enhanced with animated highlights. `;
  return (
    <div className="">
      <div className="">
        <TextImage
          title="Product Imagery"
          titleCustomStyle="text-8xl"
          subText={text}
          img="3d-product-imagery.jpg"
          imgCustomStyle="rounded-2xl"
          height={300}
          width={300}
        />
      </div>
    </div>
  );
};

export default page;
