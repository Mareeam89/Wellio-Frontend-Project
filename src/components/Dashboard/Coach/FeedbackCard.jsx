import React from "react";

function FeedbackCard() {
  return (
    <div className="flex flex-col items-center mx-auto h-max w-full md:max-w-[300px] bg-white rounded-2xl p-4">
      <h2 className="xl:text-[18px] md:text-[16px] text-[14px] font-bold text-[#373737] my-3 text-center">Give feedback</h2>
      <p className="xl:text-[14px] md:text-[13px] text-[12px] text-gray-400 mb-8 text-center font-normal">Share your review about your current health coach</p>
      <button className="w-full bg-[#23D1B4] text-white xl:text-[14px] md:text-[13px] text-[12px] font-semibold rounded-full p-3 focus:outline-none">
        Give feedback
      </button>
    </div>
  );
}

export default FeedbackCard;
