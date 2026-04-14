import React from "react";

export default function FloridaSpiralProvides() {
  const items = [
    {
      title: "Legal Coverage",
      description:
        "Private school enrollment status that meets Florida homeschool requirements.",
    },
    {
      title: "Record Keeping",
      description:
        "Secure online storage for attendance logs, portfolios, and academic records.",
    },
    {
      title: "Official Documentation",
      description:
        "Transcripts, diplomas, and verification letters when needed for college or employment.",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
          What Spiral Provides
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}