export const ToggleSwitch = ({ enabled, onChange }) => (
  <button
    onClick={onChange}
    className={`relative inline-flex sm:h-6 h-[18px] sm:w-11 w-[34px] items-center rounded-full transition-colors ${enabled ? "bg-[#24CDAF]" : "bg-gray-300"}`}
  >
    <span
      className={`inline-block sm:h-[18px] sm:w-[18px] h-[14px] w-[14px] transform rounded-full bg-white transition-transform ${
        enabled ? "sm:translate-x-6 translate-x-[18px]" : "sm:translate-x-[3px] translate-x-[2px]"
      }`}
    />
  </button>
);
