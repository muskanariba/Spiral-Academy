import React from "react";
import GetInTouchBanner from "../components/GetInTouchBanner";
import Footer from "../components/Footer";
import GetIn_Touch from "../assets/GetInTouch.jpg"
import CTAReusable from "../components/CTAReuseable";
import GetInTouchForm from "../components/GetInTouchForm";

export default function GetInTouch() {
  return (
    <>
    <GetInTouchBanner/>
    <GetInTouchForm/>
     <CTAReusable
                bgImage={GetIn_Touch}
                titleWhite="Ready to"
                titleYellow="Enroll?"
                description="Start your homeschooling journey with confidence and support today."
              />
    <Footer/>
    </>
  );
}