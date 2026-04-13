import React, { useState } from "react";

const faqData = [
  {
    title: "Enrollment",
    items: [
      "How do I enroll with Spiral Academy?",
      "Can I enroll mid-year?",
      "What documents do I need to enroll?",
      "Can I withdraw from Spiral Academy if needed?",
    ],
  },
  {
    title: "Payments",
    items: [
      "What are the enrollment fees?",
      "Are there any hidden fees?",
      "Do you offer payment plans?",
      "Is the enrollment fee refundable?",
    ],
  },
  {
    title: "Co-Op",
    items: [
      "How do I start a co-op through Spiral Academy?",
      "What benefits do co-op members receive?",
      "How does the leader commission work?",
      "Can I join an existing co-op?",
    ],
  },
  {
    title: "Courses",
    items: [
      "Are courses required for enrollment?",
      "Can students earn credit for paid electives?",
      "Are courses self-paced?",
      "Do I get lifetime access to purchased courses?",
    ],
  },
  {
    title: "State Compilance",
    items: [
      "Are courses required for enrollment?",
      "What if my state isn't listed?",
      "Does Spiral Academy file paperwork with the state on my behalf?",
      "What if I move to a different state?",
    ],
  },
  {
    title: "Support",
    items: [
      "How do I contact support?",
      "What are your support hours?",
      "Do you provide curriculum recommendations?",
      "Can I schedule a call to discuss my specific situation?",
    ],
  },
];

export default function FAQData() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 sm:py-16 px-4 flex justify-center">
      <div className="w-full max-w-4xl">

        {faqData.map((section, secIndex) => (
          <div key={secIndex} className="mb-8 sm:mb-10">

            {/* SECTION TITLE */}
            <h2
              className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-5"
              style={{ fontFamily: "Test Tiempos Fine, serif" }}
            >
              {section.title}
            </h2>

            {/* ITEMS */}
            <div className="space-y-3">
              {section.items.map((item, i) => {
                const index = `${secIndex}-${i}`;
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className="border rounded-xl px-4 sm:px-5 py-3 sm:py-4 bg-white shadow-sm"
                  >
                    <button
                      onClick={() => toggle(index)}
                      className="w-full flex justify-between items-center text-left gap-4"
                    >
                      <span className="text-sm sm:text-base text-[#1E1E1E]">
                        {item}
                      </span>

                      {/* ICON */}
                      <span className="text-gray-500 text-lg shrink-0">
                        {isOpen ? "^" : "⌄"}
                      </span>
                    </button>

                    {/* ANSWER */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-40 mt-2" : "max-h-0"
                      }`}
                    >
                      <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}