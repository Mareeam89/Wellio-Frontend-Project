import React from "react";
import SmallFeatureCard from "../SmallFeatureCard";
import DeviceConnect from "../../../assets/icons/DeviceConnect.svg";
import HealthCoach from "../../../assets/icons/HealthCoach.svg";
import SmartMedication from "../../../assets/icons/SmartMedication.svg";
import CertifiedSpecialists from "../../../assets/icons/CertifiedSpecialists.svg";
import CTAButton from "../../Website/CTAButton";
import WhyBgVector from "../../../assets/images/WhyBgVector.svg";
import Image from "next/image";

const slideIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WhySection = () => {
  return (
    <section id="features" className="md:my-16 my-10 overflow-hidden">
      <div className={`max-page-width relative flex flex-col-reverse xl:flex-row justify-between xl:items-center md:gap-10 gap-8 md:p-8 p-4 `}>
        <div className="xl:grid xl:grid-cols-2 flex flex-wrap max-md:justify-center md:gap-6 gap-4">
          <SmallFeatureCard
            icon={DeviceConnect}
            title="Connect Devices & Apps"
            subText="Easily sync all your health data from your devices and apps into one centralized platform — giving you a personalized and seamless way to monitor your health."
          />
          <SmallFeatureCard
            icon={HealthCoach}
            title="Real-Time Health Coach Support"
            subText="Get guidance when you need it. Speak with certified health coaches who provide expert advice and quick responses to keep you on track."
          />
          <SmallFeatureCard
            icon={SmartMedication}
            title="Smart Medication Reminder"
            subText="Never miss a dose again. Wellio reminds you when it's time to take your medications — so you stay consistent and in control."
          />
          <SmallFeatureCard
            icon={CertifiedSpecialists}
            title="Access to Certified Health Specialists"
            subText="Need professional care? Easily connect with trusted medical specialists near you for personalized consultations."
          />
        </div>
        <div className="flex flex-col max-w-[600px]">
          <h2 className="xl:text-[38px] md:text-[26px] text-[20px] font-bold text-[#1A1A1A] leading-[1.1]">Why Choose Wellio</h2>
          <p className="mt-3 text-start text-[#636363] xl:text-[18px] lg:text-[16px] text-[14px] max-w-[600px]">
            Take the stress out of managing chronic conditions with features built for simplicity, support, and smarter care..
          </p>
          <div className="md:mt-8 mt-6">
            <CTAButton btnText="Explore More" />
          </div>
        </div>
        <div className="max-sm:hidden absolute top-0 left-0 w-full max-w-[700px] max-md:opacity-80">
          <Image src={WhyBgVector} alt="WhyBgVector" className="rotate-[-10deg]" />
        </div>
      </div>
    </section>
  );
};

export default WhySection;
