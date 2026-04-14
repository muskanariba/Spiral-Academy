import React from "react";
import vector from "../assets/Vector.png";

const microCourses = [
  {
    title: "Cognitive Sovereignty",
    desc: "Understand how to protect your child's independent thinking and cultivate critical reasoning skills.",
    duration: "1 week",
  },
  {
    title: "Basic Holistic Wellness",
    desc: "Introduction to holistic health practices for children including nutrition, movement, and natural remedies.",
    duration: "1 week",
  },
  {
    title: "Emotional Mastery",
    desc: "Tools and techniques for teaching children emotional regulation, resilience, and self-awareness.",
    duration: "1 week",
  },
];

export default function CoursesMini() {
  return (
    <section className="w-full py-[10px] flex justify-center">

      {/* CONTENT CONTAINER */}
      <div className="w-full max-w-[1440px] px-[20px] md:px-[40px] lg:px-[79px]">

        {/* Heading */}
        <div className="text-center mb-[40px]">
          <h2
            style={{
              fontFamily: "Test Tiempos Fine, serif",
              fontSize: "36.1px",
              fontWeight: 700,
            }}
          >
            Micro-<span className="text-[#FFD166]">Courses</span>
          </h2>

          <p className="text-[#6B7280] text-[14px] mt-[10px]">
Short, focused courses that can be completed in one week or less.          </p>
        </div>

        {/* GRID */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-[20px] lg:gap-[19px]
            justify-items-center
            items-stretch
          "
        >
          {microCourses.map((course, index) => (
            <div
              key={index}
              className="
                w-full
                sm:max-w-[360px]
                lg:max-w-[402.33px]
                h-full
                bg-white
                border border-[#EDEDED]
                rounded-[30px]
                pt-[39px]
                pr-[40px]
                pb-[30px]
                pl-[40px]
                flex flex-col
              "
            >

              {/* CONTENT */}
              <div className="flex flex-col gap-[10px]">
                <h3 className="text-[18px] font-semibold leading-[1.4]">
                  {course.title}
                </h3>

                <p className="text-[14px] text-[#6B7280] leading-[1.6]">
                  {course.desc}
                </p>

                {/* META */}
                <div className="flex items-center gap-[20px] text-[13px] text-[#6B7280]">
                  <div className="flex items-center gap-[6px]">
                    <img
                      src={vector}
                      alt=""
                      className="w-[14px] h-[14px]"
                    />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>

              {/* BUTTON */}
              <button
                className="
                  mt-[15px]
                  w-full
                  h-[44px]
                  border border-[#0D428E]
                  text-[#0D428E]
                  rounded-full
                  text-[14px]
                  font-medium
                  transition-all duration-300
                  hover:bg-[#0D428E] hover:text-white
                "
              >
                View Course
              </button>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}