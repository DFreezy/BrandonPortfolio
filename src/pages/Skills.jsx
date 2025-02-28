import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Skills({ id }) {
  const { darkMode } = useContext(ThemeContext);

  const skills = [
    "ICT Proficiency Level One - G Suite Google",
    "Planning",
    "Public Speaking",
    "Teaching & Facilitation",
    "Experiential Learning",
    "Special Education",
    "Inclusive Education",
    "Organizing",
    "Technology",
    "Python, JavaScript, Java, R, SQL, Data Science, HTML & CSS",
    "AWS Cloud Practitioner",
  ];

  return (
    <div 
      id={id} 
      className={`px-10 py-10 text-center rounded-lg shadow-lg transition-all duration-500 mt-20 relative ${
        darkMode ? "bg-gray-900 text-black" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">Skills</h1>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        navigation
        pagination={{ clickable: true, el: ".custom-pagination" }} // ✅ Custom Pagination Element
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="max-w-3xl mx-auto pb-12" // ✅ Add padding-bottom for pagination space
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <div 
              className="p-5 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md text-lg font-semibold 
                         flex items-center justify-center h-32 hover:bg-red-500 hover:text-white transition duration-300"
            >
              {skill}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Pagination Dots Placed Below */}
      <div className="custom-pagination mt-4"></div>
    </div>
  );
}
