import React from "react";
import HomeSection from "../components/HomeSection";
import HomeschoolSection from "../components/HomeschoolSection";
import FeaturesSection from "../components/FeatureSection";
import HowItWorks from "../components/HomeSectionHowItWorks";
import EducationHero from "../components/EducationHero";
import ServicesSection from "../components/HomeSectionServices";
import HeroFooter from "../components/HeroFooter";

export default function HomePage() {
  return (
    <>
      <HomeSection />
      <HomeschoolSection />
      <FeaturesSection/>
      <HowItWorks/>
      <ServicesSection/>
      <EducationHero/>
      <HeroFooter/>
    </>
  );
}