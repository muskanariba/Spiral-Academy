import React from "react";

export default function ParentReportingSchedule() {
  const schedule = [
    {
      title: "Quarterly Reports",
      desc: "Submit attendance logs every quarter through your parent portal.",
    },
    {
      title: "Annual Portfolio Review",
      desc: "Optional annual portfolio review available through premium services.",
    },
    {
      title: "Course Registration",
      desc: "High school students should register courses at the beginning of each school year.",
    },
  ];

  return (
    <section className="w-full bg-[#F3F4F6] py-14 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">

        {/* Heading */}
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-[#1A1A1A] mb-10">
          Parent Reporting Schedule
        </h2>

        {/* Card */}
        <div className="bg-[#F8F8F9] border border-gray-200 rounded-3xl px-6 sm:px-10 py-6 sm:py-8">

          <div className="space-y-6">
            {schedule.map((item, index) => (
              <div key={index}>

                {/* Title */}
                <h3 className="text-[16px] sm:text-[17px] font-semibold text-[#1A1A1A] mb-1">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}