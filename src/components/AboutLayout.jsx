import React from "react";
import About_banner from "../assets/About-banner.png";
import Vector_Line from "../assets/Vector-Line.png"

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




{/* ✅ Updated Heading with Vector */}
 <h1 className="text-[36px] md:text-[70px] font-semibold text-center leading-tight">
 <span className="text-white">About </span>

 <span className="relative inline-block text-[#FFD166]">
 Spiral Academy

 {/* Vector Underline */}
 <img
 src={Vector_Line}
 alt=""
 className="
 absolute 
 left-1/2 -translate-x-1/2
 bottom-[-10px]
 w-[110px] md:w-[150px]
 "
 />
 </span>
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