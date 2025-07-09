import React from "react";
import HealthCategoryIcon from "./HealthCategoryIcon";
import { IoBarbell, IoBody, IoChevronForward, IoGrid, IoHeart, IoPulse } from "react-icons/io5";
import { GiBrain } from "react-icons/gi";

const HealthCategories = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm lg:p-6 sm:p-4 p-3">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Health Categories</h3>
        <IoGrid className="w-5 h-5 text-teal-500" />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <HealthCategoryIcon icon={<GiBrain className="w-5 h-5" />} isActive={true} />
        <HealthCategoryIcon icon={<IoPulse className="w-5 h-5" />} isActive={false} />
        <HealthCategoryIcon icon={<IoBarbell className="w-5 h-5" />} isActive={false} />
        <HealthCategoryIcon icon={<IoBody className="w-5 h-5" />} isActive={false} />
        <HealthCategoryIcon icon={<IoHeart className="w-5 h-5" />} isActive={false} />
        <button className="sm:w-12 sm:h-12 w-10 h-10 rounded-xl bg-gray-100 text-gray-400 flex items-center justify-center">
          <IoChevronForward className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default HealthCategories;
