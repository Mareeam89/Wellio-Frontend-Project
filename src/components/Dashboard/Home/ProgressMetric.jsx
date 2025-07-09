import React from "react";
import Image from "next/image";

const ProgressMetric = ({ title, icon, value, progressImage, description }) => {
  return (
    <div className="bg-white rounded-[15px] p-4 flex flex-col gap-2 w-full shadow-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image src={icon} alt="icon" />
          <h2 className="font-semibold">{title}</h2>
        </div>
        <p className="xl:text-[16px] md:text-[15px] text-[14px]">{value}</p>
      </div>
      <div className="self-center">
        <p className="xl:text-[14px] md:text-[13px] text-[12px] text-gray-400">Past 7 days</p>
        <Image src={progressImage} className="w-[320px]" alt="Progress" />
        <p className="xl:text-[14px] md:text-[13px] text-[12px] mt-6 text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default ProgressMetric;
