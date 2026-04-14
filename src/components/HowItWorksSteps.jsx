import React from "react";

const steps = [
  {
    number: "01",
    title: "Enrollment",
    desc: "Complete our simple online enrollment form with your student and family information. Select your state of residence to ensure we provide the correct compliance requirements for your location.",
    points: [
      "Fill out student information (name, age, grade level)",
      "Provide parent/guardian contact information",
      "Choose your family size tier for pricing",
      "Submit payment securely online",
    ],
  },
  {
    number: "02",
    title: "State Compliance & PDF Packets",
    desc: "Receive a state-specific compliance packet with everything needed.",
    points: [
      "Downloadable PDF packet specific to your state",
      "Clear instructions on state requirements",
      "Pre-filled forms where applicable",
      "Compliance checklist and timeline",
    ],
  },
  {
    number: "03",
    title: "Portfolio & Transcript Support",
    desc: "Access your parent portal to upload work samples and track records.",
    points: [
      "Secure online portfolio storage",
      "Course registration and tracking tools",
      "Draft transcript generation for high schoolers",
      "Portfolio review service (optional add-on)",
    ],
  },
  {
    number: "04",
    title: "Attendance Reporting",
    desc: "Submit attendance records according to requirements.",
    points: [
      "Downloadable attendance log templates",
      "Easy upload through parent portal",
      "Automated reminders for deadlines",
      "State-specific submission schedules",
    ],
  },
  {
    number: "05",
    title: "Parent Responsibilities",
    desc: "You guide the day-to-day education while we provide the framework.",
    points: [
      "Select and implement your own curriculum",
      "Provide daily instruction and learning activities",
      "Track attendance and maintain records",
      "Submit required reports and documentation",
    ],
  },
];

export default function HowItWorksSteps() {
  return (
    <section className="w-full flex justify-center bg-white">

      {/* ✅ FIGMA CONTAINER */}
      <div
        className="
          w-full max-w-[1440px]
          pt-[80px] pb-[120px]
          px-[20px] md:px-[40px] lg:px-[79px]
          flex flex-col gap-[60px]
        "
      >
        {steps.map((step, index) => (
          <div
            key={index}
            className="
              flex flex-col md:flex-row
              items-start
              gap-[30px] md:gap-[60px]
            "
          >

            {/* LEFT CIRCLE */}
            <div className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] flex-shrink-0">
              <div className="w-full h-full rounded-full flex items-center justify-center bg-gradient-to-b from-[#072E6E] to-[#0D428E]">
                <span
                  className="text-[#F4B63D]"
                  style={{
                    fontFamily: "Test Tiempos Fine, serif",
                    fontSize: "48px",
                  }}
                >
                  {step.number}
                </span>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex-1 max-w-[850px]">

              {/* TITLE */}
              <h2
                className="text-[26px] md:text-[36px] leading-[38px] md:leading-[52px] text-[#1A1A1A]"
                style={{
                  fontFamily: "Test Tiempos Fine, serif",
                  fontWeight: 700,
                }}
              >
                {step.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-3 text-[14px] md:text-[16px] text-[#6B6B6B] leading-[24px]">
                {step.desc}
              </p>

              {/* BULLETS */}
              <ul className="mt-5 flex flex-col gap-[12px]">
                {step.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[14px] md:text-[16px] text-[#4A4A4A] leading-[24px]"
                  >

                    {/* ✅ Yellow circle + WHITE tick */}
                    <div className="mt-[4px] w-[20px] h-[20px] rounded-full bg-[#FFD166] flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 20 20">
                        <path
                          d="M5 10L8.5 13.5L15 7"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    </div>

                    {point}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}