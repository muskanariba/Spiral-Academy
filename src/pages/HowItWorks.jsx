import React from "react";
import HowItWorksBanner from "../components/HowItWorksBanner"; 
import HowItWorksSteps from "../components/HowItWorksSteps";
import ImportantNote from "../components/HowItWorksImportantNote";
import CTAReusable from "../components/CTAReuseable";
import Footer from "../components/Footer"; // ✅ Footer

import bannerImg from "../assets/About-banner.png"; // image

export default function HowItWorks() {
  return (
    <>
      <HowItWorksBanner />
      <HowItWorksSteps />
      <ImportantNote />

      {/* ✅ CTA SECTION (ADD HERE) */}
      <CTAReusable
        bgImage={bannerImg}
        titleWhite="Ready to"
        titleYellow="Get Started?"
        description="Enroll today and begin homeschooling with confidence and support."
      />

      {/* ✅ FOOTER LAST */}
      <Footer />
    </>
  );
}