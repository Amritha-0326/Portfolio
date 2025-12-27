import React from "react";
import HeroSection from "./Home";
import AboutPage from "./AboutPage";
import PortfolioSection from "./Portfolio";
import PassionSection from "./PersonalPassion";
import ConnectSection from "./LetsConnect";
import Certificate from "./Certificate";
export default function App() {
  return (
    <>
      <HeroSection />
      <AboutPage />
      <PortfolioSection />
      <Certificate />
      <PassionSection />
      <ConnectSection />
    </>
  );
}