import { FaSearch } from "react-icons/fa";
import { FaFilter, FaUser } from "react-icons/fa6";
import profilePicture from "../../../assets/images/profilePicture.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex max-md:flex-col md:items-center justify-between gap-4 p-4 bg-white">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative flex-1 max-w-md">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for health specialist"
            className="w-full pl-10 pr-4 py-2 xl:text-[14px] md:text-[13px] text-[12px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <FaFilter className="text-gray-600" />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-gray-600 xl:text-[16px] md:text-[15px] text-[14px]">6. May , 2025</span>
        <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
          <FaUser className="text-white xl:text-[14px] md:text-[13px] text-[12px]" />
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-800 xl:text-[16px] md:text-[15px] text-[14px]">Paul Dairo</span>
          <div className="md:w-12 md:h-12 w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
            <Image src={profilePicture} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
