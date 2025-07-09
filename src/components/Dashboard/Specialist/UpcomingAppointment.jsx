import { FaCalendarAlt } from "react-icons/fa";
import StarRating from "./StarRating";
import { FaClock } from "react-icons/fa6";
import Image from "next/image";
import Cardiologist from "../../../assets/images/Cardiologist.png";

const UpcomingAppointment = () => {
  return (
    <div className="bg-white rounded-xl sm:p-6 p-4 shadow-sm">
      <h2 className="xl:text-[20px] md:text-[19px] text-[18px] font-semibold text-gray-800 mb-4">Upcoming appointment</h2>

      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
          <Image src={Cardiologist} alt="Dr. Bukola Agnes" className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="xl:text-[16px] md:text-[15px] text-[14px] font-semibold text-gray-800">Dr. Bukola Agnes</h3>
          <p className="xl:text-[14px] md:text-[13px] text-[12px] text-gray-600">Cardiologist</p>
          <StarRating rating={5} />
        </div>
      </div>

      <div className="flex items-center gap-4 xl:text-[14px] md:text-[13px] text-[12px]">
        <div className="flex items-center gap-2 text-green-600">
          <FaCalendarAlt className="text-green-500" />
          <span>June 15, 2025</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <FaClock />
          <span>9:00am - 10:00am</span>
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointment;
