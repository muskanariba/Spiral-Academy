import React from "react";

export default function AboutFeatureSection() {
  return (
    <div className="bg-[#F9FAFB] py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[79px]">
        
       

        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-12">
          Sovereignty-Based <span className="text-[#FFD166]">Education</span>
        </h2>

        {/* Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-[50px]">
          
          {/* Box 1 */}
          <div className="bg-white rounded-[30px] border border-gray-200 p-6 sm:p-8 lg:p-[40px] flex flex-col gap-4">
            <h3 className="text-lg sm:text-xl font-semibold text-black">
             Parental Authority
            </h3>
            <p
                className="
                  text-[#6B7280]
                  text-[14.8px]
                  leading-[24.29px]
                  font-medium
                  max-w-[531.5px]
                "
                style={{ fontFamily: "Aceh Soft" }}
              >
               We believe parents have the fundamental right and responsibility to direct
             their children's education. Spiral Academy exists to support that authority,
             not replace it.
              </p>
          </div>

          {/* Box 2 */}
          <div className="bg-white rounded-[30px] border border-gray-200 p-6 sm:p-8 lg:p-[40px] flex flex-col gap-4">
            <h3 className="text-lg sm:text-xl font-semibold text-black">
             Educational Freedom
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
             Choose the curriculum, teaching methods, schedule, and values that align
             with your family's beliefs and your child's unique learning style.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-white rounded-[30px] border border-gray-200 p-6 sm:p-8 lg:p-[40px] flex flex-col gap-4">
            <h3 className="text-lg sm:text-xl font-semibold text-black">
              Minimal Interference
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              We provide administrative structure and legal coverage without imposing
             curriculum requirements, mandatory testing, or intrusive oversight.
            </p>
          </div>

          {/* Box 4 */}
          <div className="bg-white rounded-[30px] border border-gray-200 p-6 sm:p-8 lg:p-[40px] flex flex-col gap-4">
            <h3 className="text-lg sm:text-xl font-semibold text-black">
              Recognized Credentials
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              When you need official documentation—transcripts, diplomas, verification
             letters—we provide recognized credentials that open doors for your child's
             future.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}