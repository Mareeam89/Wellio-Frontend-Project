import React from "react";
import { MdNotifications } from "react-icons/md";
import metric from "../../assets/Dashboard/metrics.png";
import heart from "../../assets/Dashboard/heart.png";
import heartrate from "../../assets/Dashboard/heartrate.png";
import medication from "../../assets/Dashboard/medication.png";
import checkbox from "../../assets/Dashboard/checkbox.png";
import mood from "../../assets/Dashboard/mood.png";
import glucose from "../../assets/Dashboard/glucose.png";
import pressure from "../../assets/Dashboard/pressure.png";
import abnormal from "../../assets/Dashboard/Abnormal.png";
import heartprogress from "../../assets/Dashboard/heartprogress.png";
import glucoselevel from "../../assets/Dashboard/glucoselevel.png";
import glucoseicon from "../../assets/Dashboard/glucloseicon.png";
import cancelicon from "../../assets/Dashboard/cancelicon.png";
import medicationicon from "../../assets/Dashboard/medicationicon.png";
import yoga from "../../assets/Dashboard/yoga.png";
import Link from "next/link";
import profilePicture from "../../assets/images/profilePicture.png";
import Sidebar from "../../components/Dashboard/Sidebar";
import MobileBottomNav from "../../components/Dashboard/MobileBottomNav";
import HealthMetricsCard from "../../components/Dashboard/Home/HealthMetricsCard";
import ProgressMetric from "../../components/Dashboard/Home/ProgressMetric";
import Image from "next/image";

const HomeScreen = () => {
  const activeTabName = "Home";

  return (
    <div className="flex min-h-[100svh] bg-[#E8F2F1]">
      <Sidebar activeTabName={activeTabName} />
      <div className="w-full flex max-lg:flex-col xl:ml-[120px] lg:ml-[100px] max-lg:pb-20">
        {/* Main Content */}
        <main className="flex-1 w-full p-4">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white p-4 rounded-[10px] shadow-lg">
            <div>
              <h1 className="xl:text-[28px] md:text-[24px] text-[20px] font-semibold">Good morning Paul</h1>
              <p className="xl:text-[16px] md:text-[15px] text-[14px] font-normal text-gray-500">Your wellness at a glance</p>
            </div>
            <div className="flex items-center gap-4 sm:gap-10 mt-4 sm:mt-0 w-full sm:w-auto">
              <Link
                href="/dashboard"
                className="w-full sm:min-w-[250px] md:p-3 p-2 xl:text-[16px] md:text-[15px] text-[14px] bg-[#23ccb2] hover:bg-teal-500 text-white text-center rounded-full"
              >
                Upgrade to Premium
              </Link>
              <button className="bg-white border border-red-500 sm:p-2 p-[6px] rounded-full">
                <MdNotifications className="xl:text-[24px] md:text-[22px] text-[20px] text-red-500 hover:text-[#23ccb2]" />
              </button>
            </div>
          </div>

          {/* Health Metrics */}
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-2">
              <h1 className="xl:text-[18px] md:text-[17px] text-[16px] font-semibold">Health Metrics</h1>
              <Image src={metric} alt="Health Metrics" className="w-[25px]" />
            </div>
            <div className="grid grid-cols-4 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-4 mt-2">
              {/* Heart Rate */}
              <HealthMetricsCard title="Heart Rate" heartImg={heart} heartrateImg={heartrate} bpmValue="71bpm" status="Normal" timeAgo="1 hour ago" />
              {/* Medication */}
              <HealthMetricsCard title="Take Medication" heartImg={checkbox} heartrateImg={medication} bpmValue="Medication" status="stable" timeAgo="1 hour ago" />
              {/* Mood */}
              <HealthMetricsCard title="Mood" heartImg={mood} heartrateImg={mood} bpmValue="Today" status="Okay" timeAgo="45 min ago" />
              {/* Glucose */}
              <HealthMetricsCard title="Glucose" heartImg={glucose} heartrateImg={glucose} bpmValue="71bpm" status="Normal" timeAgo="1 hour ago" />
            </div>
          </div>

          {/* Symptoms */}
          <div className="mt-10">
            <div className="flex max-xl:flex-col justify-between">
              <div className="w-full">
                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                    <h1 className="xl:text-[18px] md:text-[17px] text-[16px] font-semibold">Symptoms</h1>
                    <p className="xl:text-[14px] md:text-[13px] text-[12px] text-gray-400">1 hour ago</p>
                  </div>
                  <div className="bg-white rounded-[15px] px-8 py-6 mt-2 flex flex-col sm:flex-row items-center justify-between">
                    <span className="text-[#232323] font-semibold">No Symptoms</span>
                    <button className="w-full mt-4 sm:mt-0 px-4 py-2 bg-[#23ccb2] hover:bg-teal-500 text-white rounded-full font-medium">Track</button>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <h2 className="font-semibold">Upcoming</h2>
                    <button className="ml-2 px-3 py-1 bg-[#23ccb2] hover:bg-teal-500 text-white rounded-full xl:text-[18px] md:text-[17px] text-[16px]">+</button>
                  </div>
                  <div className="mt- xl:text-[14px] md:text-[13px] text-[12px] text-gray-500">Today</div>
                  <div className=" ">
                    <div>
                      <div className="bg-white rounded-[15px] md:p-6 p-4 mt-2 flex flex-col gap-4 shadow">
                        <div className="flex items-center gap-4">
                          <div className="flex justify-center items-center w-10 h-10 bg-[#eaf3f2] rounded">
                            <Image className="" src={medicationicon} alt="" />
                          </div>
                          <h2 className="xl:text-[16px] md:text-[15px] text-[14px] font-semibold text-[#232323]">Medication</h2>
                        </div>
                        <div>
                          <div className="flex items-center mb-2 xl:text-[16px] md:text-[15px] text-[14px]">
                            <span className="w-3 h-3 bg-gray-500 rounded-full mr-3"></span>
                            <span className="text-[#23ccb2] font-medium mr-6">Lisinopril</span>
                            <span className="text-gray-700 mr-6">10mg</span>
                            <span className="text-gray-400">7:30AM</span>
                          </div>
                          <div className="flex items-center xl:text-[16px] md:text-[15px] text-[14px]">
                            <span className="w-3 h-3 bg-gray-500 rounded-full mr-3"></span>
                            <span className="text-[#23ccb2] font-medium mr-6">Metformin</span>
                            <span className="text-gray-700 mr-6">500mg</span>
                            <span className="text-gray-400">6:30PM</span>
                          </div>
                        </div>
                        <hr className="my-2 border-gray-400" />
                        <div>
                          <p className="text-[#23ccb2] font-medium">Refill needed soon</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="bg-white rounded-[15px] md:p-6 p-4 mt-2 flex flex-col gap-4 shadow">
                        <div className="flex justify-between items-center gap-4">
                          <Image src={pressure} alt="symbols" />
                          <h3 className="xl:text-[16px] md:text-[15px] text-[14px] font-medium pr-3 ">Take blood pressure meds</h3>
                          <p className="xl:text-[14px] md:text-[13px] text-[12px] text-gray-400">9:00AM</p>
                        </div>
                        <div className="flex max-sm:flex-col gap-2 px-6 mt-2">
                          <button className=" p-[10px] w-full bg-[#23ccb2] hover:bg-teal-500 text-white rounded-full">Mark as done</button>
                          <button className=" p-[10px] w-full bg-gray-200 text-[#373737] rounded-full">Snooze</button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-[15px] md:p-6 p-4 mt-2 flex flex-col gap-4 shadow">
                      <div className="flex justify-between items-center gap-4">
                        <div>
                          <Image src={abnormal} alt="symbols" />
                        </div>
                        <div>
                          <h2 className="xl:text-[16px] md:text-[15px] text-[14px] font-medium">Abnormal heart rate</h2>
                          <p className="xl:text-[14px] md:text-[13px] text-[12px]">4:00PM</p>
                        </div>
                        <button className="xl:text-[14px] md:text-[13px] text-[12px] px-3 py-1 bg-red-500 text-white rounded-lg mt-2">High</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-xl:hidden">
                <div className="w-px h-full border-2 border-[#24CDAF] mx-6 rounded"></div>
              </div>
              {/* Progress */}
              <div className="max-xl:pt-6 w-full xl:max-w-[350px]">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold">Progress</h1>
                  <p className="text-[#23ccb2] cursor-pointer">See all</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 mt-2">
                  <ProgressMetric
                    title="Heart Rate"
                    icon={heart}
                    value="71bpm"
                    progressImage={heartprogress}
                    description="Heart rate has remained stable over the past week"
                  />
                  <ProgressMetric
                    title="Glucose"
                    icon={glucoseicon}
                    value="85mg/dl"
                    progressImage={glucoselevel}
                    description="Blood glucose has remained normal over the past week"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Right Aside */}
        <aside className="w-full xl:max-w-[400px] lg:max-w-[360px] bg-gradient-to-b from-[#D5EFEA] to-[#24CDAF] p-4 rounded-t-[10px] lg:rounded-r-[10px] lg:rounded-t-none shadow-lg mt-4 lg:mt-0">
          <div className="flex items-center gap-4">
            <Image src={profilePicture} alt="Placeholder" className="w-[50px] h-[50px] rounded-full" />
            <div>
              <h1 className="xl:text-[16px] md:text-[15px] text-[14px] font-semibold text-black">Paul Dairo</h1>
              <p className="xl:text-[14px] md:text-[13px] text-[12px] text-black">36 Years</p>
            </div>
          </div>
          <div className="mt-8  flex items-center justify-between">
            <h1 className="text-black font-semibold">My Conditions</h1>
            <button className="ml-2  px-5 py-1 bg-[#24CDAF] text-[#fff] rounded-full xl:text-[18px] md:text-[17px] text-[16px]">+</button>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <button className="xl:text-[14px] md:text-[13px] text-[12px] px-4 py-1 bg-white text-[#000 rounded-full">Diabetes</button>
            <button className="xl:text-[14px] md:text-[13px] text-[12px] px-4 py-1 bg-white text-[#000] rounded-full">Hypertension</button>
            <Image src={cancelicon} alt="Cancel Icon" className="h-[20px] cursor-pointer" />
          </div>
          <div className="xl:text-[16px] md:text-[15px] text-[14px] mt-6 text-black font-semibold">Your Activity</div>
          <div>
            <div className="bg-white rounded-[15px] p-4 flex flex-col gap-2 w-full mt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#e8f2f1] rounded-[4px]">
                    <Image src={yoga} alt="yoga" className="p-1" />
                  </div>
                  <span className="font-semibold text-[#373737] xl:text-[18px] md:text-[17px] text-[16px]">Yoga</span>
                </div>
                <span className="text-gray-400 xl:text-[14px] md:text-[13px] text-[12px]">1 hour ago</span>
              </div>
              <div className="w-full mt-2">
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-[#373737] rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="xl:text-[16px] md:text-[15px] text-[14px] text-black font-semibold">Appointment</h2>
          </div>
          <div>
            {/* Appointment Card */}
            <div className="bg-white rounded-[15px] p-4 flex flex-col sm:flex-row md:items-center justify-between w-full mt-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#e8f2f1] rounded-[4px] flex items-center justify-center">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <rect width="20" height="16" x="2" y="5" fill="#2081C3" rx="2" />
                    <rect width="16" height="10" x="4" y="9" fill="#fff" rx="1" />
                    <rect width="2" height="4" x="7" y="13" fill="#2081C3" rx="1" />
                    <rect width="2" height="4" x="11" y="13" fill="#2081C3" rx="1" />
                    <rect width="2" height="4" x="15" y="13" fill="#2081C3" rx="1" />
                  </svg>
                </div>
                <div>
                  <div className="xl:text-[16px] md:text-[15px] text-[14px] font-semibold text-[#373737]">Dr. Mark Odoma</div>
                  <div className="xl:text-[14px] md:text-[13px] text-[12px] text-[#454E9E]">Health Coach</div>
                </div>
              </div>
              <div className="flex flex-col items-end gap- mt-2 sm:mt-0">
                <span className="xl:text-[14px] md:text-[13px] text-[12px] text-gray-400">Today</span>
                <div className="flex items-center gap-1">
                  <span className="w-4 h-4 bg-[#1AA349] rounded-full flex items-center justify-center">
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" fill="#1AA349" />
                      <path d="M12 7v5l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="xl:text-[14px] md:text-[13px] text-[12px] text-[#636363] font-medium ml-1">11:00AM</span>
                </div>
              </div>
            </div>
            {/* Apple Health Card */}
            <div className="bg-white rounded-[15px] p-6 flex items-center flex-col gap-4 w-full mt-4">
              <div className="flex flex-col sm:flex-row w-full justify-between items-center">
                <div className="flex items-start w-full gap-3">
                  <div className="w-10 h-10 bg-[#e8f2f1] rounded-[4px] flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M19.665 12.837c-.02-2.14 1.75-3.163 1.83-3.213-1-1.46-2.56-1.66-3.11-1.68-1.32-.13-2.58.77-3.25.77-.67 0-1.7-.75-2.8-.73-1.44.02-2.77.84-3.51 2.13-1.5 2.6-.39 6.44 1.07 8.55.71 1.03 1.56 2.19 2.67 2.15 1.08-.04 1.49-.69 2.8-.69 1.31 0 1.68.69 2.8.67 1.16-.02 1.89-1.04 2.59-2.07.82-1.19 1.16-2.34 1.18-2.4-.03-.01-2.26-.87-2.28-3.45zm-2.68-6.31c.6-.73 1-1.75.89-2.77-.86.03-1.89.57-2.5 1.3-.55.64-1.04 1.67-.85 2.65.9.07 1.86-.46 2.46-1.18z"
                        fill="#2081C3"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <div className="xl:text-[16px] md:text-[15px] text-[14px] font-semibold text-[#23ccb2]">Apple Health</div>
                    <div className="xl:text-[14px] md:text-[13px] text-[12px] text-[#373737]">Last synced</div>
                    <div className="xl:text-[14px] md:text-[13px] text-[12px] text-[#373737]">Status</div>
                  </div>
                </div>
                <div className="flex flex-col items-end  mt-2 sm:mt-0">
                  <span className="xl:text-[14px] md:text-[12px] text-[10px] text-gray-400 ">Today at 6:15AM</span>
                  <div className="flex items-center gap-1 mt-1 ">
                    <span className="w-4 h-4 bg-[#23ccb2] hover:bg-teal-500 rounded-[4px] flex items-center justify-center">
                      <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                        <path d="M6.5 11.5l-3-3 1-1 2 2 4-4 1 1-5 5z" fill="#fff" />
                      </svg>
                    </span>
                    <span className="xl:text-[14px] md:text-[12px] text-[10px] text-[#23ccb2] font-medium">Synced successfully</span>
                  </div>
                </div>
              </div>
              <button className="w-full flex items-center justify-center gap-2 self-start xl:text-[16px] md:text-[15px] text-[14px] mt-2 mx-auto bg-[#23ccb2] hover:bg-teal-500 transition-colors text-white font-semibold rounded-lg px-8 py-2 ">
                Refresh
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path d="M17.65 6.35A8 8 0 1 0 20 12h-2a6 6 0 1 1-1.76-4.24l-2.79 2.79H20V4.41l-2.35 2.34z" fill="#fff" />
                </svg>
              </button>
            </div>
            {/* Hydration Card */}
            <div className="mt-6">
              <div className="flex items-center justify-between mt-6">
                <h2 className="text-black font-semibold">Health Tips</h2>
                <p className="text-black font-semibold">See All</p>
              </div>
              <div className="bg-white rounded-[15px] p-6 flex flex-col gap-4 w-full mt-6 ">
                <Image
                  src="https://images.pexels.com/photos/3768913/pexels-photo-3768913.jpeg"
                  width={100}
                  height={100}
                  alt="Staying hydrated"
                  className="w-full h-[140px] object-cover rounded-[15px]"
                />
                <div className="xl:text-[16px] md:text-[15px] text-[14px] mt-2 font-medium text-[#23ccb2] leading-snug">
                  Why staying hydrated is Important
                  <br />
                  for your health
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-6 h-6 bg-[#23ccb2] hover:bg-teal-500 rounded-[4px] flex items-center justify-center">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" fill="#23ccb2" />
                      <path d="M12 7v5l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-gray-400 xl:text-[16px] md:text-[15px] text-[14px] font-medium">2 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <MobileBottomNav activeTabName={activeTabName} />
    </div>
  );
};

export default HomeScreen;
