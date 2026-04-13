import React from "react";
import HomeSection from "../components/HomeSection";
import HomeschoolSection from "../components/HomeschoolSection";
import FeaturesSection from "../components/FeatureSection";
import HowItWorks from "../components/HowItWorks";
import EducationHero from "../components/EducationHero";
import ServicesSection from "../components/Services";
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