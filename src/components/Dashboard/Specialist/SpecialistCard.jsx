import { FaEnvelope } from "react-icons/fa6";
import StarRating from "./StarRating";
import Image from "next/image";

const SpecialistCard = ({ name, specialty, image, rating = 5 }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
          <Image src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <h3 className="xl:text-[16px] md:text-[15px] text-[14px] font-semibold text-gray-800">{name}</h3>
          <p className="xl:text-[14px] md:text-[13px] text-[12px] text-gray-600">{specialty}</p>
          <StarRating rating={rating} />
        </div>
      </div>

      <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 xl:text-[16px] md:text-[15px] text-[14px] rounded-lg font-medium flex items-center justify-center gap-2">
        <FaEnvelope className="xl:text-[14px] md:text-[13px] text-[12px]" />
        Message
      </button>
    </div>
  );
};

export default SpecialistCard;
