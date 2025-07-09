import { FaPills, FaPlus } from "react-icons/fa6";

const CurrentPrescription = () => {
  return (
    <div className="bg-white rounded-xl sm:p-6 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="xl:text-[20px] md:text-[19px] text-[18px] font-semibold text-gray-800">Current prescription</h2>
        <button className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
          <FaPlus className="text-white xl:text-[14px] md:text-[13px] text-[12px]" />
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <FaPills className="text-blue-600 xl:text-[14px] md:text-[13px] text-[12px]" />
          </div>
          <div>
            <h3 className="xl:text-[16px] md:text-[15px] text-[14px] font-medium text-gray-800">Vitamin D</h3>
            <p className="xl:text-[14px] md:text-[13px] text-[12px] text-gray-600">5mg - 2x per day</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <FaPills className="text-blue-600 xl:text-[14px] md:text-[13px] text-[12px]" />
          </div>
          <div>
            <h3 className="xl:text-[16px] md:text-[15px] text-[14px] font-medium text-gray-800">Paracetamol</h3>
            <p className="xl:text-[14px] md:text-[13px] text-[12px] text-gray-600">500mg - 3x per day</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentPrescription;
