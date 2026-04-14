import React from "react";
import ParentPortalHeroBanner from "../components/ParentPortalHeroBanner";
import ParentPortalFeatures from "../components/ParentPortalFeatures";
import ParentPortalLogin from "../components/ParentPortalLogin";

// ✅ ADD THESE
import CTAReusable from "../components/CTAReuseable";
import Footer from "../components/Footer";

import bannerImg from "../assets/About-banner.png"; // reuse same image

export default function ParentPortal() {
  return (
    <main className="w-full min-h-screen bg-white">

      <ParentPortalHeroBanner />

      {/* Features */}
      <ParentPortalFeatures />

      {/* Login */}
      <ParentPortalLogin />

      {/* ✅ CTA SECTION */}
      <CTAReusable
        bgImage={bannerImg}
        titleWhite="Not Enrolled Yet?"
        description="Enroll today to get access to the parent portal and all its features."
        buttonText="Enroll Today"
      />

      {/* ✅ FOOTER */}
      <Footer />

    </main>
  );
}