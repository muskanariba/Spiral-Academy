import React from "react";
import FloridaHeroBanner from "../components/FloridaHeroBanner";
import FloridaOverview from "../components/FloridaOverview";
import FloridaEnrollmentSteps from "../components/FloridaEnrollmentSteps";
import FloridaRequirements from "../components/FloridaRequirements";
import FloridaParentReportingSchedule from "../components/FloridaParentReportingSchedule";
import FloridaSpiralProvides from "../components/FloridaSpiralProvides";
import FloridaDownloadablePacket from "../components/FloridaDownloadablePacket";
import CTAReusable from "../components/CTAReuseable";
import Footer from "../components/Footer"; // ✅ Footer

import bannerImg from "../assets/About-banner.png"; // ✅ Background image

export default function FloridaHomeSchool() {
  return (
    <main className="w-full min-h-screen bg-white">
      
      <FloridaHeroBanner />
      <FloridaOverview />
      <FloridaEnrollmentSteps />
      <FloridaRequirements />
      <FloridaParentReportingSchedule />
      <FloridaSpiralProvides />
      <FloridaDownloadablePacket />

      {/* ✅ CTA SECTION */}
      <CTAReusable
        bgImage={bannerImg}
        titleWhite="Ready to Enroll in"
        titleYellow="Florida?"
        description="Start homeschooling with confidence and state-compliant support.."
        buttonText="Enroll Today"
      />

      {/* ✅ FOOTER */}
      <Footer />

    </main>
  );
}