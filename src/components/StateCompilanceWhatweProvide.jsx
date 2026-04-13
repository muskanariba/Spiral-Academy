import React from "react";

const data = [
  {
    title: "State-Specific Guidance",
    desc: "Detailed information about your state's homeschool laws, requirements, and reporting schedules.",
  },
  {
    title: "Compliance Packets",
    desc: "Downloadable PDF packets with all required forms, templates, and step-by-step instructions.",
  },
  {
    title: "Ongoing Support",
    desc: "Access to our support team for questions about compliance and record-keeping requirements.",
  },
];

export default function StateCompilanceWhatweProvide() {
  return (
    <div className="bg-[#F9FAFB] py-[60px] md:py-[80px] px-5 md:px-[40px]">
      
      <div className="max-w-[1440px] mx-auto px-2 md:px-[20px]">
        
        {/* Heading */}
        <h2
          className="text-center font-bold mb-[40px]"
          style={{
            fontFamily: "Test Tiempos Fine VF",
            fontSize: "35px",
            lineHeight: "50px",
          }}
        >
          What <span className="text-[#FFD166]">We Provide</span>
        </h2>

        {/* Cards */}
        <div className="max-w-[1282px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[20px]">
          
          {data.map((item, index) => (
            <div
              key={index}
              className="
                bg-white border border-[#EDEDED] rounded-[30px]
                w-full flex flex-col
              "
              style={{
                minHeight: "200px",
                padding: "42px 44px",
              }}
            >
              <h3
                className="text-[16px] md:text-[18px] font-semibold"
                style={{ fontFamily: "Aceh Soft" }}
              >
                {item.title}
              </h3>

              <p
                className="text-[14.8px] text-[#6B7280] mt-[18px]"
                style={{
                  fontFamily: "Aceh Soft",
                  lineHeight: "24px",
                  fontWeight: 500,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}