import React from "react";

export default function Requirements() {
  const requirements = [
    "Maintain attendance records documenting days and hours of instruction",
    "Keep portfolio of student work samples (recommended but may not be required)",
    "Submit periodic reports to Spiral Academy (schedules vary by state)",
    "No mandatory standardized testing required",
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">

        {/* Heading */}
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-[#1A1A1A] mb-8">
          Requirements
        </h2>

        {/* List */}
        <div className="space-y-5">
          {requirements.map((item, index) => (
            <div key={index} className="flex items-start gap-4">

              {/* Yellow Check Icon */}
              <div className="w-6 h-6 min-w-[24px] flex items-center justify-center rounded-full bg-[#FFD166] mt-1">
                <svg
                  className="w-3.5 h-3.5 text-white"
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
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {item}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}