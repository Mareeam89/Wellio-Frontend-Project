import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const ChatCoach = ({ name, role, image, rating = 5, buttonText = "Continue chat", onButtonClick }) => {
  return (
    <div className="w-full bg-[#fff] rounded-[30px] p-4 shadow-md">
      <h1 className="text-base xl:text-[18px] md:text-[16px] text-[14px] m-2">Last contacted health coach</h1>
      <div className="w-full flex items-center gap-4 p-4 xl:py-12 bg-[#eaf3f2] rounded-2xl">
        {/* Left: Image and Info */}
        <Image src={image} alt={name} className="md:w-24 md:h-24 sm:w-20 sm:h-20 w-16 h-16 rounded-full object-cover bg-[#393939]" />
        <div className="w-full flex max-xl:flex-col xl:items-center justify-between gap-4">
          <div>
            <h2 className="xl:text-[24px] md:text-[20px] text-[18px] font-bold text-[#373737] text-nowrap mb-2">{name}</h2>
            <p className="xl:text-[16px] md:text-[15px] text-[14px] text-[#373737] text-nowrap mb-4">{role}</p>
            <div className="flex justify-between xl:max-w-[150px] max-w-[120px] gap-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < rating ? "text-[#F6B545] text-[16px]" : "text-gray-300 text-2xl"} />
              ))}
            </div>
          </div>
          <button
            className="w-full max-w-[200px] xl:text-[16px] md:text-[15px] text-[14px] bg-[#23D1B4] text-white text-nowrap font-medium rounded-full xl:p-4 sm:p-3 p-2"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatCoach;
