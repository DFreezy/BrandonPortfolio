// HeroSection.js
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function HeroSection() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-10 py-10 bg-cover bg-center' style={{ backgroundImage: `url(${darkMode ? "/th.jpeg" : "/R.jfif"})`, minHeight: 'calc(100vh - 10rem)' }}>
      <div>
        <img src='image.jfif' alt='Profile' className='rounded-full w-50 h-54 border-4' />
        <div className='lg:ml-10 mt-6 lg:mt-0'>
          <h1 className='text-4xl font-bold'>Hi, I'm Brandon</h1>
          <p className='mt-4 leading-relaxed font-bold'>
          I’m Brandon September, a digital mentor at Capaciti. With over ten years of expertise in technology
              education, I develop and deliver high-quality online learning programs, empowering students and teachers
              across the continent.
          </p>
          <h3 className='text-lg font-semibold mt-4'>Education Digital Mentor</h3>
          <button className='mt-4 px-6 py-2 rounded-lg shadow-md transition duration-300 bg-red-600 text-white hover:bg-gray-700'>
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}