import React from "react";

export default function FAQContact() {
  return (
    <section className="w-full bg-[#F9FAFB] py-16 sm:py-20 flex justify-center">
      
      {/* INNER CONTAINER */}
      <div className="w-full max-w-[1440px] px-4 sm:px-10 lg:px-[79px] text-center flex flex-col items-center gap-6 sm:gap-7">

        {/* HEADING */}
        <h2
          className="text-2xl sm:text-3xl md:text-[40px] leading-tight md:leading-[50px] font-medium text-black"
          style={{ fontFamily: "Test Tiempos Fine, serif" }}
        >
          Still Have Questions?
        </h2>

        {/* PARAGRAPH */}
        <p className="text-sm sm:text-base text-[#6B7280] max-w-[675px] leading-relaxed">
          We're here to help! Reach out to our support team and we'll get back to you within 24-48 hours.
        </p>

        {/* BUTTON */}
        <button className="mt-2 bg-[#FFD166] text-black px-8 sm:px-10 py-4 rounded-full shadow-md hover:shadow-lg transition">
          Contact Us
        </button>

      </div>
    </section>
  );
}