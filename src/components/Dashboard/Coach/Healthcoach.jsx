import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const Healthcoach = (props) => {
  return (
    <div className="bg-[#eaf7f6] rounded-2xl p-4 sm:p-6 flex flex-col items-center w-full shadow-md">
      <Image src={props.image} alt="Health Coach" className="w-16 h-16 rounded-full object-cover mb-2" />
      <h2 className="xl:text-[18px] md:text-[16px] text-[14px] font-bold mt-2 text-center">{props.name}</h2>
      <p className="text-gray-600 xl:text-[14px] md:text-[13px] text-[12px] sm:text-base mt-1 text-center">{props.description}</p>
      <div className="flex items-center mb-4 mt-2">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className={i < props.rating ? "text-[#F6B545] text-base sm:text-lg" : "text-gray-300 text-base sm:text-lg"} />
        ))}
      </div>
      <button className="bg-[#24CDAF] text-white xl:text-[14px] md:text-[13px] text-[12px] py-2 mt-2 w-full rounded-full font-medium">{props.buttonText}</button>
    </div>
  );
};

export default Healthcoach;
