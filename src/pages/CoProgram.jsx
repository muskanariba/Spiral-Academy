import React from "react";
import Footer from "../components/Footer";
import CTAReusable from "../components/CTAReuseable";
import CoProgrambanner from "../components/CoProgramBanner";
import Co_op from "../assets/Co-op.png"
import CoProgramDiscount from "../components/CoProgramDiscout";
import CoProgramEnrollment from "../components/CoProgramEnrollment";
import CoProgramDiykit from "../components/CoProgramDiykit";
import CoProgramBenefits from "../components/CoProgramBenefits";
export default function CoProgram() {
  return (
    <>
     <CoProgrambanner/>
     <CoProgramBenefits/>
      <CoProgramEnrollment/>
       <CoProgramDiykit/>
     <CoProgramDiscount/>
     <CTAReusable
                bgImage={Co_op}
                titleWhite="Ready to Start or"
                titleYellow="Join a Co-Op?"
                description="Connect with other homeschool families and build a thriving learning community."
              />
    <Footer/>
    </>
  );
}