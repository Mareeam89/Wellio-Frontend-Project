import React from "react";
import CTAButton from "./CTAButton";
import Image from "next/image";

const DeviceSection = ({ title = "", subTitle = "", sideImage, isImageLeft, btnText = "Get Started" }) => {
  return (
    <section className="md:mt-8 mt-4">
      <div
        className={`max-page-width flex flex-col ${
          isImageLeft ? "lg:flex-row-reverse" : "lg:flex-row"
        } justify-between items-center gap-4 md:p-10 p-8 sm:px-10 lg:px-16 2xl:px-20`}
      >
        <div className="flex flex-col lg:items-start items-center max-md:text-center max-w-[600px]">
          <h2 className="xl:text-[38px] lg:text-[26px] text-[20px] font-bold text-[#1A1A1A] leading-[1.1]">{title}</h2>
          <p className="mt-2 text-start text-[#636363] xl:text-[18px] lg:text-[16px] text-[14px] max-w-[600px]">{subTitle}</p>
          <div className="md:mt-8 mt-4">
            <CTAButton btnText={btnText} />
          </div>
        </div>
        <Image src={sideImage} alt="Feature" className="lg:w-[40%] max-lg:max-w-[400px] w-full rounded-xl transition duration-300 hover:scale-[1.05]" />
      </div>
    </section>
  );
};

export default DeviceSection;
