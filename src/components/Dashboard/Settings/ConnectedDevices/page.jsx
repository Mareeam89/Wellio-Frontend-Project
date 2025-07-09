import React, { useState } from "react";
import { Device } from "./Device";
import { FaApple, FaGoogle, FaPlus } from "react-icons/fa6";
import { MdFitnessCenter } from "react-icons/md";

const ConnectedDevices = () => {
  const [devices, setDevices] = useState({
    appleHealth: true,
    myFitnessPal: false,
    googleFit: false,
  });

  const toggleDevice = (deviceKey) => {
    setDevices((prev) => ({
      ...prev,
      [deviceKey]: !prev[deviceKey],
    }));
  };

  return (
    <section className="bg-white lg:p-6 sm:p-4 p-3 rounded-xl shadow-sm">
      <h3 className="xl:text-[18px] md:text-[16px] text-[14px] font-semibold text-gray-800 mb-4">Connected Devices</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Device icon={<FaApple className="text-gray-800" />} name="Apple Health" connected={devices.appleHealth} onToggle={() => toggleDevice("appleHealth")} />
        <Device icon={<MdFitnessCenter className="text-blue-600" />} name="MyFitnessPal" connected={devices.myFitnessPal} onToggle={() => toggleDevice("myFitnessPal")} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Device icon={<FaGoogle className="text-red-500" />} name="Google Fit" connected={devices.googleFit} onToggle={() => toggleDevice("googleFit")} />
        <button className="ml-auto sm:h-[56px] h-[46px] max-w-[400px] flex items-center justify-center space-x-2 p-4 bg-[#24CDAF] xl:text-[16px] md:text-[15px] text-[14px] text-white rounded-lg hover:bg-emerald-600">
          <FaPlus />
          <span>Connect new device</span>
        </button>
      </div>
    </section>
  );
};

export default ConnectedDevices;
