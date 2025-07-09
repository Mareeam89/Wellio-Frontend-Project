import { FaChevronRight } from "react-icons/fa6";

export const SettingsItem = ({ label, hasArrow = false, onClick }) => (
  <div className="flex items-center justify-between py-3 cursor-pointer hover:bg-gray-50 rounded" onClick={onClick}>
    <span className="xl:text-[16px] md:text-[15px] text-[14px] text-gray-500">{label}</span>
    {hasArrow && <FaChevronRight className="text-gray-400 xl:text-[14px] md:text-[13px] text-[12px]" />}
  </div>
);
