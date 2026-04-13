import React from "react";
import missionImg from "../assets/About-Mission.png";

export default function AboutMission() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1440px] px-[79px] flex items-center gap-[60px] py-20">

        {/* LEFT TEXT SECTION */}
        <div className="w-[717px] flex flex-col gap-[28.94px]">


          {/* Heading */}
          <h2 className="font-bold text-[45.5px] leading-[50px] font-[Test_Tiempos_Fine_VF]">
            <span className="text-black">Our </span>
            <span className="text-[#FFD166]">Mission</span>{" "}
            
          </h2>

          {/* Paragraph container */}
          <div className="flex flex-col gap-[19.1px] text-[#4B5563] text-[16px] leading-[26px]">

            <p>
              Spiral Academy exists to bridge the gap between total educational freedom and the structured benefits of a recognized private school. We believe that parents are the primary educators of their children and should have the autonomy to guide their learning journey without unnecessary interference or mandates.
            </p>

            <p>
              Our mission is to provide homeschooling families with a legal umbrella, administrative support, and recognized academic credentials—all while preserving the flexibility, values, and personalized approach that make homeschooling so powerful.
            </p>

            <p>
              We envision a world where education is not confined to a single model, but instead honors the unique needs, rhythms, and gifts of every child and family.
            </p>

          </div>

        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="w-[470px] h-[516px] relative">
          
          {/* Blue background shape (like design) */}
          <div className="absolute -left-5 -top-5 w-[200px] h-[420px] bg-[#0D428E] rounded-[20px]"></div>

          {/* Image */}
          <img
            src={missionImg}
            alt="Mission"
            className="relative w-full h-full object-cover rounded-[20px]"
          />
        </div>

        

      </div>
    </div>
  );
}