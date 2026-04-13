import React from "react";
import homeschoolImg from "../assets/home-school.png";

const HomeschoolSection = () => {
  return (
    <section className="w-full bg-white py-10 sm:py-14 md:py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 md:gap-10 lg:gap-16 w-full">

          {/* IMAGE */}
          <div className="flex justify-center md:justify-start w-full md:w-1/2">
            <img
              src={homeschoolImg}
              alt="Homeschool"
              className="rounded-2xl w-full max-w-full h-auto object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="text-center md:text-left flex flex-col justify-center mt-6 md:mt-0 w-full md:w-1/2 px-2 sm:px-0">

            {/* HEADING */}
            <h2 className="font-tiempos font-bold 
              text-[22px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[50px] 
              leading-snug text-gray-900">
              A Smarter Way to <span className="text-yellow-500">Homeschool</span>
            </h2>

            {/* PARAGRAPHS */}
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-full mx-auto md:mx-0">
              Spiral Academy bridges the gap between total educational freedom and the structured benefits of a private school. We understand that every child learns differently, and parents are best equipped to guide that journey.
            </p>

            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600 max-w-full mx-auto md:mx-0">
              By enrolling with us, you maintain complete control over curriculum, schedule, and teaching methods, while we provide the official framework, secure record-keeping, and academic credentials when you need them.
            </p>

            {/* FEATURES */}
            <ul className="mt-4 space-y-2">
              {[
                "Maintain control over your curriculum",
                "Access private school benefits",
                "Receive official documentation",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 justify-center md:justify-start"
                >
                  <div className="w-5 h-5 flex items-center justify-center bg-yellow-400 text-white rounded-full text-xs font-bold shrink-0">
                    ✓
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 text-left">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* BUTTON */}
            <div className="flex justify-center md:justify-start">
              <button className="mt-6 sm:mt-8 px-5 sm:px-6 py-2 sm:py-3 
                bg-blue-900 text-white rounded-full 
                text-sm sm:text-base font-medium 
                hover:bg-blue-800 transition">
                Read our full story
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeschoolSection;