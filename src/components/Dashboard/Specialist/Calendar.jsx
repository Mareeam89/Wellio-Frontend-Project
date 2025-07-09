"use client";

import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 4)); // May 2025

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  const today = 15; // Highlighted day

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const renderCalendarDays = () => {
    const days = [];
    const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1);
    const prevMonthDays = new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 0).getDate();

    // Previous month days
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push(
        <div key={`prev-${prevMonthDays - i}`} className="text-gray-400 xl:text-[14px] md:text-[13px] text-[12px] p-2 text-center">
          {prevMonthDays - i}
        </div>
      );
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === today;
      days.push(
        <div
          key={day}
          className={`xl:text-[14px] md:text-[13px] text-[12px] p-2 text-center cursor-pointer hover:bg-gray-100 rounded ${
            isToday ? "bg-teal-500 text-white rounded-full" : "text-gray-800"
          }`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="bg-white rounded-xl sm:p-6 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-blue-500" />
          <h2 className="xl:text-[20px] md:text-[19px] text-[18px]  font-semibold text-gray-800">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={previousMonth} className="xl:text-[16px] md:text-[15px] text-[14px] p-1 hover:bg-gray-100 rounded">
            <FaChevronLeft className="text-gray-600" />
          </button>
          <button onClick={nextMonth} className="xl:text-[16px] md:text-[15px] text-[14px] p-1 hover:bg-gray-100 rounded">
            <FaChevronRight className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((day) => (
          <div key={day} className="text-xs font-medium text-gray-600 p-2 text-center">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">{renderCalendarDays()}</div>
    </div>
  );
};

export default Calendar;
