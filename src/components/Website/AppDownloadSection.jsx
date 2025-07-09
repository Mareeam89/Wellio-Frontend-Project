import React from "react";
import AppStore from "../../assets/images/AppStore.jpg";
import PlayStore from "../../assets/images/PlayStore.jpg";
import DownloadApp from "../../assets/images/DownloadApp.jpg";
import DownloadAppBg from "../../assets/images/DownloadAppBg.jpg"; // Import the background image
import Image from "next/image";

const AppDownloadSection = () => {
  return (
    <div className="relative w-full">
      <Image src={DownloadAppBg} className="absolute top-0 left-0 bg-cover bg-center w-full h-full" />
      <div className="relative z-10 max-w-7xl mx-auto sm:pt-10 max-sm:pt-12 md:px-8 px-4">
        <div className="flex max-sm:flex-col justify-between items-center sm:gap-16 gap-6">
          {/* Left Content */}
          <div className="sm:space-y-8 space-y-6">
            <div className="sm:space-y-4 space-y-2">
              <h2 className="xl:text-[38px] md:text-[26px] text-[20px] font-bold text-white leading-tight">
                Download Wellio
                <br />
                Mobile App
              </h2>
              <p className="xl:text-[18px] lg:text-[16px] text-[14px] text-white leading-relaxed max-w-md">
                Join hundreds managing chronic conditions with less stress today
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex items-center md:gap-6 gap-4">
              <a href="#" className="">
                <Image src={AppStore} alt="App Store" className="h-full xl:max-h-[50px] md:max-h-[45px] max-h-[35px] rounded-[5px]" />
              </a>

              <a href="#" className="">
                <Image src={PlayStore} alt="Play Store" className="h-full xl:max-h-[50px] md:max-h-[45px] max-h-[35px] rounded-[5px]" />
              </a>
            </div>
          </div>

          <div className="">
            <Image src={DownloadApp} alt="Download App" className="max-sm:max-w-[300px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadSection;
