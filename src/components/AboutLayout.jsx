import React from "react";
import About_banner from "../assets/About-banner.png";

export default function Banner() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1425px] relative overflow-hidden">

        {/* Background Image */}
        <div
          className="
            w-full 
            h-[220px] sm:h-[260px] md:h-[300px] lg:h-[323px] 
            bg-cover bg-center bg-no-repeat
          "
          style={{
            backgroundImage: `url(${About_banner})`,
            backgroundPosition: "center",
          }}
        ></div>

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#0D428E] opacity-60"></div>

        {/* Content */}
        <div className="
          absolute inset-0 
          flex flex-col justify-center items-center 
          text-white 
          px-4 sm:px-6 
          pt-10 sm:pt-14 lg:pt-[79px] 
          pb-10 sm:pb-14 lg:pb-[80px]
        ">

          {/* Heading */}
          <h1 className="
            text-center font-medium 
            text-2xl sm:text-3xl md:text-4xl lg:text-[62.6px] 
            leading-tight sm:leading-snug md:leading-normal lg:leading-[78.95px]
          ">
            <span className="text-white">About </span>
            <span className="text-[#FFD166]">Spiral Academy</span>
          </h1>

          {/* Paragraph */}
          <p className="
            mt-3 sm:mt-4 
            text-center text-white 
            text-sm sm:text-base lg:text-[16.7px] 
            leading-6 sm:leading-7 lg:leading-[27px] 
            font-medium 
            w-full max-w-[735px]
          ">
            Empowering families with the freedom to homeschool while providing the structure and support of a recognized private school.
          </p>

        </div>

      </div>
    </div>
  );
}