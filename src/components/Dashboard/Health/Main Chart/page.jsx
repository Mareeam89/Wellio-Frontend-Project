"use client";

import React, { useState } from "react";
import ChartCard from "./ChartCard";
import LineChart from "../../../../assets/images/lineChart.png";
import { IoEllipsisHorizontal } from "react-icons/io5";

const MainChart = () => {
  const chartList = ["Heart Rate", "Glucose", "Sleep"];
  const [activeChart, setActiveChart] = useState(chartList[0]);
  return (
    <div>
      <div className="flex justify-between flex-wrap-reverse sm:gap-4 gap-2 ml-[2px] md:mb-4 sm:mb-3 mb-2">
        <div className="flex sm:gap-4 gap-2 ml-[2px]">
          {chartList.map((chart) => (
            <button
              key={chart}
              onClick={() => setActiveChart(chart)}
              className={`lg:px-6 sm:px-4 px-2 sm:py-2 py-1 xl:text-[14px] md:text-[13px] text-[12px] font-medium text-nowrap border-b-3 transition-colors ${
                activeChart === chart ? "border-teal-500 text-teal-600" : "hover:text-black border-transparent text-gray-500"
              }`}
            >
              {chart}
            </button>
          ))}
        </div>
        <button className=" border-b-3 border-[#E8F2F1]">
          <IoEllipsisHorizontal className="w-10 h-5 mx-auto bg-[#ffffff] rounded text-gray-400 hover:text-teal-600" />
        </button>
      </div>

      <ChartCard title={activeChart} isActive={true} chart={LineChart}></ChartCard>
    </div>
  );
};

export default MainChart;
