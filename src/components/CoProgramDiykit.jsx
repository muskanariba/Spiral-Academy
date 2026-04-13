import React from "react";
import checkIcon from "../assets/vector.png"; // 👈 your vector icon

export default function CoProgramDiykit() {
  return (
    <section className="bg-white py-10 px-4">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Co-Op <span className="text-[#FFD166]">DIY Kit</span>
        </h2>

        <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
          Starting your own co-op? Download our comprehensive DIY kit with everything you need
          to organize and launch a successful homeschool co-op.
        </p>
      </div>

      <div className="mt-10 max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border p-8">
        <h3 className="text-center font-medium mb-6">
          Kit Includes:
        </h3>

        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
          
          {/* Left */}
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <img src={checkIcon} alt="check" className="w-4 h-4" />
              Co-op startup checklist
            </li>
            <li className="flex items-center gap-2">
              <img src={checkIcon} alt="check" className="w-4 h-4" />
              Class planning templates
            </li>
            <li className="flex items-center gap-2">
              <img src={checkIcon} alt="check" className="w-4 h-4" />
              Communication templates
            </li>
          </ul>

          {/* Right */}
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <img src={checkIcon} alt="check" className="w-4 h-4" />
              Sample bylaws and policies
            </li>
            <li className="flex items-center gap-2">
              <img src={checkIcon} alt="check" className="w-4 h-4" />
              Registration and waiver forms
            </li>
            <li className="flex items-center gap-2">
              <img src={checkIcon} alt="check" className="w-4 h-4" />
              Event planning guides
            </li>
          </ul>

        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-[#FFD166] text-black px-6 py-3 rounded-full shadow hover:bg-yellow-500 transition">
            Download DIY Kit
          </button>
        </div>
      </div>
    </section>
  );
}