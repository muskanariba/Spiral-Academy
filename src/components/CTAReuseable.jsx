import React from "react";
import { Link } from "react-router-dom";

export default function CTAReusable({
  titleWhite,
  titleYellow,
  description,
  buttonText = "Enroll Today",
  bgImage,
}) {
  return (
    <section className="w-full bg-white m-0 p-0">

      {/* FULL WIDTH BANNER */}
      <div className="relative w-full overflow-hidden">

        {/* BACKGROUND */}
        <div
          className="
            w-full 
            h-[260px] sm:h-[300px] md:h-[360px] lg:h-[400px]
            bg-cover bg-center bg-no-repeat
          "
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#0D428E]/70" />

        {/* CONTENT CONTAINER (ONLY HERE PADDING) */}
        <div className="
          absolute inset-0 
          flex flex-col justify-center items-center 
          text-white 
          px-5 sm:px-10 lg:px-[80px]
        ">

          {/* TITLE */}
          <h2
            className="
              text-center 
              text-2xl sm:text-3xl md:text-4xl lg:text-[50px]
              leading-tight md:leading-normal lg:leading-[78px]
              m-0
            "
            style={{
              fontFamily: "Test Tiempos Fine, serif",
              fontWeight: 700,
            }}
          >
            <span className="text-white">{titleWhite} </span>
            <span className="text-[#FFD166]">{titleYellow}</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="
            mt-3 mb-6
            text-center text-white 
            text-sm sm:text-base lg:text-[16px]
            leading-6 sm:leading-7
            max-w-[735px]
            m-0
          ">
            {description}
          </p>

          {/* BUTTON */}
          <Link to = "/enrollment" >
          <button
            className="
              bg-[#FFD166] 
              text-black 
              font-medium
              w-[189px] h-[63px]
              rounded-[30px]
              shadow-[0px_4px_4px_#00000040]
              flex items-center justify-center
              hover:brightness-95 transition
              m-0
            "
          >
            {buttonText}
          </button>
          </Link>

        </div>
      </div>

    </section>
  );
}