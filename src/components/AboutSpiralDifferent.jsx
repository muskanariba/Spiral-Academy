import React from "react";
import Vector from "../assets/Vector.png"; 

export default function AboutSpiralDifferent() {
  const features = [
    {
      title: "Parent-Led",
      desc: "You maintain full control over curriculum, teaching methods, daily schedules, and educational philosophy.",
    },
    {
      title: "Compliance Simplified",
      desc: "We handle state compliance, record-keeping, and legal requirements so you can focus on teaching your children.",
    },
    {
      title: "Flexible",
      desc: "No mandatory testing, no required curriculum, no rigid schedules. Homeschool your way, on your terms.",
    },
    {
      title: "Affordable",
      desc: "Family-based pricing starting at just $65 per year. No hidden fees, no surprise costs.",
    },
    {
      title: "Supportive Community",
      desc: "Connect with like-minded families, access educational resources, and find encouragement for your journey.",
    },
    {
      title: "Multi-State Coverage",
      desc: "Serving families in Arizona, Texas, Florida, Georgia, Ohio, Colorado, Oregon, Idaho, Montana, and North Carolina.",
    },
  ];

  return (
    <div className="w-full flex justify-center bg-white py-10">
      <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-[79px] py-12 lg:py-[60px]">

        {/* Heading */}
        <h2
          className="
            text-center 
            font-bold 
            text-2xl sm:text-3xl md:text-4xl lg:text-[44.3px] 
            leading-tight lg:leading-[50px]
            font-[Test_Tiempos_Fine_VF]
            max-w-[593px] mx-auto
          "
        >
          <span className="text-black">What Makes Spiral </span>
          <span className="text-[#FFD166]">Different</span>
        </h2>

        {/* Sub Text */}
        <p
          className="
            text-center 
            text-[#6B7280] 
            mt-4 
            mx-auto 
            max-w-[622px]
            text-sm sm:text-base lg:text-[14.9px] 
            leading-6 lg:leading-[24.29px] 
            font-medium
          "
          style={{ fontFamily: "Aceh Soft" }}
        >
          We're not a traditional private school trying to control your homeschool. We're a support system
          designed by homeschoolers, for homeschoolers.
        </p>

        {/* Points Grid */}
        <div className="
          mt-10 lg:mt-[40px]
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-6 lg:gap-[30px]
          max-w-[1267px] mx-auto
        ">

          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-[12px] max-w-[402px]"
            >
              
              {/* Icon */}
              <img
                src={Vector}
                alt="icon"
                className="w-[18px] h-[18px] mt-1"
              />

              {/* Text */}
              <div className="flex flex-col gap-[6px]">

                {/* Title */}
                <h4 className="font-semibold text-black text-[16px] leading-[24px]">
                  {item.title}
                </h4>

                {/* Description */}
                <p
                  className="
                    text-[#6B7280] 
                    text-[14.9px] 
                    leading-[24.29px] 
                    font-medium
                  "
                  style={{ fontFamily: "Aceh Soft" }}
                >
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}