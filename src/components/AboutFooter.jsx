import React from "react";

export default function AboutFooter() {
  return (
    <footer className="bg-[#0B1A3A] text-white px-5 sm:px-10 lg:px-[80px] py-12">

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">

        {/* About */}
        <div>
          <h3 className="font-semibold text-[16px] mb-4">
            About
          </h3>
          <ul className="space-y-2 text-[14px] text-gray-300">
            <li className="hover:text-white transition">Our Mission</li>
            <li className="hover:text-white transition">Our Story</li>
            <li className="hover:text-white transition">How It Works</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-[16px] mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-[14px] text-gray-300">
            <li>Enrollment</li>
            <li>State Compliance</li>
            <li>Courses</li>
            <li>Co-Op Program</li>
            <li>Premium Services</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-[16px] mb-4">
            Resources
          </h3>
          <ul className="space-y-2 text-[14px] text-gray-300">
            <li>Parent Portal</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-semibold text-[16px] mb-4">
            Connect
          </h3>
          <ul className="space-y-2 text-[14px] text-gray-300 break-words">
            <li>support@spiralacademy.com</li>
            <li>(555) 123-4567</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-8"></div>

      {/* Bottom Text */}
      <p className="text-center text-gray-400 text-[12px] sm:text-[13px]">
        © 2026 Spiral Academy. All rights reserved.
      </p>
    </footer>
  );
}