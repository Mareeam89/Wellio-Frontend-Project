import { ToggleSwitch } from "./ToggleSwitch";

export const AlertToggle = ({ label, enabled, onChange }) => (
  <div className="flex items-center justify-between py-3">
    <span className="xl:text-[16px] md:text-[15px] text-[14px] text-gray-500">{label}</span>
    <ToggleSwitch enabled={enabled} onChange={onChange} />
  </div>
);
