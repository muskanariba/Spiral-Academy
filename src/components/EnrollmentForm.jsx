import React from "react";

const EnrollmentForm = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center px-4 py-6">
      
      {/* CARD */}
      <div className="w-full max-w-[900px] bg-white rounded-2xl shadow-md px-[79px] py-10 space-y-[60px] mt-4">

        {/* TITLE */}
        <h1 className="text-3xl font-semibold text-gray-900">
          Enrollment Form
        </h1>

        {/* STUDENT INFO */}
        <section className="space-y-6">
          <h2 className="font-semibold text-gray-800">
            Student Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
            <input type="text" placeholder="First Name" className="input" />
            <input type="text" placeholder="Last Name" className="input" />
            <input type="number" placeholder="Age" className="input" />

            <select className="input">
              <option>Select Grade</option>
              <option>Grade 1</option>
              <option>Grade 2</option>
            </select>
          </div>
        </section>

        {/* PARENT INFO */}
        <section className="space-y-6">
          <h2 className="font-semibold text-gray-800">
            Parent/Guardian Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
            <input type="text" placeholder="First Name" className="input" />
            <input type="text" placeholder="Last Name" className="input" />
            <input type="email" placeholder="Email" className="input" />
            <input type="text" placeholder="Phone" className="input" />

            <select className="input md:col-span-2">
              <option>Select State</option>
              <option>California</option>
              <option>Texas</option>
            </select>
          </div>
        </section>

        {/* FAMILY SIZE */}
        <section className="space-y-4">
          <h2 className="font-semibold text-gray-800">
            Family Size & Tuition
          </h2>

          <div className="space-y-[60px]">
            {[
              "1-2 children — $65 per family",
              "3-4 children — $155 per family",
              "5+ children — $175 per family",
            ].map((item, i) => (
              <label
                key={i}
                className="flex items-center gap-3 border rounded-lg p-4 cursor-pointer hover:border-gray-400"
              >
                <input type="radio" name="family" />
                <span className="text-gray-700 text-sm">{item}</span>
              </label>
            ))}
          </div>
        </section>

        {/* UPLOAD */}
        <section className="space-y-6">
          <h2 className="font-semibold text-gray-800">
            Upload Documents
          </h2>

          <div className="space-y-[60px]">
            <FileInput label="Withdrawal forms (if applicable)" />
            <FileInput label="Prior Records (if available)" />
            <FileInput label="Immunization Records (if required by state)" />
          </div>
        </section>

        {/* BUTTON */}
        <button className="w-full bg-[#FFD166] hover:bg-yellow-500 text-black font-medium py-3 rounded-full transition">
          Continue to Payment
        </button>

      </div>
    </div>
  );
};

/* FILE INPUT COMPONENT */
const FileInput = ({ label }) => (
  <div>
    <p className="text-sm text-gray-600 mb-2">{label}</p>
    <input
      type="file"
      className="w-full border rounded-lg p-2 text-sm cursor-pointer"
    />
  </div>
);

export default EnrollmentForm;