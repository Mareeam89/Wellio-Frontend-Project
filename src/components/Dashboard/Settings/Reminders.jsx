import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { AlertToggle } from "./AlertToggle";
import { SettingsItem } from "./SettingsItem";

const Reminders = () => {
  const [alerts, setAlerts] = useState({
    logMedications: false,
    abnormalHeartrate: false,
    medicationRefill: false,
    checkGlucose: false,
    notifications: false,
    darkMode: false,
  });

  const toggleAlert = (alertKey) => {
    setAlerts((prev) => ({
      ...prev,
      [alertKey]: !prev[alertKey],
    }));
  };

  return (
    <section className="bg-white lg:p-6 sm:p-4 p-3 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="xl:text-[18px] md:text-[16px] text-[14px] font-semibold text-gray-800">Reminders & Alerts</h3>
        <button className="p-1 bg-[#24CDAF] text-white rounded">
          <FaPlus className="xl:text-[14px] md:text-[13px] text-[12px]" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-1 md:p-4 md:border border-slate-200 rounded-xl">
          <AlertToggle label="Log Medications" enabled={alerts.logMedications} onChange={() => toggleAlert("logMedications")} />
          <AlertToggle label="Abnormal Heartrate" enabled={alerts.abnormalHeartrate} onChange={() => toggleAlert("abnormalHeartrate")} />
          <AlertToggle label="Medication Refill" enabled={alerts.medicationRefill} onChange={() => toggleAlert("medicationRefill")} />
          <AlertToggle label="Check Glucose Level" enabled={alerts.checkGlucose} onChange={() => toggleAlert("checkGlucose")} />
        </div>
        <div className="space-y-1 md:p-4 md:border border-slate-200 rounded-xl">
          <AlertToggle label="Notifications" enabled={alerts.notifications} onChange={() => toggleAlert("notifications")} />
          <AlertToggle label="Dark Mode" enabled={alerts.darkMode} onChange={() => toggleAlert("darkMode")} />
          <div className="pt-4 border-t border-gray-200 mt-4">
            <SettingsItem label="Privacy" />
            <SettingsItem label="Export Data" hasArrow />
            <SettingsItem label="Delete Account" hasArrow />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reminders;
