import React from "react";

export default function ImportantNote() {
  return (
    <section className="w-full flex justify-center bg-white px-4 sm:px-6 lg:px-0 mb-10">

      {/* OUTER CONTAINER */}
      <div className="w-full max-w-[1440px] lg:px-[79px]">

        {/* CARD */}
        <div
          className="
            w-full max-w-[1267px]
            border border-[#FFD166] 
            rounded-[10px]
            bg-[#F2C766]

            flex flex-col gap-[16px] md:gap-[19px]

            px-[20px] py-[24px]
            sm:px-[30px] sm:py-[30px]
            md:px-[40px] md:py-[39px]
          "
        >

          {/* TITLE */}
          <h3
            className="
              text-[#1A1A1A]
              text-[18px] sm:text-[19px] md:text-[20px]
              leading-[26px] md:leading-[28px]
            "
            style={{
              fontFamily: "Test Tiempos Fine, serif",
              fontWeight: 700,
            }}
          >
            Important Note
          </h3>

          {/* TEXT */}
          <p
            className="
              text-[#5A4A1A]
              text-[14px] sm:text-[15px]
              leading-[22px] sm:leading-[24px]
            "
          >
            Spiral does NOT provide curriculum or daily teaching. We are a private school umbrella that offers administrative support, legal coverage, and official documentation.
            <br className="hidden sm:block" />
            You are responsible for choosing your curriculum, teaching your children, and overseeing their education. We provide the framework—you provide the learning.
          </p>

        </div>
      </div>
    </section>
  );
}