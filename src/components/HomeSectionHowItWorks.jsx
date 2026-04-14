

import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Enroll Online",
      desc: "Complete our simple registration form for legal private school coverage.",
    },
    {
      id: "02",
      title: "Teach Your Way",
      desc: "Select your curriculum and start teaching according to your family's schedule.",
    },
    {
      id: "03",
      title: "Track Progress",
      desc: "Submit simple attendance or progress reports through our secure portal.",
    },
    {
      id: "04",
      title: "Graduate Confidently",
      desc: "Request official transcripts and diplomas when your child is ready for the next step.",
    },
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-12 md:py-16 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* Heading */}
        <h2 className="font-tiempos font-bold text-[26px] sm:text-[32px] md:text-[50px] leading-tight md:leading-[50px] text-gray-900">
          How It <span className="text-[#FBBF24]">Works</span>
        </h2>

        <p className="mt-3 text-gray-500 text-sm sm:text-base">
          A simple, straightforward path to homeschooling success.
        </p>

        {/* Grid */}
        <div className="mt-10 sm:mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col h-full">

              {/* Badge */}
              <div
                className={`
                  absolute 
                  -top-3 sm:-top-4 md:-top-5 
                  left-3 sm:left-4 
                  px-2 sm:px-3 py-1 
                  text-[10px] sm:text-xs md:text-sm 
                  font-semibold text-white
                  ${index === 0 ? "bg-[#FBBF24]" : "bg-[#1E3A8A]"}
                `}
                style={{
                  borderTopLeftRadius: "14px",
                  borderTopRightRadius: "14px",
                  borderBottomRightRadius: "14px",
                  borderBottomLeftRadius: "4px",
                }}
              >
                {step.id}
              </div>

              {/* Card */}
              <div className="bg-white border border-[#2F5AA8] rounded-[18px] p-4 sm:p-6 pt-10 sm:pt-12 text-left flex flex-col h-full">

                <h3 className="text-[15px] sm:text-[16px] md:text-[17px] font-semibold text-gray-800">
                  {step.title}
                </h3>

                <p className="mt-2 text-[13px] sm:text-[14px] text-gray-500 leading-relaxed flex-grow">
                  {step.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Line */}
        <div className="mt-10 sm:mt-12 mx-auto w-full sm:w-[95%] h-[2px] bg-gradient-to-r from-[#FBBF24] to-[#1E3A8A]"></div>

      </div>
    </section>
  );
}