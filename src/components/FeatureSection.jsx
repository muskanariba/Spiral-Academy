import React from "react";

import img1 from "../assets/feature1.png";
import img2 from "../assets/feature2.png";
import img3 from "../assets/feature3.png";
import img4 from "../assets/feature4.png";
import img5 from "../assets/feature5.png";
import img6 from "../assets/feature6.png";

import icon1 from "../assets/icons/icon1.png";
import icon2 from "../assets/icons/icon2.png";
import icon3 from "../assets/icons/icon3.png";
import icon4 from "../assets/icons/icon4.png";
import icon5 from "../assets/icons/icon5.png";
import icon6 from "../assets/icons/icon6.png";

const features = [
  {
    title: "Total Educational Freedom",
    desc: "Choose the curriculum, schedule, and teaching style that works best for your unique family.",
    img: img1,
    icon: icon1,
  },
  {
    title: "No Required Testing",
    desc: "We believe in learning over testing. Say goodbye to state-mandated standardized tests.",
    img: img2,
    icon: icon2,
  },
  {
    title: "Easy Online Enrollment",
    desc: "Our streamlined digital process makes enrolling your children quick, secure, and hassle-free.",
    img: img3,
    icon: icon3,
  },
  {
    title: "Optional Transcripts & Diplomas",
    desc: "Access official academic records and high school diplomas when you need them.",
    img: img4,
    icon: icon4,
  },
  {
    title: "Secure Record-Keeping",
    desc: "Your child’s academic records are securely maintained in compliance with standards.",
    img: img5,
    icon: icon5,
  },
  {
    title: "Support When Needed",
    desc: "While you lead the way, our experienced team is here to provide guidance and support.",
    img: img6,
    icon: icon6,
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-gray-100 rounded-3xl px-6 md:px-12 py-14">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2
            className="text-gray-900 leading-tight text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{
              fontFamily: "'Test Tiempos Fine VF', serif",
            }}
          >
            Why Families Choose <br />
            <span className="text-yellow-500">Spiral Academy</span>
          </h2>

          <p className="mt-4 text-gray-600">
            We provide the structure you need without compromising the freedom you want.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 pb-10 shadow-md"
            >
              {/* Image + Icon */}
              <div className="relative">

                <img
                  src={item.img}
                  alt=""
                  className="w-full h-[180px] object-cover rounded-xl"
                />

                {/* ✅ FINAL PERFECT ICON */}
           <div
  className="
    absolute
    bottom-0
    left-5 sm:left-6
    translate-y-1/2
    w-12 h-12 sm:w-14 sm:h-14
    bg-[#0D428E]
    rounded-full
    flex items-center justify-center
    shadow-lg
    ring-4 ring-white
  "
>
  <img
    src={item.icon}
    alt=""
    className="w-5 h-5 sm:w-6 sm:h-6 object-contain brightness-0 invert"
  />
</div>

              </div>

              {/* Text */}
              <div className="pt-12">
                <h3 className="font-semibold text-gray-900 text-[15px] md:text-[16px]">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-600 text-[13px] leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;