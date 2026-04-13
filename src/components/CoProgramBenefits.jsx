import React from "react";
import checkIcon from "../assets/benefit-vector.png";

export default function CoProgramBenefits() {
  const data = [
    {
      title: "Community Connection",
      desc: "Connect with like-minded families for group learning, social activities, and shared educational experiences.",
    },
    {
      title: "Shared Resources",
      desc: "Pool resources, share teaching responsibilities, and offer specialized classes that benefit all member families.",
    },
    {
      title: "Leadership Support",
      desc: "Access co-op leadership resources, organizational templates, and administrative guidance from Spiral Academy.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Overview <span className="text-yellow-500">& Benefits</span>
        </h2>

        <p className="text-gray-500 text-sm mt-3">
          Spiral Academy supports homeschool co-ops by providing organizational tools, administrative resources, and enrollment incentives. Whether you're starting a new co-op or leading an established group, we're here to help.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border p-6 shadow-sm hover:shadow-md transition"
          >
            {/* Icon (Blue Circle Wrapper) */}
            <div className="mb-4">
              <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                <img
                  src={checkIcon}
                  alt="icon"
                  className="w-5 h-5 object-contain"
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="font-semibold text-base mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}