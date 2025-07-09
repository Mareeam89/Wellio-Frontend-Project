import React from "react";
import HealthMetricCard from "./HealthMetricCard";
import glucoseChart from "../../../assets/images/yellowChart.png";
import heartChart from "../../../assets/images/redChart.png";
import { IoChevronForward, IoHeart, IoWater } from "react-icons/io5";

const Trends = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm lg:p-6 sm:p-4 p-3">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Trends</h3>
        <span className="xl:text-[14px] md:text-[13px] text-[12px] text-gray-500">50 min ago</span>
      </div>

      <div className="flex max-xl:flex-col gap-4">
        <HealthMetricCard
          icon={<IoHeart className="w-4 h-4 text-white" />}
          title="Current Heart Rate"
          value="72"
          unit="bpm"
          status="Normal"
          color="bg-red-500"
          chart={heartChart}
        />
        <HealthMetricCard
          icon={<IoWater className="w-4 h-4 text-white" />}
          title="Current Glucose"
          value="80"
          unit="mg / dL"
          status="Normal"
          color="bg-yellow-500"
          chart={glucoseChart}
        />
      </div>

      <button className="mx-auto w-full sm:max-w-[200px] max-w-[180px] bg-teal-500 hover:bg-teal-600 text-white mt-8 px-4 py-2 rounded-full xl:text-[14px] md:text-[13px] text-[12px] font-medium transition-colors flex items-center justify-center gap-2">
        View more info
        <IoChevronForward className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Trends;
