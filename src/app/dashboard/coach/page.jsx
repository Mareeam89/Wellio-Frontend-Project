import React from "react";
import Healthcoach from "../../../components/Dashboard/Coach/Healthcoach.jsx";
import firstimage from "../../../assets/Dashboard/Coach/firstimage.png";
import secondimage from "../../../assets/Dashboard/Coach/secondimage.png";
import thirdimage from "../../../assets/Dashboard/Coach/thirdimage.png";
import fourthimage from "../../../assets/Dashboard/Coach/fourthimage.png";
import FeedbackCard from "../../../components/Dashboard/Coach/FeedbackCard.jsx";
import PremiumBanner from "../../../components/Dashboard/Coach/PremiumBanner.jsx";
import LearnmoreBanner from "../../../components/Dashboard/Coach/LearnmoreBanner.jsx";
import ChatCoach from "../../../components/Dashboard/Coach/ChatCoach.jsx";
import drnike from "../../../assets/Dashboard/Coach/drnike.png";
import profilePicture from "../../../assets/images/profilePicture.png";
import notification from "../../../assets/Dashboard/Coach/notification.png";
import Upcoming from "../../../components/Dashboard/Coach/Upcoming.jsx";
import Welcome from "../../../components/Dashboard/Coach/Welcome.jsx";
import FirstLine from "../../../components/Dashboard/Coach/FirstLine.jsx";
import Sidebar from "../../../components/Dashboard/Sidebar.jsx";
import MobileBottomNav from "../../../components/Dashboard/MobileBottomNav.jsx";
import Image from "next/image";

const Coach = () => {
  const activeTabName = "Coach";

  return (
    <div className="flex min-h-[100svh] bg-[#E8F2F1]">
      {/* Sidebar: hidden on mobile, visible on lg+ */}
      <Sidebar activeTabName={activeTabName} />
      <div className="w-full flex flex-col lg:flex-row gap-0 lg:gap-4 xl:ml-[120px] lg:ml-[100px] lg:pb-6 pb-20">
        {/* Main Content */}
        <div className="flex-1">
          <div className="font-[600] sm:p-6 p-4">
            {/* Top Bar: Good Morning Paul and notification, only on mobile */}
            <div className="block lg:hidden mb-4">
              <div className="flex items-center justify-between px-2 py-6 gap-2">
                <Image src={profilePicture} alt="User" className="w-10 h-10 rounded-full object-cover" />
                <div className="flex-1 ml-2">
                  <h2 className="font-bold text-base text-[#232323]">Good Morning Paul</h2>
                  <p className="text-xs text-gray-500">Let's pick up where you left off with your health journey</p>
                </div>
                <button className="bg-[#23D1B4]/10 p-2 rounded-full">
                  <Image src={notification} alt="notification" className="w-6 h-6" />
                </button>
              </div>
            </div>
            {/* Input/Search Bar */}
            {/* <div className="block lg:hidden mb-4 px-2">
              <FirstLine />
            </div> */}
            <div className="block lg:hidden mb-4 px-2 ">
              <PremiumBanner />
            </div>
            {/* Desktop Welcome and Input */}
            <div className="hidden lg:block">
              <FirstLine />
              <Welcome />
            </div>
            {/* Last contacted and Upcoming */}
            <div className="w-full flex justify-between max-md:flex-col gap-4 mb-6">
              <ChatCoach name="Dr. Nike Shimawa" role="Health Coach" image={drnike} rating={5} buttonText="Continue Chat" />
              <Upcoming />
            </div>
            {/* Health Coaches and Feedback */}
            <div className="flex max-lg:flex-col justify-between gap-4">
              <div className="flex-1 bg-[#fff] rounded-[30px] p-4 col-span-2">
                <h2 className="xl:text-[18px] md:text-[16px] text-[14px] font-[600] m-2">Health Coach</h2>
                <div className="grid grid-cols-4 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-4">
                  <Healthcoach image={firstimage} name="Dr. Mark Odoma" description="Health Coach" rating={5} buttonText="Message" />
                  <Healthcoach image={secondimage} name="Dr. Niyi Olominu " description="Health Coach" rating={5} buttonText="Message" />
                  <Healthcoach image={thirdimage} name="Dr. Gbemi Esho" description="Health Coach" rating={3} buttonText="Message" />
                  <Healthcoach image={fourthimage} name="Dr. Mary Taiwo" description="Health Coach" rating={2} buttonText="Message" />
                </div>
              </div>
              <FeedbackCard />
            </div>
            {/* Footer Banners */}
            <footer className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
              <div className="max-lg:hidden">
                <PremiumBanner />
              </div>
              <LearnmoreBanner />
            </footer>
          </div>
        </div>
      </div>
      <MobileBottomNav activeTabName={activeTabName} />
    </div>
  );
};

export default Coach;
