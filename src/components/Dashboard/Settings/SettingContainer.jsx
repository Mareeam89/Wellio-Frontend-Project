"use client";

import React, { useState } from "react";
import PersonalInformation from "./PersonalInformation";
import PaymentMethod from "./PaymentMethod/page.jsx";
import Reminders from "./Reminders";
import ConnectedDevices from "./ConnectedDevices/page.jsx";

// Main Setting Component ------------------------------------------------------
const SettingContainer = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    phoneNumber: "",
    gender: "male",
  });

  return (
    <div className="lg:p-6 sm:p-4 p-3 space-y-8">
      {/* Personal Information */}
      <PersonalInformation personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />

      {/* Connected Devices */}
      <ConnectedDevices />

      {/* Payment Methods */}
      <PaymentMethod />

      {/* Reminders & Alerts */}
      <Reminders />
    </div>
  );
};

export default SettingContainer;
