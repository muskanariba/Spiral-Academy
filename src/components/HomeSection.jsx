

import React from "react";
import homeBgImg from "../assets/Home-bg-img.png";
import Vector from "../assets/Vector.png";
import logo from "../assets/logo.png";
import Vector_Line from "../assets/Vector-Line.png"

export default function HomeSection() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.25), rgba(255,255,255,0.1)), url(${homeBgImg})`,
          backgroundBlendMode: "overlay",
        }}
      />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto 
      px-4 sm:px-6 lg:px-8 
      py-10 sm:py-14 lg:py-16 
      grid grid-cols-1 lg:grid-cols-2 
      gap-10 lg:gap-16 
      items-center min-h-screen">

        {/* LEFT SIDE */}
        <div className="text-white flex flex-col justify-center text-center lg:text-left">

          <p className="text-xs sm:text-sm mb-3 sm:mb-4 flex justify-center lg:justify-start items-center gap-2 opacity-90">
            ⭐ Trusted by 5,000+ Families
          </p>
          <h1 className="font-tiempos font-bold 
          text-[28px] sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[72px] 
          leading-[1.1]">
            Empower Your <br />
            Child’s Education <br />
            <span className="relative inline-block text-yellow-400">
              Your Way
             {/* Vector Underline */}
 <img
 src={Vector_Line}
 alt=""
 className="
 absolute 
 left-1/2 -translate-x-1/2
 bottom-[-20px]
 w-[150px] md:w-[341.9px]
 "
 />
 </span>
          </h1>

          <p className="mt-5 sm:mt-6 md:mt-8 text-sm sm:text-base text-gray-200 
          max-w-md sm:max-w-lg mx-auto lg:mx-0">
            Flexible, stress-free private school enrollment designed for homeschooling families.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <button className="bg-white text-gray-900 px-6 py-3 rounded-full w-full sm:w-auto">
              Enroll Now
            </button>
            <button className="border border-white px-6 py-3 rounded-full hover:bg-white/10 w-full sm:w-auto">
              Learn More
            </button>
          </div>

          {/* Features */}
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-5 text-xs sm:text-sm">
            <span className="flex items-center gap-2">
              <img src={Vector} className="w-4 h-4" />
              Flexible Learning
            </span>
            <span className="flex items-center gap-2">
              <img src={Vector} className="w-4 h-4" />
              No Mandatory Testing
            </span>
            <span className="flex items-center gap-2">
              <img src={Vector} className="w-4 h-4" />
              Official Transcripts
            </span>
          </div>
        </div>
{/* RIGHT SIDE LOGIN */}
<div className="flex justify-center lg:justify-end items-center w-full 
h-auto lg:h-screen">

  <div className="bg-white/30 backdrop-blur-xl rounded-3xl 
  w-full 
  max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
  
  /* 👇 small screens height fix */
  p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10
  
  shadow-xl border border-white/40">

    {/* Logo + Title */}
    <div className="flex flex-col items-center mb-4 sm:mb-5 md:mb-6">
      <img src={logo} alt="logo" className="h-12 sm:h-14 md:h-16 lg:h-20 mb-2 sm:mb-3" />
      <h2 className="text-[#0D428E] 
      text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
      font-semibold tracking-wide text-center">
        USER LOGIN
      </h2>
    </div>

    {/* Form */}
    <form className="flex flex-col gap-3 sm:gap-4 md:gap-5">

      {/* Email */}
      <div>
        <label className="text-gray-700 text-xs sm:text-sm">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter Your Email here"
          className="w-full mt-1.5 sm:mt-2 px-4 py-2 sm:py-2.5 md:py-3
          rounded-xl border border-white/50 
          bg-white/40 text-gray-800 placeholder-gray-500 
          focus:outline-none focus:ring-2 focus:ring-[#0D428E]/40"
        />
      </div>

      {/* Password */}
      <div>
        <label className="text-gray-700 text-xs sm:text-sm">
          Password
        </label>
        <input
          type="password"
          placeholder="Please Enter Your Password here"
          className="w-full mt-1.5 sm:mt-2 px-4 py-2 sm:py-2.5 md:py-3
          rounded-xl border border-white/50 
          bg-white/40 text-gray-800 placeholder-gray-500 
          focus:outline-none focus:ring-2 focus:ring-[#0D428E]/40"
        />
      </div>

      {/* Button */}
      <div className="flex justify-center pt-1">
        <button
          type="submit"
          className="w-full sm:w-[70%] md:w-[60%] lg:w-[55%] xl:w-[50%]
          bg-[#C6922E] text-white py-2.5 sm:py-3 
          rounded-xl text-sm sm:text-base md:text-lg 
          font-medium hover:opacity-90 transition"
        >
          Login
        </button>
      </div>
    </form>

    {/* Footer */}
    <p className="text-xs sm:text-sm text-gray-600 text-center mt-4 sm:mt-5 md:mt-6">
      if you haven't Registed yet ?{" "}
      <a href="#" className="text-[#0D428E] underline">
        Register Now
      </a>
    </p>

  </div>
</div>

      </div>
    </div>
  );
}