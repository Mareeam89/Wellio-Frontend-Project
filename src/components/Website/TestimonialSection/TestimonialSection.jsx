"use client";

import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import TestimonyCard from "./TestimonyCard";
import User1 from "../../../assets/images/User1.jpg";
import User2 from "../../../assets/images/User2.jpg";
import User3 from "../../../assets/images/User3.jpg";

const TestimonialSection = () => {
  const jobsRef = useRef(null);

  const scrollLeft = () => {
    if (jobsRef.current) {
      jobsRef.current.scrollBy({
        left: -220,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (jobsRef.current) {
      jobsRef.current.scrollBy({
        left: 220,
        behavior: "smooth",
      });
    }
  };

  // Sample user data with placeholder images
  const testimonials = [
    {
      testimony: "Wellio has completely changed the game for me. I track my blood pressure on the go, and easily have access to a health coach.",
      userImage: User1,
      name: "Jacob Smith",
      profession: "Professor",
    },
    {
      testimony: "It's so simple, even for someone like me. I love the medication reminders, and whenever I feel unsure, the AI chat gives me answers instantly.",
      userImage: User2,
      name: "Chukwu Ogie",
      profession: "Retired Pensioner",
    },
    {
      testimony: "With my tight schedule, Wellio helps me stay consistent. Everything — from my readings to consultations — is in one place.",
      userImage: User3,
      name: "Mary Jane",
      profession: "Student",
    },
    {
      testimony: "It's so simple, even for someone like me. I love the medication reminders, and whenever I feel unsure, the AI chat gives me answers instantly",
      userImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      name: "Michael Johnson",
      profession: "Engineer",
    },
    {
      testimony: "With my tight schedule, Wellio helps me stay consistent. Everything — from my readings to consultations — is in one place.",
      userImage: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face",
      name: "Sarah Wilson",
      profession: "Doctor",
    },
    {
      testimony: "It's so simple, even for someone like me. I love the medication reminders, and whenever I feel unsure, the AI chat gives me answers instantly",
      userImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      name: "David Brown",
      profession: "Businessman",
    },
  ];

  return (
    <div className="relative flex flex-col items-center md:my-16 my-10 px-4">
      <h2 className="xl:text-[38px] md:text-[26px] text-[18px] font-bold text-[#1A1A1A] leading-[1.1] md:mb-8 mb-4">What Our Users Say About Us</h2>

      <div className="relative w-full max-page-width">
        {/* Scrollable Container */}
        <div
          className="flex md:gap-5 gap-3 overflow-x-auto scrollbar-hide pb-6"
          ref={jobsRef}
          style={{
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonyCard key={index} testimony={testimonial.testimony} userImage={testimonial.userImage} name={testimonial.name} profession={testimonial.profession} />
          ))}
        </div>

        {/* Left Scroll Button */}
        <button
          className="absolute left-[20%] md:bottom-[-65px] bottom-[-50px] -translate-y-1/2 z-10 flex items-center justify-center 1152px md:h-12 md:w-12 h-10 w-10 rounded-full bg-white shadow-lg hover:bg-[#24CDAF] transition-colors duration-200 group"
          onClick={scrollLeft}
        >
          <FaChevronLeft size={18} className="text-[#24CDAF] group-hover:text-white" />
        </button>

        {/* Right Scroll Button */}
        <button
          className="absolute right-[20%] md:bottom-[-65px] bottom-[-50px] -translate-y-1/2 z-10 flex items-center justify-center 1152px md:h-12 md:w-12 h-10 w-10 rounded-full bg-white shadow-lg hover:bg-[#24CDAF] transition-colors duration-200 group"
          onClick={scrollRight}
        >
          <FaChevronRight size={18} className="text-[#24CDAF] group-hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection;
