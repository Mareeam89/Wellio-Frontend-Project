import Sidebar from "../../../components/Dashboard/Sidebar.jsx";
import Header from "../../../components/Dashboard/Settings/Header/page.jsx";
import MobileBottomNav from "../../../components/Dashboard/MobileBottomNav.jsx";
import SettingContainer from "../../../components/Dashboard/Settings/SettingContainer.jsx";
import profilePicture from "../../../assets/images/profilePicture.png";

const Settings = () => {
  const activeTabName = "Settings";

  return (
    <div className="bg-[#E8F2F1]">
      <Sidebar activeTabName={activeTabName} />
      <div className="w-full xl:pl-[120px] lg:pl-[100px] lg:pb-0 pb-20 bg-gray-50 min-h-[100svh]">
        {/* Header */}
        <Header src={profilePicture} name="Paul Dairo" email="Paul_dairo@gmail.com" verified={true} />
        <SettingContainer />
      </div>

      <MobileBottomNav activeTabName={activeTabName} />
    </div>
  );
};

export default Settings;
