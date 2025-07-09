import React from "react";

const HealthCategoryIcon = ({ icon, isActive }) => (
  <button
    className={`sm:w-12 sm:h-12 w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
      isActive ? "bg-teal-500 text-white" : "bg-gray-100 text-gray-600 hover:text-teal-600 hover:bg-teal-50"
    }`}
  >
    {icon}
  </button>
);

export default HealthCategoryIcon;
