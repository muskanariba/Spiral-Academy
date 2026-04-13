import React from "react";
import About_banner from "../assets/About-banner.png";

export default function AboutEducationExperience() {
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
          pb-10 sm:pb-14 lg:pb-[60px]
        ">

          {/* Heading */}
          <h1 className="
            text-center font-medium 
            text-2xl sm:text-3xl md:text-4xl lg:text-[50px] 
            leading-tight sm:leading-snug md:leading-normal lg:leading-[78.95px]
          ">
            <span className="text-white">Ready to Experience </span>
            <span className="text-[#FFD166]">Educational Freedom?</span>
          </h1>


        {/* Paragraph */}
<p className="
  
  pb-[20px]
  text-center text-white 
  text-sm sm:text-base lg:text-[16.7px] 
  leading-6 sm:leading-7 lg:leading-[27px] 
  font-medium 
  w-full max-w-[735px]
">
  Join Spiral Academy and homeschool with confidence, support, and recognized credentials.
</p>


         <button
  className="
    bg-[#FFD166] 
    text-black 
    font-medium
    
    w-[189px] h-[63px]
    px-[40px] py-[18px]
    
    rounded-[30px]
    shadow-[0px_4px_4px_0px_#00000040]
    
    flex items-center justify-center
    
    hover:brightness-95 
    transition
  "
>
 Enroll Today
</button>

        </div>

      </div>
    </div>
  );
}