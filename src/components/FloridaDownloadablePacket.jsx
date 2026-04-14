import React from "react";

export default function FloridaDownloadablePacket() {
  return (
    <section className="w-full py-20 bg-white text-center">
      <div className="max-w-3xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Downloadable PDF Packet
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed">
          After enrollment, you’ll receive a comprehensive PDF packet with all
          Florida-specific forms, templates, and instructions.
        </p>

        {/* Button */}
        <button className="bg-[#FFD166] hover:bg-[#e6bc5c] text-gray-900 font-medium px-8 py-3 rounded-full shadow-md transition">
  Download Sample Packet
</button>
      </div>
    </section>
  );
}