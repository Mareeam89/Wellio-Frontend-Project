import React from "react";
import { IoNotifications, IoChevronDown } from "react-icons/io5";

const Header = () => (
  <div className="bg-gradient-to-r from-teal-100 to-[#47e3c6] sm:px-6 px-4 sm:pt-12 pt-8 sm:pb-4 pb-2 text-white">
    <div className="flex max-md:flex-col-reverse md:items-center justify-between gap-6 mb-4">
      <div>
        <h1 className="xl:text-[28px] lg:text-[24px] text-[20px] text-[#24B39A] font-bold">Overall Health Data</h1>
        <p className="text-[#373737] xl:text-[16px] md:text-[14px] text-[13px] ">Check out all your health info, neatly in one spot</p>
      </div>
      <div className="flex max-sm:justify-between items-center gap-4">
        <button className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-full xl:text-[14px] md:text-[13px] text-[12px] font-medium transition-colors">
          Upgrade to Premium
        </button>
        <button className="relative">
          <IoNotifications className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </div>

    <div className="flex flex-row-reverse items-center justify-between">
      <button className="flex items-center gap-2 text-[#24CDAF] bg-white hover:bg-[#defff9] px-4 py-2 rounded-full cursor-pointer">
        <span className="xl:text-[16px] md:text-[14px] text-[13px] font-medium">This Week</span>
        <IoChevronDown className="w-4 h-4" />
      </button>
      {/* <span className="text-teal-700 xl:text-[14px] md:text-[13px] text-[12px]">30 min ago</span> */}
    </div>
  </div>
);

export default Header;
