import React from "react";

function LearnmoreBanner() {
  return (
    <div className="bg-white rounded-2xl flex flex-col md:flex-row items-center justify-between p-4 w-full shadow">
      {/* Left: Text and Button */}
      <div className="flex flex-col items-center mb-6 md:mb-0">
        <h2 className="text-[#23D1B4] xl:text-[18px] md:text-[16px] text-[14px] font-medium mb-6">
          Why is it so important
          <br />
          to do check-ups?
        </h2>
        <button className="bg-[#23D1B4] text-white xl:text-[14px] md:text-[13px] text-[12px] font-semibold rounded-full px-8 py-3 shadow">Learn more</button>
      </div>
      {/* Right: Heart with line */}
      <div className="flex items-center w-full max-sm:max-w-[100px] md:w-auto justify-center">
        <svg width="180" height="90" viewBox="0 0 180 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="45" x2="70" y2="45" stroke="#EAF3F2" strokeWidth="3" />
          <line x1="110" y1="45" x2="180" y2="45" stroke="#EAF3F2" strokeWidth="3" />
          <g>
            <path d="M90 70c-12-12-30-22-30-38a18 18 0 0136 0 18 18 0 0136 0c0 16-18 26-30 38z" fill="#F76C7C" />
            <polyline points="70,45 80,45 85,55 90,35 95,55 100,45 110,45" fill="none" stroke="#fff" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default LearnmoreBanner;
