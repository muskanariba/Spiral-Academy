import React from "react";
import { User, FileText, Upload, FileEdit, BookOpen, MessageCircle, Download } from "lucide-react";

export default function ParentPortalFeatures() {
  const features = [
    {
      icon: <User size={20} />,
      title: "Student Profiles",
      desc: "Manage profiles for each enrolled student with grade levels, courses, and academic information.",
    },
    {
      icon: <FileText size={20} />,
      title: "Attendance Logs",
      desc: "Upload and download attendance records. View reporting deadlines and submission history.",
    },
    {
      icon: <Upload size={20} />,
      title: "Portfolio Uploads",
      desc: "Securely store work samples, projects, and learning documentation for each student.",
    },
    {
      icon: <FileEdit size={20} />,
      title: "Draft Transcripts",
      desc: "Generate and view draft transcripts for high school students as they complete courses.",
    },
    {
      icon: <BookOpen size={20} />,
      title: "Course Registration",
      desc: "Register courses for high school students and track credits toward graduation requirements.",
    },
    {
      icon: <MessageCircle size={20} />,
      title: "Messaging / Support",
      desc: "Contact our support team with questions about compliance, records, or portal features.",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 border rounded-2xl p-6 hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0B4DB8] text-white mb-4">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Wide Card */}
        <div className="bg-gray-50 border rounded-2xl p-8 text-center max-w-3xl mx-auto hover:shadow-md transition">
          
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0B4DB8] text-white mx-auto mb-4">
            <Download size={20} />
          </div>

          <h3 className="text-sm font-semibold text-gray-900 mb-2">
            Access PDFs
          </h3>

          <p className="text-xs text-gray-600 leading-relaxed">
            Download your state-specific compliance packet, attendance templates,
            course registration forms, and other essential documents.
          </p>

        </div>

      </div>
    </section>
  );
}