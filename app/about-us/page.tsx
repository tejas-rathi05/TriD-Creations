import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="w-full ">
      <div className="w-full h-[30vh] overflow-hidden relative">
        <Image
          src="/images/aboutUs/hero-photo2.jpg"
          width={1000}
          height={1000}
          alt="hero-photo"
          className="w-full h-full object-cover "
        />
        <h1 className="absolute flex justify-center items-center w-full h-full top-0 font-Raleway font-bold text-center mb-10 font-montserrat text-6xl max-md:text-5xl max-sm:text-4xl -tracking-[0.03] leading-[0.9] text-white bg-black bg-opacity-50">
          ABOUT US
        </h1>
      </div>

      <div className="w-full h-full flex flex-col lg:flex-row my-5 p-8 lg:p-10 xl:px-20 justify-between items-center max-w-bp mb-16">
        <div className="w-full lg:w-1/2 font-Poppins font-bold text-5xl text-black mb-8 leading-snug max-lg:items-center">
          <h2 className="max-lg:text-center">
            Transforming <span className="text-[#d37829]">Concepts</span> into
            <span className="text-[#d37829]"> Masterpieces</span>
          </h2>
          <div className="w-full flex max-lg:justify-center">
            <p className="max-w-lg font-normal text-gray-600 text-base py-3 max-lg:text-center">
              At Mamoth Media Labs, we believe that every idea has the potential
              to be a masterpiece.<strong> Our team of passionate artists, animators, and technologists come together to transform concepts into stunning 3D animations </strong>
              that transcend the ordinary. With a commitment to excellence and
              an eye for detail, we strive to create visual narratives that
              resonate, inspire, and leave a lasting impact.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="/images/aboutUs/concepts-to-masterpieces.jpg"
            width={500}
            height={500}
            alt="hero-photo"
            className="object-cover rounded-2xl shadow-[5px_5px_rgba(0,0,0,1)]"
          />
        </div>
      </div>

      <div className="w-full h-full my-5 p-8 mb-16 bg-gray-900">
        <div className="max-w-bp flex flex-col justify-center items-center">
          <h2 className="w-full text-center font-Poppins font-bold text-5xl text-[#d37829] leading-snug p-5 max-sm:text-4xl">
            Commitment to Excellence
          </h2>
          <div className="w-full flex justify-center items-center">
            <p className="max-w-lg font-normal text-gray-600 text-base py-3 text-center">
              What sets Mamoth Media Labs apart is our unwavering commitment to
              pushing the envelope of what&apos;s possible in the realm of 3D
              animation. From conceptualization to execution, we leverage
              <strong> cutting-edge technology</strong> and
              <strong> industry-leading expertise</strong> to bring your visions
              to life. Our collaborative approach ensures that every project
              benefits from the diverse skills and perspectives of our talented
              team, resulting in animations that are both
              <strong> visually stunning</strong> and conceptually rich.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex flex-col lg:flex-row my-5 p-8 lg:p-10 xl:px-20 justify-between items-center max-w-bp mb-16">
        <div className="w-full lg:w-1/2 font-Poppins font-bold text-5xl text-black mb-8 leading-snug max-lg:items-center">
          <h2 className="max-lg:text-center">
            Portfolio of <span className="text-[#d37829]">Quality</span> and
            <span className="text-[#d37829]"> Diversity</span>
          </h2>
          <div className="w-full flex max-lg:justify-center">
            <p className="max-w-md font-normal text-gray-600 text-base py-3 max-lg:text-center">
              Our portfolio speaks volumes about the <strong>quality</strong>
               and <strong> diversity</strong> of our work. We have had the
              privilege of collaborating with clients across various industries,
              delivering animations that not only meet but
              <strong> exceed expectations.</strong> From concept development to
              the final frame, Mamoth Media Labs brings precision, creativity,
              and technical expertise to every project.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="/images/aboutUs/quality-diversity.jpg"
            width={600}
            height={600}
            alt="hero-photo"
            className="object-cover rounded-2xl shadow-[5px_5px_rgba(0,0,0,1)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
