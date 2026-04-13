import React from "react";
import AboutLayout from "../components/AboutLayout"
import AboutMission from "../components/AboutMission";
import AboutFeatureSection from "../components/AboutFeatureSection";
import AboutSpiralDifferent from "../components/AboutSpiralDifferent";
import AboutEducationExperience from "../components/AboutEducationExperience";
import AboutFooter from "../components/AboutFooter";

export default function About() {
  return (
    <>
     <AboutLayout/>
     <AboutMission/>
     <AboutFeatureSection/>
     <AboutSpiralDifferent/>
     <AboutEducationExperience/>
     <AboutFooter/>
  
    </>
  );
}