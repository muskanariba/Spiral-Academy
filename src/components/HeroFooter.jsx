import React from "react";
import Logo from "../assets/logo.png";
import EmailIcon from "../assets/email.png"; // general inquiry icon
import TuitionIcon from "../assets/Tuition.png"; // tuition icon

export default function HeroFooter() {
  return (
    <div className="relative py-16 px-4 overflow-hidden bg-white font-[Inter]">

      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="absolute top-0 left-0 w-72 h-72 bg-gray-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gray-200/20 rounded-full blur-3xl"></div>

      {/* MAIN FOOTER */}
      <div className="relative max-w-7xl mx-auto rounded-2xl px-6 md:px-10 py-12 text-[#1f2a37] shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden bg-white">

        {/* Figma Gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,66,142,0.7)_-21.77%,rgba(217,232,245,0)_100%)]"></div>

        {/* CONTENT */}
        <div className="relative">

          <div className="grid gap-10 md:grid-cols-4">

            {/* LOGO SECTION */}
            <div className="flex flex-col items-start">

              <img
                src={Logo}
                alt="Spiral Academy"
                className="w-28 h-28 object-contain mb-3"
              />

              <p className="mt-3 text-[14.17px] leading-[20.24px] text-gray-700 max-w-[260px]">
                Supporting homeschooling families with private school enrollment,
                minimal oversight, and maximum flexibility.
              </p>

            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-[15px]">Quick Links</h3>
              <ul className="space-y-2 text-[14.17px] leading-[20.24px]">
                <li className="hover:underline cursor-pointer">Home</li>
                <li className="hover:underline cursor-pointer">About Us</li>
                <li className="hover:underline cursor-pointer">Services & Fees</li>
                <li className="hover:underline cursor-pointer">Enrollment Forms</li>
                <li className="hover:underline cursor-pointer">FAQs</li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-4 text-[15px]">Resources</h3>
              <ul className="space-y-2 text-[14.17px] leading-[20.24px]">
                <li className="hover:underline cursor-pointer">Colorado Homeschool Law</li>
                <li className="hover:underline cursor-pointer">Curriculum Ideas</li>
                <li className="hover:underline cursor-pointer">High School Planning</li>
                <li className="hover:underline cursor-pointer">Transcript Requests</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4 text-[15px]">Contact Us</h3>
              <div className="space-y-4 text-[14.17px] leading-[20.24px]">

                {/* General Inquiry */}
                <div className="flex items-start gap-3">
                  <img src={EmailIcon} alt="email" className="w-4 h-4 mt-1" />
                  <div>
                    <p className="font-medium">General Inquiries</p>
                    <p>info@spiralacademy.com</p>
                  </div>
                </div>

                {/* Tuition */}
                <div className="flex items-start gap-3">
                  <img src={TuitionIcon} alt="tuition" className="w-4 h-4 mt-1" />
                  <div>
                    <p className="font-medium">Tuition & Payments</p>
                    <p>tuition@spiralacademy.com</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Notice */}
          <div className="mt-10 bg-gradient-to-r from-yellow-200 to-yellow-200 rounded-xl px-5 py-4 text-[14px] shadow">
            <p className="font-semibold mb-1">⚖ Important Legal Notice</p>
            <p className="leading-[20.24px]">
              Information on this website is provided for reference only and is not considered
              legal advice. Parents/guardians are solely responsible for ensuring compliance
              with their local and state homeschooling laws and regulations.
            </p>
          </div>

          {/* Bottom */}
          <div className="mt-10 border-t border-gray-400/40 pt-5 flex flex-col md:flex-row justify-between items-center gap-4 text-[14.17px] leading-[20.24px]">

            <p>© 2026 Spiral Academy. Independent organization</p>

            <div className="flex gap-4 flex-wrap justify-center">
              <span className="hover:underline cursor-pointer">Privacy Policy</span>
              <span className="hover:underline cursor-pointer">Terms of Service</span>
              <span className="bg-gray-200 px-2 py-1 rounded text-xs shadow-sm">
                Powered by Drupal
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}