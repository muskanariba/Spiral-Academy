import React from "react";
import vector from "../assets/Vector.png"; // apni image yahan use kro

const courses = [
  {
    title: "Homeschooling 101: How to Homeschool",
    desc: "A comprehensive introduction to homeschooling covering curriculum selection, day routines, record-keeping, and educational philosophies.",
    modules: "8 Modules",
    duration: "4 weeks",
  },
  {
    title: "Special Needs Homeschooling Basics",
    desc: "Learn strategies for adapting curriculum, accessing resources, and creating individualized education plans for children with special needs.",
    modules: "6 Modules",
    duration: "3 weeks",
  },
  {
    title: "Teen Independence & Alternative Education Paths",
    desc: "Explore options for high school students including dual enrollment, apprenticeships, entrepreneurship, and non-traditional paths to success.",
    modules: "7 Modules",
    duration: "4 weeks",
  },
  {
    title: "Raising a Conscious Child",
    desc: "Develop mindful parenting practices that honor your child’s unique developmental needs, emotional intelligence, and spiritual growth.",
    modules: "10 Modules",
    duration: "5 weeks",
  },
];

export default function CoursesFull() {
  return (
    <section className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-[79px] py-16">
      
      {/* Heading */}
        <h2
          className="text-center mb-[40px] md:mb-[30px]"
          style={{
            fontFamily: "Test Tiempos Fine, serif",
            fontSize: "36.1px",
            fontWeight: 700,
          }}
        >
          Full <span className="text-[#FFD166]">Courses</span>
        </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-[50px]">
        {courses.map((course, index) => (
          <div
            key={index}
            className="relative bg-white border border-[#EDEDED] rounded-[30px] p-6 md:p-8 lg:p-[40px] flex flex-col justify-between min-h-[260px]"
          >
          

            {/* Content */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 leading-snug">
                {course.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                {course.desc}
              </p>
{/* Meta */}
<div className="flex items-center gap-[20px] text-[13px] text-[#6B7280] mb-[20px]">

  <div className="flex items-center gap-[6px]">
    <img src={vector} alt="" className="w-[14px] h-[14px]" />
    <span>{course.modules}</span>
  </div>

  <div className="flex items-center gap-[6px]">
    <img src={vector} alt="" className="w-[14px] h-[14px]" />
    <span>{course.duration}</span>
  </div>

</div>
            </div>

            {/* Button */}
            <button className="w-full border border-[#0D428E] text-[#0D428E] py-3 rounded-full text-sm font-medium hover:bg-[#0D428E] hover:text-white transition-all duration-300">
              View Course
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}