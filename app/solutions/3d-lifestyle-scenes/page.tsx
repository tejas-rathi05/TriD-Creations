import TextImage from "@/components/TextImage";
import React from "react";

const page = () => {
  const text = `Immerse your products in real-life scenarios with our 3D lifestyle scenes. Our artists craft scenes that seamlessly integrate your products into everyday situations, showcasing them in a context that resonates with your target audience. `;
  return (
    <div className="">
      <div className="">
        <TextImage
          title="3D Lifestyle Scenes"
          titleCustomStyle="text-8xl"
          subText={text}
          img="3d-lifestyle-scenes.jpg"
          imgCustomStyle="rounded-2xl"
          height={600}
          width={600}
        />
      </div>
    </div>
  );
};

export default page;
