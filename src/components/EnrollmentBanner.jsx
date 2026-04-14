import React from "react";
import EnrollBg from "../assets/enroll-banner.png";
import WorkUnderline from "../assets/Vector-Line.png";

export default function EnrollmentBanner() {
  return (
    <div className="w-full relative overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="w-full h-[300px] md:h-[320px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${EnrollBg})`,
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#0D428E]/70" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">

        <h1 className="text-[36px] md:text-[64px] font-semibold text-center leading-tight">
          <span className="text-white">Enroll </span>

          <span className="relative inline-block text-[#F4B63D]"> 
            Today
            <img
              src={WorkUnderline}
              alt=""
              className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-[110px] md:w-[150px]"
            />
          </span>
        </h1>

        <p className="mt-5 text-center text-[13px] md:text-[16px] max-w-[650px]">
          Begin your homeschooling journey with confidence, support, and recognized credentials.
        </p>

      </div>
    </div>
  );
}