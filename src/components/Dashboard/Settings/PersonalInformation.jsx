import React from "react";
import { FaChevronDown, FaEdit } from "react-icons/fa";
import InputField from "./InputField";

const PersonalInformation = ({ personalInfo, setPersonalInfo }) => {
  return (
    <section className="bg-white lg:p-6 sm:p-4 p-3 rounded-xl shadow-sm">
      <h3 className="xl:text-[18px] md:text-[16px] text-[14px] font-semibold text-gray-800 mb-4">Personal Information</h3>

      <div className="flex space-x-6 mb-6">
        <label className="flex items-center xl:text-[16px] md:text-[15px] text-[14px]">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={personalInfo.gender === "male"}
            onChange={(e) => setPersonalInfo((prev) => ({ ...prev, gender: e.target.value }))}
            className="mr-2 text-[#24CDAF]"
          />
          Male
        </label>
        <label className="flex items-center xl:text-[16px] md:text-[15px] text-[14px]">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={personalInfo.gender === "female"}
            onChange={(e) => setPersonalInfo((prev) => ({ ...prev, gender: e.target.value }))}
            className="mr-2 text-[#24CDAF]"
          />
          Female
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-4 gap-3 sm:mb-4 mb-3">
        <InputField label="First name" value={personalInfo.firstName} onChange={(e) => setPersonalInfo((prev) => ({ ...prev, firstName: e.target.value }))} />
        <InputField label="Last name" value={personalInfo.lastName} onChange={(e) => setPersonalInfo((prev) => ({ ...prev, lastName: e.target.value }))} />
        <InputField label="Date of birth" value={personalInfo.dateOfBirth} onChange={(e) => setPersonalInfo((prev) => ({ ...prev, dateOfBirth: e.target.value }))} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-4 gap-3">
        <InputField label="Phone number" value={personalInfo.phoneNumber} onChange={(e) => setPersonalInfo((prev) => ({ ...prev, phoneNumber: e.target.value }))} />

        <div>
          <label className="block xl:text-[14px] md:text-[13px] text-[12px] font-medium text-gray-500 sm:mb-1">Change plan</label>
          <div className="relative w-full border border-gray-300 rounded-lg focus:outline-none">
            <select className="w-full md:p-3 p-[14px] xl:text-[16px] md:text-[14px] text-[12px] border-none rounded-lg focus:border-none focus:outline-none appearance-none">
              <option className="w-full max-w-[255px] xl:text-[16px] md:text-[14px] text-[12px]">Pro</option>
              <option className="w-full max-w-[255px] xl:text-[16px] md:text-[14px] text-[12px]">Basic</option>
              <option className="w-full max-w-[255px] xl:text-[16px] md:text-[14px] text-[12px]">Premium</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center text-gray-600 xl:text-[16px] md:text-[14px] text-[12px] mr-[6px] px-2 pointer-events-none">
              <FaChevronDown />
            </div>
          </div>
        </div>

        <div>
          <label className="block xl:text-[14px] md:text-[13px] text-[12px] font-medium text-gray-500 sm:mb-1">Conditions</label>
          <div className="flex items-center space-x-2 md:p-[11px] p-3 border border-gray-300 rounded-lg">
            <span className="xl:text-[14px] md:text-[13px] text-[12px] text-black">Diabetes</span>
            <span className="text-gray-400">•</span>
            <span className="xl:text-[14px] md:text-[13px] text-[12px] text-black">Hypertension</span>
            <FaEdit className="text-[#24CDAF] ml-auto xl:text-[14px] md:text-[13px] text-[12px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInformation;
