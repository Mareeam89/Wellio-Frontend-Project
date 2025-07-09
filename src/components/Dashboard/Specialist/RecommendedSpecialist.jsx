import Image from "next/image";
import StarRating from "./StarRating";
import Endocrinologist from "@/assets/images/Endocrinologist.png";

const RecommendedSpecialist = () => {
  return (
    <div className="bg-white rounded-xl sm:p-6 p-4 shadow-sm border-2 border-teal-100">
      <h2 className="xl:text-[20px] md:text-[19px] text-[18px]  font-semibold text-gray-800 mb-4">Recommended specialist</h2>

      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
          <Image src={Endocrinologist} alt="Dr. Felicia Amah" className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="xl:text-[16px] md:text-[15px] text-[14px] font-semibold text-gray-800">Dr. Felicia Amah</h3>
          <p className="xl:text-[14px] md:text-[13px] text-[12px] text-gray-600">Endocrinologist</p>
          <StarRating rating={5} />
        </div>
      </div>

      <button className="w-full bg-teal-500 hover:bg-teal-600 text-white xl:text-[16px] md:text-[15px] text-[14px] py-2 rounded-lg font-medium">Book appointment</button>
    </div>
  );
};

export default RecommendedSpecialist;
