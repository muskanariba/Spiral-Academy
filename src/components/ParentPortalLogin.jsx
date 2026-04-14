import React from "react";

export default function ParentPortalLogin() {
  return (
    <section
      className="
        w-full
        h-[692px]
        bg-gray-100
        py-[80px]
        px-6 md:px-12 lg:px-20   /* ✅ left/right spacing added */
        flex
        justify-center
        items-center
      "
    >
      
      {/* Card */}
      <div
        className="
          w-full max-w-[1397px]   /* ✅ responsive + centered */
          h-[532px]
          bg-white
          rounded-[30px]
          border border-gray-200
          p-[60px]
          flex flex-col
          justify-center
          gap-[39px]
        "
      >
        
        {/* Title */}
        <h2 className="text-center text-3xl font-semibold text-gray-800">
          Portal Login
        </h2>

        {/* Form */}
        <form className="w-full max-w-[900px] mx-auto flex flex-col gap-[39px]">
          
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="
                w-full h-[48px] px-4
                border border-gray-200
                rounded-md
                focus:outline-none
                focus:ring-2 focus:ring-[#FFD166]
              "
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="
                w-full h-[48px] px-4
                border border-gray-200
                rounded-md
                focus:outline-none
                focus:ring-2 focus:ring-[#FFD166]
              "
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              w-full h-[48px]
              bg-[#FFD166]
              text-gray-900
              font-medium
              rounded-full
              shadow-sm
              hover:brightness-95
              transition
            "
          >
            Login to Portal
          </button>
        </form>

        {/* Support */}
        <p className="text-center text-xs text-gray-500">
          Need help?{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            Contact Support
          </span>
        </p>

      </div>
    </section>
  );
}