import React from "react";
import Sidebar from "../../../components/Dashboard/Sidebar.jsx";
import Header from "../../../components/Dashboard/Health/Header.jsx";
import MobileBottomNav from "../../../components/Dashboard/MobileBottomNav.jsx";
import RecentLogs from "../../../components/Dashboard/Health/RecentLogs.jsx";
import MainChart from "../../../components/Dashboard/Health/MainChart/page.jsx";
import Trends from "../../../components/Dashboard/Health/Trends.jsx";
import RecentActivity from "../../../components/Dashboard/Health/RecentActivity/RecentActivity.jsx";
import HealthCategories from "../../../components/Dashboard/Health/HealthCategories/page.jsx";

const HealthPage = () => {
  const activeTabName = "Health";

  return (
    <div className="flex min-h-[100svh] bg-[#E8F2F1]">
      <Sidebar activeTabName={activeTabName} />

      <main className="flex-1 flex flex-col xl:ml-[120px] lg:ml-[100px] lg:pb-0 pb-20">
        <Header />
        <div className="flex-1 flex max-lg:flex-col gap-6 lg:p-6 sm:p-4 p-3">
          {/* Left Column - Charts */}
          <div className="w-full flex flex-col">
            <MainChart />
            <RecentLogs />
          </div>

          {/* Right Column */}
          <div className="w-full flex flex-col gap-6">
            <Trends />
            <RecentActivity />
            <HealthCategories />
          </div>
        </div>
      </main>

      <MobileBottomNav activeTabName={activeTabName} />
    </div>
  );
};

export default HealthPage;
