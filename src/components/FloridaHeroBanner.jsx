import React from "react";
import heroBg from "../assets/florida-banner.png";
import workUnderline from "../assets/Vector-Line.png";

export default function FloridaHeroBanner() {
  return (
    <section className="w-full pb-[80px]">
      <div className="w-full">
        <div className="relative h-[262px] sm:h-[280px] md:h-[300px] lg:h-[262px] overflow-hidden border border-[#1E63D8]">

          {/* Background Image */}
          <img
            src={heroBg}
            alt="Florida skyline background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-[#0B4DB8]/80"></div>

          {/* Content */}
          <div className="relative z-10 h-full max-w-[1425px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 flex flex-col justify-center items-center text-center">

            {/* Back Link Center */}
            <button className="flex items-center gap-2 text-white text-xs sm:text-sm md:text-base mb-4 hover:opacity-80 transition">
              <span className="text-lg leading-none">‹</span>
              Back to States
            </button>

            {/* Heading */}
            <h1 className="text-white font-semibold leading-tight text-[26px] sm:text-[34px] md:text-[46px] lg:text-[70px]">

              {/* Florida Word */}
              <span className="relative inline-block text-[#FFD166] mr-2 sm:mr-3">
                Florida

                {/* Underline Vector */}
                <img
                  src={workUnderline}
                  alt="underline"
                  className="absolute left-0 -bottom-2 sm:-bottom-3 w-full max-w-[150px] sm:max-w-[180px] md:max-w-[220px]"
                />
              </span>

              <span className="text-white block sm:inline">
                Homeschool Requirements
              </span>
            </h1>

          </div>
        </div>
      </div>
    </section>
  );
}