import React from "react";
import RecentLogItem from "./RecentLogItem";
import { BiTired } from "react-icons/bi";
import { FaBriefcaseMedical } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const RecentLogs = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm lg:p-6 sm:p-4 p-3 mt-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="xl:text-[16px] md:text-[15px] text-[14px] font-semibold text-gray-900">Recent Logs</h3>
        <button className="xl:text-[16px] md:text-[15px] text-[14px] text-blue-500 hover:text-blue-600">
          {/* <IoPencil className="w-5 h-5" /> */}
          See all
        </button>
      </div>

      <RecentLogItem icon={<BiTired />} type="Symptoms" value="Today" description="Fatigue" color="text-orange-400" />
      <RecentLogItem icon={<FaHeart />} type={90} value="Post walk" time="01 May 7:00AM" description="Heart rate" color="text-red-600" />
      <RecentLogItem icon={<FaBriefcaseMedical />} type="Medication Refill" value="Yesterday" description="Lisinopril 10mg" color="text-blue-500" />
    </div>
  );
};

export default RecentLogs;
