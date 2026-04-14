import React from "react";
import Work_banner from "../assets/Work-banner.png";
import WorkUnderline from "../assets/Vector-Line.png"; // vector line

export default function HowItWorksBanner() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1425px] relative overflow-hidden">

        {/* Background Image */}
        <div
          className="w-full h-[300px] md:h-[320px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${Work_banner})`,
          }}
        />

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#0D428E]/70"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">

          {/* ✅ Updated Heading with Vector */}
          <h1 className="text-[36px] md:text-[61.9px] font-semibold text-center leading-tight">
            <span className="text-white">How It </span>

            <span className="relative inline-block text-[#FFD166]">
              Works

              {/* Vector Underline */}
              <img
                src={WorkUnderline}
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

          {/* Subtitle */}
          <p className="mt-5 text-center text-[13px] md:text-[16px] max-w-[600px] leading-[22px] md:leading-[26px]">
            Five simple steps to homeschool with confidence, freedom, and official support.
          </p>

        </div>

      </div>
    </div>
  );
}