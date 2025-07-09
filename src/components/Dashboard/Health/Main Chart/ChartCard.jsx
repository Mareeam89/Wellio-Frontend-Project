import React from "react";
import { IoHeart } from "react-icons/io5";
import Image from "next/image";

const ChartCard = ({ title, isActive, chart }) => {
  // Mock chart components (replace with actual chart library)
  const HeartRateChart = ({ LineChart }) => (
    <div className="relative bg-gradient-to-b from-slate- to-transparent rounded-lg">
      <div className="w-full max-w-[500px] mx-auto sm:py-10 py-4 flex items-end justify-center">
        <Image src={LineChart} alt="Line Chart" className="w-full " />
      </div>
      {/* <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded xl:text-[12px] md:text-[11px] text-[10px]">65 bpm</div> */}
    </div>
  );

  return (
    <div className={`bg-white rounded-lg border lg:p-6 sm:p-4 p-3 transition-colors ${isActive ? "border-teal-400" : "border-transparent shadow-sm"}`}>
      <h3 className={`font-semibold mb-4 pb-2 ${isActive ? "text-teal-600 border-teal-500" : "text-gray-600 border-transparent"}`}>{title}</h3>
      <HeartRateChart LineChart={chart} />
      <div className="flex justify-between mx-auto w-full max-w-[700px] gap-10 mt-4 px-1 text-center">
        <div>
          <div className="xl:text-[14px] md:text-[13px] text-[12px] text-gray-500">Min</div>
          <div className="xl:text-[16px] md:text-[15px] text-[14px] font-semibold">60 bpm</div>
        </div>
        <div>
          <div className="xl:text-[14px] md:text-[13px] text-[12px] text-gray-500">Max</div>
          <div className="xl:text-[16px] md:text-[15px] text-[14px] font-semibold">100 bpm</div>
        </div>
        <div>
          <div className="xl:text-[14px] md:text-[13px] text-[12px] text-gray-500">Average</div>
          <div className="xl:text-[16px] md:text-[15px] text-[14px] font-semibold">75 bpm</div>
        </div>
      </div>
      <div className="bg-blue-50 p-3 rounded-lg mt-4 flex items-center gap-3">
        <div className="w-max bg-blue-500 rounded-full flex items-center justify-center">
          <IoHeart className="sm:w-10 sm:h-10 w-8 h-8 sm:p-2 p-[6px] text-white" />
        </div>
        <p className="xl:text-[14px] md:text-[13px] text-[12px] text-gray-700">Your resting heart rate has been normal in the past week</p>
      </div>
    </div>
  );
};

export default ChartCard;
