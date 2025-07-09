"use client";

import { useState } from "react";
import RightArrowHead from "../../../assets/icons/RightArrowHead.svg";
import Image from "next/image";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email) {
      console.log("Newsletter subscription:", email);
      setEmail("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="md:space-y-4 space-y-2">
      <h3 className="text-gray-800 xl:text-[18px] md:text-[16px] text-[14px] font-semibold uppercase tracking-wide">Newsletter</h3>
      <p className="text-gray-600 xl:text-[14px] md:text-[13px] text-[12px]">Subscribe to our newsletter & get the latest news</p>
      <div className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Enter your email"
            className="w-full px-4 sm:py-[10px] py-[9px] bg-[#E4FFFA] border border-[#1fb89d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#24CDAF] focus:border-transparent pr-12 xl:placeholder:text-[14px] md:placeholder:text-[13px] placeholder:text-[12px]"
          />
          <button
            onClick={handleSubmit}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#24CDAF] transition-colors duration-200"
          >
            <Image src={RightArrowHead} alt="" />
          </button>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full xl:text-[18px] lg:text-[16px] text-[14px] bg-[#24CDAF] hover:bg-[#1fb89d] text-white font-medium py-3 px-6 rounded-full transition-colors duration-200"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
