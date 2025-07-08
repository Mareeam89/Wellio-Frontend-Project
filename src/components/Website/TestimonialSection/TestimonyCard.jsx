import React from "react";
import Image from "next/image";

const TestimonyCard = ({ testimony, userImage, name, profession }) => {
  return (
    <div className="w-full xl:min-w-[350px] md:min-w-[300px] min-w-[220px] flex flex-col items-center md:gap-3 gap-2 md:p-5 p-4 bg-white rounded-lg border border-[#24CDAF] transition-all duration-300 shadow-[#24cdaea9] hover:shadow-lg">
      <p className="h-[120px] text-gray-700 xl:text-[15px] md:text-[14px] text-[13px]">“{testimony}”</p>
      <Image src={userImage} width={100} height={100} alt="company logo" className="xl:w-[65px] md:w-[55px] w-[45px] rounded-full" />
      <h4 className="xl:text-[20px] md:text-[18px] text-[16px] font-semibold text-center">{name}</h4>
      <p className="text-gray-700 xl:text-[15px] md:text-[14px] text-[13px]">{profession}</p>
    </div>
  );
};

export default TestimonyCard;
