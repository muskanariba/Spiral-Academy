import React from "react";
import heroBg from "../assets/florida-banner.png";
import workUnderline from "../assets/Vector-Line.png";

export default function ParentPortalHeroBanner() {
  return (
    <section className="w-full pb-[80px]">
      <div className="w-full">
        <div className="relative h-[262px] sm:h-[280px] md:h-[300px] lg:h-[262px] overflow-hidden border border-[#1E63D8]">

          {/* Background Image */}
          <img
            src={heroBg}
            alt="Parent Portal background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Blue Overlay */}
         <div className="absolute inset-0 bg-[#0D428E]/70"></div>

          {/* Content */}
          <div className="relative z-10 h-full max-w-[1425px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 flex flex-col justify-center items-center text-center">

            {/* Heading */}
            <h1 className="text-white font-semibold leading-tight text-[26px] sm:text-[34px] md:text-[46px] lg:text-[70px]">

              {/* Parent (white) */}
              <span className="text-white mr-2 sm:mr-3">
                Parent
              </span>

              {/* Portal (yellow with underline) */}
              <span className="relative inline-block text-[#FFD166]">
                Portal

                {/* Underline Vector */}
                <img
                  src={workUnderline}
                  alt="underline"
                  className="absolute left-0 -bottom-2 sm:-bottom-3 w-full max-w-[150px] sm:max-w-[180px] md:max-w-[220px]"
                />
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 text-white text-sm sm:text-base md:text-lg max-w-[700px] leading-relaxed">
              Access all your homeschool records, reports, and resources in one secure location.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}