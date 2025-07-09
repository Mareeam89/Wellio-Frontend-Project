import React from "react";
import premiumbanner from "../../../assets/Dashboard/Coach/premiumbanner.png";
import Image from "next/image";

function PremiumBanner() {
  return (
    <div className="w-full flex items-center justify-between gap-6 bg-[#23D1B4] rounded-2xl overflow-hidden">
      {/* Left: Text and Button */}
      <div className="flex-1 flex-col items-start z-10 p-4">
        <h2 className="text-white xl:text-[18px] md:text-[16px] text-[14px] font-semibold mb-6">
          Use our premium
          <br />
          features now
        </h2>
        <button className="bg-white text-nowrap text-[#23D1B4] xl:text-[14px] md:text-[13px] text-[12px] font-semibold rounded-full px-8 py-3 shadow">Get premium</button>
      </div>
      <Image src={premiumbanner} alt="side image" className="w-full max-w-[240px]" />
    </div>
  );
}

export default PremiumBanner;
