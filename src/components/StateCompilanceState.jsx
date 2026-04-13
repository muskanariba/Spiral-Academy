import React from "react";

const states = [
  "Arizona",
  "Texas",
  "Florida",
  "Georgia",
  "Ohio",
  "Colorado",
  "Oregon",
  "Idaho",
  "Montana",
  "North Carolina",
];

export default function SelectState() {
  return (
    <div className="max-w-[1440px] mx-auto px-5 md:px-[79px] py-[60px] md:py-[80px] bg-white">
      
      {/* Heading */}
      <h2
        className="text-center font-bold mb-[40px] md:mb-[60px]"
        style={{
          fontFamily: "Test Tiempos Fine VF",
          fontSize: "35.2px",
          lineHeight: "50px",
        }}
      >
        Select Your <span className="text-[#FFD166]">State</span>
      </h2>

      {/* Cards Container */}
      <div className="max-w-[1282px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        
        {states.map((state, index) => (
          <div
            key={index}
            className="bg-white border border-[#EDEDED] rounded-[20px] p-[30px] flex flex-col items-center justify-center text-center h-[161px] hover:shadow-md transition"
          >
            {/* Icon */}
            <div className="w-10 h-10 rounded-full bg-[#1f4b8f] flex items-center justify-center mb-3">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            {/* Text */}
            <p className="text-sm font-medium text-gray-700">
              {state}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}