import { GiCheckMark } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import CTAButton from "../CTAButton";

const PlanCard = ({ price, planName, features, buttonText = "Get Started", isPopular = false }) => {
  return (
    <div
      className={`relative flex flex-col bg-white rounded-xl border-2 xl:p-8 lg:p-6 sm:p-4 p-3 transition-all duration-300 sm:shadow-[#24cdae6d] hover:shadow-lg border-[#24CDAF] hover:border-[#1fb89d]`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-[#000] text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
        </div>
      )}

      <div className="mb-6">
        <div className="flex items-baseline mb-2">
          <span className="xl:text-[32px] md:text-[28px] text-[24px] font-bold text-gray-900">{price}</span>
          <span className="text-gray-600 xl:text-[18px] md:text-[16px] text-[14px] ml-2">/Month</span>
        </div>
        <h3 className="xl:text-[26px] md:text-[24px] text-[20px] font-semibold text-gray-900">{planName}</h3>
      </div>

      <div className="md:space-y-4 space-y-2 md:mb-8 mb-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0 sm:mr-3 mr-2 mt-0.5">
              {feature.included ? (
                <div className="w-5 h-5 bg-[#24CDAF] rounded-full flex items-center justify-center">
                  <GiCheckMark size={12} className="text-white" />
                </div>
              ) : (
                <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
                  <IoClose size={12} className="text-gray-500" />
                </div>
              )}
            </div>
            <span className={`text-gray-700 xl:text-[18px] lg:text-[16px] text-[14px] ${!feature.included ? "line-through text-gray-400" : ""}`}>{feature.text}</span>
          </div>
        ))}
      </div>

      <CTAButton btnText={buttonText} className="sm:max-w-[200px] md:self-center" />
    </div>
  );
};

export default PlanCard;
