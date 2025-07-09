import MobileBottomNav from "@/components/Dashboard/MobileBottomNav";
import Sidebar from "@/components/Dashboard/Sidebar";
import Calendar from "@/components/Dashboard/Specialist/Calendar";
import CurrentPrescription from "@/components/Dashboard/Specialist/CurrentPrescription";
import Header from "@/components/Dashboard/Specialist/Header";
import HeroSection from "@/components/Dashboard/Specialist/HeroSection";
import RecommendedSpecialist from "@/components/Dashboard/Specialist/RecommendedSpecialist";
import SpecialistsNearYou from "@/components/Dashboard/Specialist/SpecialistsNearYou";
import UpcomingAppointment from "@/components/Dashboard/Specialist/UpcomingAppointment";
import React from "react";

// Main Dashboard Component
const SpecialistPage = () => {
  const activeTabName = "Specialist";
  return (
    <div className="xl:pl-[120px] lg:pl-[100px] lg:pb-0 pb-20">
      <Sidebar activeTabName={activeTabName} />
      <div className="min-h-screen bg-gray-50">
        <Header />

        <div className="sm:p-6 p-4 max-w-7xl mx-auto">
          <div className="flex max-md:flex-col justify-between gap-4 mb-6">
            <HeroSection />
            <button className="max-w-[300px] h-[48px] px-6 bg-teal-500 hover:bg-teal-600 text-white xl:text-[16px] md:text-[15px] text-[14px] rounded-lg font-medium">
              Appointment history
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <UpcomingAppointment />
              <SpecialistsNearYou />
            </div>

            {/* Middle Column */}
            <div className="space-y-6">
              <CurrentPrescription />
              <Calendar />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <RecommendedSpecialist />
            </div>
          </div>
        </div>
      </div>
      <MobileBottomNav activeTabName={activeTabName} />
    </div>
  );
};

export default SpecialistPage;
