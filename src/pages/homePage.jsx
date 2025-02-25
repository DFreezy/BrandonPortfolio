import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Homepage() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen px-10 transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      
      {/* Dark Mode Toggle */}
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        className="text-2xl hover:scale-110 transition-transform mt-4"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      {/* Hero Section */}
      <div
        className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-10 py-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${darkMode ? "/th.jpeg" : "/R.jfif"})`, minHeight: 'calc(100vh - 10rem)' }}
      >
        <div className="">
          <img
            src="image.jfif"
            alt="Profile"
            className="w-32 lg:w-40 rounded-full shadow-lg mx-auto lg:mx-10 border-4 transition-colors duration-300"
            style={{ borderColor: darkMode ? "white" : "black" }}
          />
          <div className={`lg:ml-10 mt-6 lg:mt-0 ${darkMode ? "text-white" : "text-black"}`}>
            <h1 className="text-4xl font-bold">Hi, I'm Brandon</h1>
            <p className="mt-4 leading-relaxed font-bold">
              I’m Brandon September, a digital mentor at Capaciti. With over ten years of expertise in technology
              education, I develop and deliver high-quality online learning programs, empowering students and teachers
              across the continent.
            </p>
            <h3 className="text-lg font-semibold mt-4">Education Digital Mentor</h3>
            <button className="mt-4 px-6 py-2 rounded-lg shadow-md transition duration-300 bg-black text-white hover:bg-gray-700">
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="px-10 py-10 text-center">
        <h1 className="text-3xl font-bold">My Experience</h1>
        <p className="mt-4 max-w-3xl mx-auto">
          With over a decade of expertise in technology education, I have developed and delivered innovative
          online learning programs that enhance digital literacy and technical skills. My experience spans
          roles as a digital mentor, educator, and web developer.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-10">
        {Array(3).fill().map((_, index) => (
          <div key={index} className={`shadow-lg rounded-lg p-6 w-80 text-center transition duration-300 ${darkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white text-black hover:bg-gray-300"}`}>
            <h1 className="text-lg font-bold">Digital Mentor in Education</h1>
            <p className="text-sm">UVU Africa: Full-time</p>
            <p className="text-sm">Technology integration/coaching</p>
            <p className="text-sm">2023 - Present</p>
          </div>
        ))}
      </div>

      {/* Future Vision Section */}
      <div className={`px-10 py-10 text-center transition-colors duration-300 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}>
        <h3 className="text-lg">I Make the Future</h3>
        <h1 className="text-3xl font-bold">I Develop & Create a Digital Future</h1>
        <p className="mt-4 max-w-3xl mx-auto">
          I have multiple certifications in time management, high-performance habits, and professional ethics
          from reputable platforms such as LinkedIn and SACE.
        </p>
        <p className="mt-4 max-w-3xl mx-auto" id="resume">
          I am proficient in various applications, including Microsoft Office and Google Apps, and I stay updated
          with industry trends. With excellent communication and leadership skills, I strive to make a meaningful
          impact in the digital education space.
        </p>
      </div>
    </div>
  );
}
