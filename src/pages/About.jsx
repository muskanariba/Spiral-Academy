import React from "react";
import AboutLayout from "../components/AboutLayout"
import AboutMission from "../components/AboutMission";
import AboutFeatureSection from "../components/AboutFeatureSection";
import AboutSpiralDifferent from "../components/AboutSpiralDifferent";
import AboutEducationExperience from "../components/AboutEducationExperience";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
     <AboutLayout/>
     <AboutMission/>
     <AboutFeatureSection/>
     <AboutSpiralDifferent/>
     <AboutEducationExperience/>
     <Footer/>
  
    </>
  );
}