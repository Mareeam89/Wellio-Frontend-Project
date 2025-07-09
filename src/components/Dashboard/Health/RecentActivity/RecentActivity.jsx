import React from "react";
import ActivityItem from "./ActivityItem";
import { GrYoga } from "react-icons/gr";
import { IoBarbell, IoWalk } from "react-icons/io5";

const RecentActivity = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm lg:p-6 sm:p-4 p-3">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Recent Activities</h3>
        <button className="text-teal-500 xl:text-[14px] md:text-[13px] text-[12px] hover:text-teal-600">See all</button>
      </div>

      <ActivityItem icon={<GrYoga className="w-5 h-5 text-blue-600" />} title="Yoga" duration="40 min / 1hr" progress={67} />
      <ActivityItem icon={<IoBarbell className="w-5 h-5 text-blue-600" />} title="Workouts" duration="50 min / 1hr" progress={83} />
      <ActivityItem icon={<IoWalk className="w-5 h-5 text-blue-600" />} title="Walking" duration="1.2 km / 3km" progress={40} />
    </div>
  );
};

export default RecentActivity;
