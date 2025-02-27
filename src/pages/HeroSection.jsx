import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function HeroSection() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      className={`flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-10 py-10 bg-cover bg-center transition-all duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
      style={{ backgroundImage: `url(${darkMode ? "/th.jpeg" : "/R.jfif"})`, minHeight: 'calc(100vh - 10rem)' }}
    >
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Profile Image */}
        <img
          src='image.jfif'
          alt='Brandon September Profile'
          className='rounded-full w-52 h-52 border-4 border-gray-400 shadow-lg'
        />

        {/* Text Content */}
        <div className='lg:w-1/2 text-center lg:text-left'>
          <h1 className='text-4xl font-extrabold tracking-wide'>Hi, I'm Brandon</h1>
          <p className='mt-4 leading-relaxed text-lg font-semibold'>
            I’m Brandon September, a digital mentor at Capaciti. With over ten years of expertise in technology
            education, I develop and deliver high-quality online learning programs, empowering students and teachers
            across the continent.
          </p>
          <h3 className='text-lg font-bold mt-4 text-red-500'>Education Digital Mentor</h3>

          {/* Download CV Button */}
          <button
            className='mt-6 px-6 py-3 rounded-lg shadow-md transition duration-300 bg-red-600 text-white hover:bg-red-700 transform hover:scale-105'
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
