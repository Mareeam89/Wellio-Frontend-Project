import { ToggleSwitch } from "../ToggleSwitch";

export const Device = ({ icon, name, connected, onToggle }) => (
  <div className="flex items-center justify-between sm:p-4 p-[10px] bg-white rounded-lg border border-gray-200 mb-3">
    <div className="flex items-center space-x-3">
      <div className="xl:text-[22px] md:text-[20px] text-[18px] text-2xl">{icon}</div>
      <span className="xl:text-[16px] md:text-[14px] text-[12px] font-medium text-gray-800">{name}</span>
    </div>
    <ToggleSwitch enabled={connected} onChange={onToggle} />
  </div>
);
