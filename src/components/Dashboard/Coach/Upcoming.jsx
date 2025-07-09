import React from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

const Upcoming = ({ date = "June 15,2025", time = "9:00am-10:00am", onFeedback }) => {
  return (
    <div className="w-full max-w-[500px] flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-bold text-[#373737] mb-6 text-center">Upcoming session</h2>
      <div className="w-full flex justify-center items-center gap-4 mb-8">
        <FaCalendarAlt className="text-[#23D1B4] text-2xl" />
        <span className="xl:text-[14px] md:text-[13px] text-[12px] text-[#5A5A5A]">{date}</span>
        <FaClock className="text-[#23D1B4] text-2xl ml-4" />
        <span className="xl:text-[14px] md:text-[13px] text-[12px] text-[#5A5A5A]">{time}</span>
      </div>
      <button
        className="w-full max-w-[200px] xl:text-[16px] md:text-[15px] text-[14px] bg-[#23D1B4] text-white text-nowrap font-medium rounded-full xl:p-4 sm:p-3 p-2"
        onClick={onFeedback}
      >
        Give feedback
      </button>
    </div>
  );
};

export default Upcoming;
