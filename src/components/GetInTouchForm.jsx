import React from "react";

// ✅ Different Icons
import emailIcon from "../assets/email-svg.png";
import phoneIcon from "../assets/phone-svg.png";
import locationIcon from "../assets/location-svg.png";

export default function ContactSection() {
  return (
    <section className="w-full flex justify-center py-[80px] bg-white">

      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1267px] px-[20px] md:px-[40px] flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]">

        {/* ================= LEFT SIDE ================= */}
        <div className="w-full lg:max-w-[402.33px] flex flex-col gap-[40px]">

          <h2
            style={{
              fontFamily: "Test Tiempos Fine, serif",
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            Contact Information
          </h2>

          {/* Email */}
          <div className="flex gap-[15px] items-start">
            <div className="w-[42px] h-[42px] rounded-full bg-[#1E3A8A] flex items-center justify-center shrink-0">
              <img src={emailIcon} alt="" className="w-[22px] h-[22px] object-contain" />
            </div>
            <div>
              <p className="font-semibold text-[14px]">Email</p>
              <p className="text-[13px] text-gray-500">
                support@spiralacademy.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-[15px] items-start">
            <div className="w-[42px] h-[42px] rounded-full bg-[#1E3A8A] flex items-center justify-center shrink-0">
              <img src={phoneIcon} alt="" className="w-[22px] h-[22px] object-contain" />
            </div>
            <div>
              <p className="font-semibold text-[14px]">Phone</p>
              <p className="text-[13px] text-gray-500">(555) 123-4567</p>
              <p className="text-[12px] text-gray-400">
                Monday-Friday, 9am-5pm EST
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="flex gap-[15px] items-start">
            <div className="w-[42px] h-[42px] rounded-full bg-[#1E3A8A] flex items-center justify-center shrink-0">
              <img src={locationIcon} alt="" className="w-[22px] h-[22px] object-contain" />
            </div>
            <div>
              <p className="font-semibold text-[14px]">Mailing Address</p>
              <p className="text-[13px] text-gray-500">
                Spiral Academy <br />
                PO Box 12345 <br />
                Denver, CO 80202
              </p>
            </div>
          </div>

          {/* Office Hours */}
          <div className="bg-[#f3f4f6] rounded-[20px] p-[20px]">
            <p className="font-semibold text-[14px] mb-[10px]">
              Office Hours
            </p>
            <p className="text-[13px] text-gray-500">
              Monday-Friday: 9:00am - 5:00pm EST
            </p>
            <p className="text-[13px] text-gray-500">
              Saturday-Sunday: Closed
            </p>
          </div>

        </div>

        {/* ================= RIGHT SIDE FORM ================= */}
        <div
          className="
            w-full 
            lg:max-w-[804.66px]
            bg-white
            border border-[#EDEDED]
            rounded-[30px]
            p-[25px] md:p-[40px] lg:p-[60px]
            shadow-[0px_4px_55px_0px_#0000000D]
            flex flex-col gap-[30px] lg:gap-[40px]
          "
        >

          {/* Heading */}
          <h2
            style={{
              fontFamily: "Test Tiempos Fine, serif",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            Send Us a Message
          </h2>

          {/* Form */}
          <form className="flex flex-col gap-[20px]">

            {/* Name */}
            <div>
              <label className="text-[14px] mb-[5px] block">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="
                  w-full
                  h-[50px]
                  px-[20px]
                  border border-[#EDEDED]
                  rounded-[10px]
                  outline-none
                "
              />
            </div>

            {/* Email + Phone */}
            <div className="flex flex-col md:flex-row gap-[20px]">
              
              <div className="w-full">
                <label className="text-[14px] mb-[5px] block">Email</label>
                <input
                  type="email"
                  placeholder="youremail.com"
                  className="
                    w-full
                    h-[50px]
                    px-[20px]
                    border border-[#EDEDED]
                    rounded-[10px]
                    outline-none
                  "
                />
              </div>

              <div className="w-full">
                <label className="text-[14px] mb-[5px] block">
                  Phone (Optional)
                </label>
                <input
                  type="text"
                  placeholder="(555) 123-4567"
                  className="
                    w-full
                    h-[50px]
                    px-[20px]
                    border border-[#EDEDED]
                    rounded-[10px]
                    outline-none
                  "
                />
              </div>

            </div>

            {/* Subject */}
            <div>
              <label className="text-[14px] mb-[5px] block">Subject</label>
              <input
                type="text"
                placeholder="Select a subject"
                className="
                  w-full
                  h-[50px]
                  px-[20px]
                  border border-[#EDEDED]
                  rounded-[10px]
                  outline-none
                "
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-[14px] mb-[5px] block">Message</label>
              <textarea
                placeholder="Tell us how we can help..."
                className="
                  w-full
                  h-[140px]
                  px-[20px]
                  py-[15px]
                  border border-[#EDEDED]
                  rounded-[10px]
                  outline-none
                  resize-none
                "
              />
            </div>

            {/* Button */}
            <button
              className="
                w-full
                h-[55px]
                bg-[#F4B63D]
                rounded-full
                text-[15px]
                font-semibold
                shadow-md
                hover:opacity-90
                transition
              "
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}