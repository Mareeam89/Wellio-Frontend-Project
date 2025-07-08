import React from "react";
import Navbar from "../components/Website/Header/Navbar";
import HeroSection from "../components/Website/LandingPage/HeroSection";
import LearnMore from "../components/Website/LandingPage/LearnMore";
import VideoSection from "../components/Website/LandingPage/VideoSection";
import AppSection from "../components/Website/LandingPage/AppSection";
import WhySection from "../components/Website/LandingPage/WhySection";
import TestimonialSection from "../components/Website/TestimonialSection/TestimonialSection";
import PricingSection from "../components/Website/PricingSection/PricingSection";
import Footer from "../components/Website/Footer";
import AppDownloadSection from "../components/Website/AppDownloadSection";

const LandingPage = () => {
  return (
    <div id="main-body" className="max-sm:bg-[#F0FBF9] ">
      <div className="flex flex-col md:max-h-[860px] sm:bg-[#E4FFFA] bg-[#F0FBF9] overflow-x-hidden">
        <Navbar />
        <HeroSection />
      </div>
      <LearnMore />
      <VideoSection />
      <AppSection />
      <WhySection />
      <TestimonialSection />
      <PricingSection />
      <AppDownloadSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
