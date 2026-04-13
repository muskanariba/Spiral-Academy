import React from "react";

const data = [
  {
    title: "Modules",
    desc: "Structured lessons with clear learning objectives",
  },
  {
    title: "Slides",
    desc: "Visual presentations and key takeaways",
  },
  {
    title: "Quizzes / Exercises",
    desc: "Interactive activities to reinforce learning",
  },
  {
    title: "Downloadable Templates",
    desc: "Practical tools you can use immediately",
  },
];

export default function CourseIncludes() {
  return (
    <section className="w-full bg-white py-[40px] md:py-[40px] px-5 md:px-[60px]">
      
      <div className="max-w-[1200px] mx-auto">
        
        {/* Heading */}
        <h2
          className="text-center mb-[40px] md:mb-[30px]"
          style={{
            fontFamily: "Test Tiempos Fine, serif",
            fontSize: "36.1px",
            fontWeight: 700,
          }}
        >
          Each Course Includes
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          
          {data.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#EDEDED]
                rounded-[20px]
                border border-[#E0E0E0]
                text-center
                flex flex-col justify-center
              "
              style={{
                height: "193.45px",
                padding: "24px",
              }}
            >
              <h3
                className="mb-[10px]"
                style={{
                  fontFamily: "Test Tiempos Fine, serif",
                  fontSize: "19.6px",
                  fontWeight: 600,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontFamily: "Aceh Soft",
                  fontSize: "14.6px",
                  color: "#6B7280",
                  lineHeight: "24.29px",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}