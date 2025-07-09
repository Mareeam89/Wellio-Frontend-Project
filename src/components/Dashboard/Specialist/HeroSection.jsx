import Image from "next/image";
import specialistBanner from "@/assets/images/specialistBanner.png";

const HeroSection = () => {
  return (
    <div className="flex-1 relative h-full max-h-[200px] rounded-xl overflow-hidden">
      <Image src={specialistBanner} alt="banner" className="absolute top-0 left-0 h-full object-cover object-center rounded-xl" />
      <div className="relative rounded-xl sm:p-6 p-4 text-white mb-6">
        <div className="relative z-10 max-sm:max-w-[240px]">
          <h1 className="xl:text-[24px] md:text-[22px] text-[20px] font-bold mb-2">Fast, expert consultation</h1>
          <p className="text-teal-50 mb-4 xl:text-[16px] md:text-[15px] text-[14px]">Get responses for your health problems</p>
          <button className="xl:text-[16px] md:text-[15px] text-[14px] bg-teal-400 hover:bg-teal-300 text-white px-4 py-2 rounded-lg font-medium">Find Specialist</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
