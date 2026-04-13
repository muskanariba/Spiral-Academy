import React from "react";
import StateCompilanceBanner from "../components/StateCompilanveBanner";
import StateCompilanceState from "../components/StateCompilanceState"
import Footer from "../components/Footer";
import StateCompilanceWhatweProvide from "../components/StateCompilanceWhatweProvide";
import CTAReusable from "../components/CTAReuseable";
import State_Compilance from "../assets/State-Compilance.png";
export default function StateCompliance() {
  return (
    <>
    <StateCompilanceBanner/>
    <StateCompilanceState/>
    <StateCompilanceWhatweProvide/>

     <CTAReusable
        bgImage={State_Compilance}
        titleWhite="Ready to"
        titleYellow="Enroll?"
        description="Start homeschooling with confidence and state-compliant support."
      />

    <Footer/>
    </>
  );
}