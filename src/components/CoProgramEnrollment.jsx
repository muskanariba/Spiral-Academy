

import React from "react";
import checkIcon from "../assets/vector.png"; // 👈 import

export default function CoProgramEnrollment() {
  return (
    <section className="py-16 px-4 bg-[#F9FAFB]">
      <h2 className="text-center text-2xl md:text-3xl font-semibold">
        Co-Op Enrollment /{" "}
        <span className="   text-[#FFD166]">Leader Portal</span>
      </h2>

      <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Leader Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border">
          <h3 className="font-semibold text-lg mb-2">
            For Co-Op Leaders
          </h3>

          <p className="text-gray-500 text-sm mb-4">
            Access tools and resources to organize and manage your homeschool co-op effectively.
          </p>

          <ul className="space-y-3 text-sm text-gray-600">
            {[
              "Member management dashboard",
              "Class scheduling and planning tools",
              "Communication templates and resources",
              "Group enrollment discount codes",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <img src={checkIcon} alt="check" className="w-4 h-4" />
                {item}
              </li>
            ))}
          </ul>

          <button className="mt-6 w-full bg-blue-900 text-white py-3 rounded-full">
            Register as Co-Op Leader
          </button>
        </div>

        {/* Member Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border">
          <h3 className="font-semibold text-lg mb-2">
            For Co-Op Members
          </h3>

          <p className="text-gray-500 text-sm mb-4">
            Join a registered co-op and enjoy group enrollment benefits.
          </p>

          <ul className="space-y-3 text-sm text-gray-600">
            {[
              "Discounted enrollment rates",
              "Access to co-op resources and events",
              "Connect with other homeschool families",
              "Participate in group classes and activities",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <img src={checkIcon} alt="check" className="w-4 h-4" />
                {item}
              </li>
            ))}
          </ul>

          <button className="mt-6 w-full border border-blue-900 text-blue-900 py-3 rounded-full">
            Join a Co-Op
          </button>
        </div>
      </div>
    </section>
  );
};

