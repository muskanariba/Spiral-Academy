import React from "react";
import { Check } from "lucide-react";

const AfterEnrollment = () => {
  const items = [
    "Receive your state-specific compliance packet via email",
    "Access your parent portal login credentials",
    "Complete any state-required notifications or filings",
    "Begin homeschooling with confidence and support",
  ];

  return (
    <div className="w-full max-w-2xl bg-gray-100 rounded-2xl border border-gray-200 p-8 md:p-10 mt-8">
      
      {/* TITLE */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
        After Enrollment
      </h2>

      {/* LIST */}
      <div className="space-y-5">
        {items.map((text, index) => (
          <div key={index} className="flex items-start gap-4">
            
            {/* ICON */}
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center mt-1">
              <Check size={14} className="text-white" />
            </div>

            {/* TEXT */}
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AfterEnrollment;