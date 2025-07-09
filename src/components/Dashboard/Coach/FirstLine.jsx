import { FaSearch, FaSlidersH } from "react-icons/fa";
import notification from "../../../assets/Dashboard/Coach/notification.png";
import man from "../../../assets/images/profilePicture.png";
import Image from "next/image";

function FirstLine({ value, onChange, placeholder = "Search for health coach", onFilterClick }) {
  return (
    <div className="w-full flex max-lg:flex-col justify-between items-center gap-4">
      {/* Top: Search and Filter */}
      <div className="w-full max-w-[500px] flex items-center gap-4">
        {/* Search Bar */}
        <div className="bg-white rounded-full flex items-center justify-between px-4 py-2 sm:px-6 sm:py-3 shadow">
          <FaSearch className="text-[#23D1B4] text-lg sm:text-2xl mr-3 sm:mr-4" />
          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="bg-transparent outline-none border-none text-[#23D1B4] xl:text-[14px] md:text-[13px] text-[12px] placeholder-[#23D1B4]"
          />
        </div>
        {/* Filter Button */}
        <button onClick={onFilterClick} className="bg-white w-8 h-8 sm:w-[50px] sm:h-[45px] flex items-center justify-center rounded-[32px] shadow self-center">
          <FaSlidersH className="text-[#23D1B4] text-xl sm:text-3xl" />
        </button>
      </div>
      {/* Bottom: Date/Notification and User */}
      <div className="flex-1 flex justify-end gap-4">
        <div className="flex items-center gap-2 justify-between">
          <p className="xl:text-[12px] md:text-[11px] text-[10px] text-gray-500 font-normal text-nowrap">6, May, 2025</p>
          <Image src={notification} alt="notification" className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        <div className="date flex items-center gap-2 justify-between">
          <h1 className="font-semibold text-black xl:text-[14px] md:text-[13px] text-[12px] text-nowrap">Paul Dairo</h1>
          <Image src={man} alt="Placeholder" className="w-16 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default FirstLine;
