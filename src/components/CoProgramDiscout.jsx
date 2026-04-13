import React from "react";

export default function CoProgramDiscount() {
  return (
    <section className="w-full flex justify-center py-12 sm:py-16 bg-[#f9fafb]">
      
      {/* CONTAINER */}
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 text-center py-5">

        {/* HEADING */}
        <h2
          className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold"
          style={{ fontFamily: "Test Tiempos Fine, serif" }}
        >
          Discount /{" "}
          <span className="text-[#FFD166]">
            Commission Structure
          </span>
        </h2>

        {/* SUBTEXT */}
        <p className="text-[#6B7280] text-sm sm:text-base max-w-2xl mx-auto mb-10 sm:mb-14 leading-relaxed">
          We value co-op leaders who bring families to Spiral Academy. Registered
          co-ops receive group discounts and co-op leaders can earn commission
          on enrollments.
        </p>

        {/* CARDS */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 items-stretch">

          {/* CARD 1 */}
          <div className="w-full bg-white border border-[#EDEDED] rounded-2xl sm:rounded-[25px] p-5 sm:p-6 md:p-8 text-left flex flex-col justify-between">
            
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                Group Discount
              </h3>

              <p className="text-sm text-[#6B7280] mb-5 leading-relaxed">
                Co-op members receive 10% off enrollment fees when registering
                through a verified co-op leader.
              </p>
            </div>

            {/* YELLOW BOX */}
            <div className="bg-[#FFD166] rounded-xl h-12 sm:h-14 flex items-center justify-center">
              <span className="text-lg sm:text-xl font-semibold">
                10% OFF
              </span>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="w-full bg-white border border-[#EDEDED] rounded-2xl sm:rounded-[25px] p-5 sm:p-6 md:p-8 text-left flex flex-col justify-between">
            
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                Leader Commission
              </h3>

              <p className="text-sm text-[#6B7280] mb-5 leading-relaxed">
                Co-op leaders earn a commission for each family that enrolls
                through their unique co-op code.
              </p>
            </div>

            {/* YELLOW BOX */}
            <div className="bg-[#FFD166] rounded-xl h-12 sm:h-14 flex items-center justify-center text-center px-2">
              <span className="text-lg sm:text-xl font-semibold">
                $15{" "}
                <span className="text-sm sm:text-base font-normal">
                  per enrollment
                </span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}