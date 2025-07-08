import React from "react";
import herofitness from "../../../assets/images/herofitness.jpg";
import PersonIcon from "../../../assets/icons/PersonIcon.svg";
import GroupIcon from "../../../assets/icons/GroupIcon.svg";
import DownloadIcon from "../../../assets/icons/DownloadIcon.svg";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="max-page-width Raleway sm:bg-[#E4FFFA] bg-[#F0FBF9] flex flex-col lg:flex-row items-center justify-between md:px-8 px-4 pt-10">
      <div className="max-lg:mb-10">
        <h1 className="leading-[1.2] xl:text-[48px] md:text-[36px] text-[28px] text-[#1A1A1A] font-bold mb-4">
          Take Control of your Health,
          <span className="text-[#269782]">
            <br className="lg:max-2xl:hidden" /> Smarter & Simpler
          </span>
        </h1>
        <p className="w-full max-w-[600px] text-[#636363] xl:text-[18px] md:text-[16px] text-[14px] mb-6">
          Wellio helps you track your vital health data, consult with trusted experts, and manage your medications — all in one simple platform built for your daily
          routine
        </p>
        <div className="flex space-x-4">
          <Link
            href="/login"
            className="font-semibold xl:text-[18px] md:text-[16px] text-[14px] bg-[#24CDAF] text-white px-8 py-2 rounded-[30px] hover:bg-[#009B8C] transition"
          >
            Get Started
          </Link>
          <a
            href="#footer"
            className="font-semibold xl:text-[18px] md:text-[16px] text-[14px] text-[#24CDAF] px-8 py-2 rounded-[30px] hover:bg-[#c9fff5] transition border border-[#24CDAF]"
          >
            Contact Us
          </a>
        </div>
        <div className="w-full xl:mt-26 sm:mt-16 mt-8">
          <div className="w-full max-w-[500px] flex md:justify-between gap-6 max-sm:flex-wrap space-x-4">
            <div className="flex items-center gap-3">
              <Image src={PersonIcon} className="max-md:w-[30px]" alt="users icon" />
              <div className="">
                <p className="xl:text-[24px] lg:text-[20px] text-[18px] font-semibold">5000+</p>
                <p className="font-medium text-gray-500 xl:text-[14px] lg:text-[12px] text-[10px]">Users</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Image src={GroupIcon} className="max-md:w-[30px]" alt="partners icon" />
              <div className="">
                <p className="xl:text-[24px] lg:text-[20px] text-[18px] font-semibold">300+</p>
                <p className="font-medium text-gray-500 xl:text-[14px] lg:text-[12px] text-[10px]">Partners</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Image src={DownloadIcon} className="max-md:w-[30px]" alt="downloads icon" />
              <div className="">
                <p className="xl:text-[24px] lg:text-[20px] text-[18px] font-semibold">3000+</p>
                <p className="font-medium text-gray-500 xl:text-[14px] lg:text-[12px] text-[10px]">Downloads</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-lg:hidden xl:max-w-[600px] md:max-w-[500px] max-w-[400px] md:w-1/2 mt-6 md:mt-0">
        {/* <Image src={herofitness} alt="Hero" className="w-full h-auto rounded-lg max-sm:opacity-30" /> */}
        <Image src={herofitness} alt="Hero" className="w-full h-auto rounded-lg max-sm:opacity-30" />
      </div>
    </section>
  );
};

export default HeroSection;
