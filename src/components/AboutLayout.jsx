import React from "react";
import About_banner from "../assets/About-banner.png";

export default function Banner() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1425px] relative overflow-hidden">

        {/* Background Image */}
        <div
          className="w-full h-[323px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${About_banner})`,
            backgroundPosition: "center",
          }}
        ></div>

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#0D428E] opacity-60"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white pt-[79px] pb-[80px]">

          {/* Heading */}
          <h1 className="text-[62.6px] leading-[78.95px] text-center font-medium">
               <span className="text-white">About </span>
            <span className="text-[#FFD166]">Spiral Academy</span>{" "}
         
          </h1>

          {/* Paragraph */}
          <p className="w-[735px] h-[54px] mt-4 text-center text-white text-[16.7px] leading-[27px] font-medium">
            Empowering families with the freedom to homeschool while providing the structure and support of a recognized private school.
          </p>

        </div>

        

      </div>
      
    </div>
  );
}