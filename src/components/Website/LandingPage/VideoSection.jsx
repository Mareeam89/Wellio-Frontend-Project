import React from "react";

const VideoSection = () => {
  return (
    <section id="how-video" className="max-page-width md:px-8 px-4 md:py-16 py-10">
      <h3 className="text-center text-[#1A1A1A] font-bold xl:text-[38px] lg:text-[26px] text-[20px]">Watch How Wellio Works</h3>
      <div className="w-full h-full overflow-hidden md:pt-4 pt-2">
        <iframe
          src="https://www.youtube.com/embed/Lue_m_w_i3c?si=lKZ2VcMcU0ecs9Vl"
          allowFullScreen
          className="w-full xl:h-[650px] lg:h-[500px] md:h-[400px] max-md:h-[300px] sm:rounded-[5px]"
          title="Project Video"
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
