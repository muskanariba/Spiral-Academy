import React from "react";
import Vector_Line from "../assets/Vector-Line.png"

import FAQ_banner from "../assets/FAQ.png"

export default function FAQBanner() {
 return (
 <div className="w-full flex justify-center">
 <div className="w-full max-w-[1425px] relative overflow-hidden">

 {/* Background Image */}
 <div
 className="w-full h-[295.95px]  md:h-[320px] bg-cover bg-center bg-no-repeat"
 style={{
 backgroundImage: `url(${FAQ_banner})`,
 }}
 />

 {/* Blue Overlay */}
 <div className="absolute inset-0 bg-[#0D428E]/70"></div>

 {/* Content */}
 <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">

 {/* ✅ Updated Heading with Vector */}
 <h1 className="text-[36px] md:text-[70px] font-semibold text-center leading-tight">
 <span className="text-white">Frequently Asked </span>

 <span className="relative inline-block text-[#FFD166]">
 Questions 

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

 {/* Subtitle */}
 <p className="mt-5 text-center text-[13px] md:text-[16px] max-w-[726px] leading-[22px] md:leading-[26px]">
Find answers to common questions about enrollment, payments, co-ops, courses, state compliance,
and support.
 </p>

 </div>

 </div>
 </div>
 );
}