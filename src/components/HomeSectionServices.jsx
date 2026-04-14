import React from "react";
import Services1 from "../assets/Services-1.png";
import Services2 from "../assets/Services-2.png";
import Services3 from "../assets/Services-3.png";
import Services4 from "../assets/Services-4.png";

export default function ServicesSection() {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-[#1f4b8f] rounded-2xl p-6 md:p-10 text-white">

        {/* Heading */}
        <h2 className="font-tiempos text-center font-bold text-3xl sm:text-4xl md:text-5xl leading-tight md:leading-[50px] py-5">
          Comprehensive Support <br />
          <span className="text-yellow-400">for Your Journey</span>
        </h2>

        <div className="space-y-10">

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <img
              src={Services1}
              alt="Enrollment"
              className="rounded-xl w-full h-auto max-h-[250px] object-cover"
            />
            <div className="text-center md:text-left flex flex-col gap-4 sm:gap-6 w-full md:max-w-md mx-auto md:mx-0">
              <h3 className="font-tiempos text-2xl sm:text-3xl md:text-4xl font-semibold">
                Enrollment
              </h3>
              <p className="text-sm sm:text-base text-gray-200">
                Legal umbrella coverage establishing your homeschool as a private school entity.
              </p>
              <button className="border border-white px-4 py-2 rounded-full text-sm sm:text-base hover:bg-white hover:text-blue-900 transition w-fit mx-auto md:mx-0">
                Contact
              </button>
            </div>
          </div>

          {/* Row 2 (reverse) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="text-center md:text-left flex flex-col gap-4 sm:gap-6 w-full md:max-w-md mx-auto md:mx-0 order-2 md:order-1">
              <h3 className="font-tiempos text-2xl sm:text-3xl md:text-4xl font-semibold">
                Transcript Management
              </h3>
              <p className="text-sm sm:text-base text-gray-200">
                Professional formatting and secure storage of your student's academic records and grades.
              </p>
              <button className="border border-white px-4 py-2 rounded-full text-sm sm:text-base hover:bg-white hover:text-blue-900 transition w-fit mx-auto md:mx-0">
                Contact
              </button>
            </div>
            <img
              src={Services2}
              alt="Transcript Management"
              className="rounded-xl w-full h-auto max-h-[250px] object-cover order-1 md:order-2"
            />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <img
              src={Services3}
              alt="Graduation & Diplomas"
              className="rounded-xl w-full h-auto max-h-[250px] object-cover"
            />
            <div className="text-center md:text-left flex flex-col gap-4 sm:gap-6 w-full md:max-w-md mx-auto md:mx-0">
              <h3 className="font-tiempos text-2xl sm:text-3xl md:text-4xl font-semibold">
                Graduation & Diplomas
              </h3>
              <p className="text-sm sm:text-base text-gray-200">
                Official high school diplomas recognizing your student's completion of requirements.
              </p>
              <button className="border border-white px-4 py-2 rounded-full text-sm sm:text-base hover:bg-white hover:text-blue-900 transition w-fit mx-auto md:mx-0">
                Contact
              </button>
            </div>
          </div>

          {/* Row 4 (reverse) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="text-center md:text-left flex flex-col gap-4 sm:gap-6 w-full md:max-w-md mx-auto md:mx-0 order-2 md:order-1">
              <h3 className="font-tiempos text-2xl sm:text-3xl md:text-4xl font-semibold">
                Academic Support
              </h3>
              <p className="text-sm sm:text-base text-gray-200">
                Consultations and guidance for curriculum choices, high school planning, and more.
              </p>
              <button className="border border-white px-4 py-2 rounded-full text-sm sm:text-base hover:bg-white hover:text-blue-900 transition w-fit mx-auto md:mx-0">
                Contact
              </button>
            </div>
            <img
              src={Services4}
              alt="Academic Support"
              className="rounded-xl w-full h-auto max-h-[250px] object-cover order-1 md:order-2"
            />
          </div>

        </div>
      </div>
    </div>
  );
}