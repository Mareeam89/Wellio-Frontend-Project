import React from "react";

const ActivityItem = ({ icon, title, duration, progress }) => (
  <div className="flex items-center gap-4 py-3">
    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">{icon}</div>
    <div className="flex-1">
      <div className="flex items-center justify-between mb-1">
        <h4 className="font-medium text-gray-900">{title}</h4>
        <span className="xl:text-[14px] md:text-[13px] text-[12px] text-gray-500">{duration}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-gray-800 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  </div>
);

export default ActivityItem;
