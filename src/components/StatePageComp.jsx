import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function StatePageComp() {
  const { state } = useParams();
  const formattedState = state?.replace(/-/g, " ");

  return (
    <div className="max-w-[1440px] mx-auto bg-white">

      {/* HERO SECTION (MODERN + BG GRAY) */}
      <div className="relative bg-gray-100 px-4 sm:px-6 lg:px-[79px] py-16 sm:py-24 overflow-hidden">

        {/* soft background glow */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,rgba(13,66,142,0.15),transparent)]"></div>

        <div className="relative text-center">

          <span className="inline-block px-4 sm:px-5 py-2 bg-white/80 backdrop-blur text-[#0D428E] rounded-full text-xs sm:text-sm font-semibold border border-gray-200 shadow-sm">
            Homeschool Support in {formattedState}
          </span>

          <h1 className="mt-6 text-[30px] sm:text-[42px] md:text-[56px] font-bold text-black leading-tight">
            Homeschooling in{" "}
            <span className="text-[#FFD166]">{formattedState}</span>
          </h1>

          <p className="mt-5 text-gray-600 max-w-[750px] mx-auto text-sm sm:text-base leading-7">
            Get structured homeschool support, academic guidance, and documentation assistance for families in {formattedState}.
          </p>
        <Link to="/enrollment">
          <button className="mt-8 px-7 py-3 bg-[#0D428E] text-white rounded-[14px] hover:bg-[#0b3570] transition shadow-md">
            Start Enrollment
          </button>
          </Link>
        </div>

      </div>

      {/* OVERVIEW */}
      <SectionTitle title="Overview Support" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-[79px] mt-8 mb-20">

        <div className="p-6 rounded-[22px] bg-white border border-gray-200 hover:shadow-lg transition">
          <h3 className="text-[#0D428E] font-semibold text-lg mb-2">
            Flexible Learning
          </h3>
          <p className="text-gray-600 text-sm leading-6">
            Families in {formattedState} can choose curriculum and schedule freely.
          </p>
        </div>

        <div className="p-6 rounded-[22px] bg-white border border-gray-200 hover:shadow-lg transition border-l-4 border-l-[#FFD166]">
          <h3 className="text-black font-semibold text-lg mb-2">
            Parent-Led Education
          </h3>
          <p className="text-gray-600 text-sm leading-6">
            Parents stay fully in control of education decisions.
          </p>
        </div>

        <div className="p-6 rounded-[22px] bg-white border border-gray-200 hover:shadow-lg transition">
          <h3 className="text-black font-semibold text-lg mb-2">
            Structured Support
          </h3>
          <p className="text-gray-600 text-sm leading-6">
            We provide guidance without limiting learning freedom.
          </p>
        </div>

      </div>

      {/* STRUGGLES */}
      <SectionTitle title="Where Families Struggle" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-[79px] mt-8 mb-20">

        {[
          ["Legal Requirements", "Understanding homeschool laws"],
          ["Record Keeping", "Managing academic progress"],
          ["Transcripts", "Official academic records"],
          ["Graduation Proof", "Verification for future education"]
        ].map((item, i) => (
          <div
            key={i}
            className="flex gap-3 p-5 rounded-[20px] bg-white border border-gray-200 hover:shadow-lg transition"
          >
            <div className="w-10 h-10 min-w-[40px] rounded-full bg-[#0D428E] flex items-center justify-center">
              <svg className="w-5 h-5 text-[#FFD166]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div>
              <h3 className="text-black font-semibold text-sm mb-1">
                {item[0]}
              </h3>
              <p className="text-gray-500 text-xs leading-5">
                {item[1]}
              </p>
            </div>
          </div>
        ))}

      </div>

      {/* HELP */}
      <SectionTitle title="How Spiral Academy Helps" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-4 sm:px-6 lg:px-[79px] mt-8 mb-20">

        {["Enrollment Support", "Academic Records", "Official Transcripts", "Ongoing Guidance"].map((item, i) => (
          <div key={i} className="p-5 rounded-[22px] bg-white/70 backdrop-blur border border-gray-200 hover:shadow-lg transition text-center">
            <div className="w-9 h-9 mx-auto mb-3 rounded-full bg-[#FFD166]/30 flex items-center justify-center">
              <span className="w-2 h-2 bg-[#0D428E] rounded-full"></span>
            </div>
            <p className="text-black font-medium text-sm">{item}</p>
          </div>
        ))}

      </div>

      {/* WHY US */}
      <SectionTitle title="Why Families Choose Us" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-[79px] mt-8 mb-24">

        {[
          ["Affordable Plan", "$65/year complete support"],
          ["No Strict Curriculum", "Freedom learning approach"],
          ["Multi-State Support", "Works across regions"],
          ["Trusted System", "Reliable academic guidance"]
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-[24px] bg-gradient-to-b from-white to-[#f8f9ff] border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition"
          >
            <div className="w-11 h-11 rounded-full bg-[#0D428E] flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h3 className="text-black font-semibold text-lg mb-1">{item[0]}</h3>
            <p className="text-gray-600 text-sm leading-6">{item[1]}</p>
          </div>
        ))}

      </div>
{/* CTA */}
<div className="relative mx-4 sm:mx-6 lg:mx-[79px] mb-20 bg-[#0D428E] text-white rounded-[32px] p-8 sm:p-12 text-center overflow-hidden shadow-2xl">

  {/* glow background */}
  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_top,white,transparent)]"></div>

  {/* soft shapes */}
  <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

  <div className="relative">

    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
      Start homeschooling in {formattedState} with confidence
    </h2>

    <p className="mt-4 text-white/80 max-w-[700px] mx-auto text-sm sm:text-base">
      Get structured documentation, transcripts, and academic support while keeping full parental control.
    </p>

    <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center">

<Link to="/enrollment">
      <button className="px-7 py-3 bg-[#FFD166] text-[#0D428E] font-semibold rounded-[14px] hover:scale-105 transition">
        Enroll Now
      </button>
      </Link>
    <Link to="/">
      <button className="px-7 py-3 border border-white rounded-[14px] hover:bg-white hover:text-[#0D428E] transition">
        Learn More
      </button>
      </Link>

    </div>

  </div>
</div>
    </div>
  );
}

/* ---------------- SECTION TITLE ---------------- */

function SectionTitle({ title }) {
  const words = title.split(" ");
  const lastWord = words.pop();
  const rest = words.join(" ");

  return (
    <div className="text-center mt-16 sm:mt-20 mb-10 px-4">
      <h2
        className="font-bold"
        style={{
          fontFamily: "Test Tiempos Fine VF",
          fontSize: "clamp(24px, 3vw, 36px)",
          lineHeight: "1.3",
        }}
      >
        {rest} <span className="text-[#FFD166]">{lastWord}</span>
      </h2>
      
    </div>

    
  );
}