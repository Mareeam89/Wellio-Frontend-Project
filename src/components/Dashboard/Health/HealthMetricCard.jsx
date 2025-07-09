import React from "react";
import Image from "next/image";

const HealthMetricCard = ({ icon, title, value, unit, status, color, chart }) => (
  <div className="w-full max-w-[400px] mx-auto bg-white my-4 shadow-md overflow-hidden">
    <div className="md:p-3 sm:p-4 p-2">
      <div className="flex items-center gap-3 sm:mb-5 mb-3">
        <div className={`w-8 h-8 rounded-[5px] flex items-center justify-center ${color}`}>{icon}</div>
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
        </div>
      </div>

      <div className="mb-3 space-y-1">
        <div className="flex items-baseline gap-2">
          <span className="xl:text-[24px] lg:text-[20px] text-[18px] font-bold text-gray-900">{value}</span>
          <span className="text-gray-500 xl:text-[14px] md:text-[13px] text-[12px]">{unit}</span>
        </div>
        <span
          className={`xl:text-[12px] md:text-[11px] text-[10px] px-3 py-1 rounded-full ${
            status === "Normal" ? "bg-teal-100 text-green-700" : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {status}
        </span>
      </div>
    </div>

    <div className="h-16 border-b border-gray-200">
      <div className="w-full h-16 relative overflow-hidden">
        <Image src={chart} alt="Glucose chart" className="w-full h-full" />
      </div>
    </div>
  </div>
);

export default HealthMetricCard;
