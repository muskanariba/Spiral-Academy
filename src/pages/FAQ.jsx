import React from "react";
import Footer from "../components/Footer";
import CTAReusable from "../components/CTAReuseable";
import FAQBanner from "../components/FAQBanner";
import FAQ_Banner from "../assets/FAQ.png"
import FAQContact from "../components/FAQContact";
import FAQData from "../components/FAQData";


export default function FAQ() {
  return (
    <>
    <FAQBanner/>
    <FAQData/>
    <FAQContact/>
      <CTAReusable
            bgImage={FAQ_Banner}
            titleWhite="Ready to"
            titleYellow="Get Started?"
            description="Enroll today and begin your homeschooling journey with confidence and support."
          />
    <Footer/>
    </>
  );
}