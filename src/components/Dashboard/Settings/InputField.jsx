const InputField = ({ label, placeholder, value, onChange }) => (
  <div className="">
    <label className="block xl:text-[14px] md:text-[13px] text-[12px] font-medium text-gray-500 sm:mb-1">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full xl:text-[16px] md:text-[14px] text-[12px] md:p-3 p-[14px] border border-gray-300 rounded-lg focus:outline-none"
    />
  </div>
);

export default InputField;
