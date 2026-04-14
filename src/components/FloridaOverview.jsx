import React from "react";

export default function FloridaOverview() {
  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">

        {/* Heading */}
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-[#1A1A1A] mb-4">
          Overview
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm sm:text-base max-w-3xl leading-relaxed mb-10">
          Florida provides families with the flexibility to homeschool under
          private school enrollment. By enrolling with Spiral Academy, you meet
          state requirements while maintaining full control over your child's
          education.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card 1 */}
          <div className="bg-[#F7F7F8] rounded-2xl p-6 sm:p-8 border border-gray-200">
            <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">
              Legal Status
            </h3>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Private school enrollment is a recognized legal option for
              homeschooling families in Florida.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F7F7F8] rounded-2xl p-6 sm:p-8 border border-gray-200">
            <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">
              Required Age
            </h3>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Compulsory education typically applies to children ages 6–16
              (varies by state).
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}