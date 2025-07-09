import React from "react";

const RecentLogItem = ({ icon, type, value, time, description, color }) => (
  <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
    <div className="flex items-center gap-3">
      <div className={`self-start xl:text-[24px] md:text-[22px] text-[20px] pt-[2px] sm:mr-1 mr-0 rounded-full ${color}`}>{icon}</div>
      <div>
        <div
          className={`font-semibold xl:text-[16px] md:text-[15px] text-[14px] ${
            type <= 73 ? "text-green-500" : type <= 77 ? "text-orange-400" : type > 77 ? "text-red-600" : "text-gray-900"
          }`}
        >
          {type} {typeof type === "number" && !isNaN(type) && "bpm"}
        </div>
        <div className="xl:text-[14px] md:text-[13px] text-[12px] text-gray-500">{description}</div>
      </div>
    </div>
    <div className="text-right">
      <div className="font-medium xl:text-[16px] md:text-[15px] text-[14px] text-gray-900">{value}</div>
      <div className="xl:text-[14px] md:text-[13px] text-[12px] text-gray-500">{time}</div>
    </div>
  </div>
);

export default RecentLogItem;
