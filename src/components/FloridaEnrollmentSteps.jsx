import React from "react";

export default function EnrollmentSteps() {
  const steps = [
    {
      number: "1",
      title: "Complete Online Enrollment",
      desc: "Fill out our enrollment form with student and family information, select Florida as your state, and submit payment.",
    },
    {
      number: "2",
      title: "Receive Compliance Packet",
      desc: "Download your Florida-specific PDF packet with all forms, instructions, and deadlines.",
    },
    {
      number: "3",
      title: "Submit Required Forms",
      desc: "Complete and submit any state-required notifications or withdrawal forms (if transferring from public school).",
    },
    {
      number: "4",
      title: "Begin Homeschooling",
      desc: "Start teaching your children with full legal protection and administrative support from Spiral Academy.",
    },
  ];

  return (
    <section className="w-full bg-[#F3F4F6] py-14 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">

        {/* Heading */}
        <h2 className="text-[28px] sm:text-[32px] md:text-[38px] font-semibold text-[#1A1A1A] mb-12">
          Enrollment <span className="text-[#FFD166]">Steps</span>
        </h2>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-3xl px-6 sm:px-8 py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center gap-5 shadow-sm"
            >
              
              {/* Gradient Circle */}
              <div className="w-[60px] h-[60px] min-w-[60px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#072E6E] to-[#0D428E]">
                
                {/* Number */}
                <span
                  className="text-[#FFD166]"
                  style={{
                    fontFamily: "Arial",
                    fontWeight: 400,
                    fontSize: "24px",
                    lineHeight: "36px",
                  }}
                >
                  {step.number}
                </span>

              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] mb-2">
                  {step.title}
                </h3>

                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}