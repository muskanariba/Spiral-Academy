import React from "react";

export default function EducationHero() {
  return (
    <div className="bg-white py-16 px-4">

      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="font-tiempos font-bold text-[32px] md:text-[50px] leading-[50px] text-gray-900 mb-4">
          Education Without Limits
        </h2>

        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6">
          We believe that every family has the right to direct their child’s education.
          Spiral Academy welcomes families from all backgrounds, philosophies,
          and learning styles. Join a community that celebrates your freedom to teach.
        </p>

        <h3 className="font-semibold text-gray-800 mb-6">
          Start Your Child’s Learning Journey Today
        </h3>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-blue-900 text-white px-6 py-2 rounded-full text-sm font-medium">
            Enroll Now
          </button>

          <button className="border border-blue-900 text-blue-900 px-6 py-2 rounded-full text-sm font-medium">
            Contact Us
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-14 bg-white rounded-2xl shadow-md p-8 md:p-12 text-center">
        <div className="flex justify-center mb-4">
          {Array(5).fill().map((_, i) => (
            <span key={i} className="text-yellow-400 text-lg">★</span>
          ))}
        </div>

        <p className="text-gray-800 font-medium text-sm md:text-lg mb-4">
          "Spiral Academy gave us the legal peace of mind we needed while letting us
          teach exactly how we wanted."
        </p>

        <p className="text-gray-500 text-sm">
          – Sarah M., Parent
        </p>
      </div>

    </div>
  );
}