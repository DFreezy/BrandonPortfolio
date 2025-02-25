import React from 'react';

export default function Homepage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      {/* Header */}
      <div className="flex justify-between items-center bg-red-400 px-6 py-4 text-white">
        <button className="text-2xl hover:scale-110 transition-transform">☀</button>
        <button className="text-2xl hover:scale-110 transition-transform">🍔</button>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-10 py-10">
        <img src="image.jfif" alt="Profile" className="w-32 lg:w-40 rounded-full shadow-lg mx-auto lg:mx-10" />
        <div className="lg:ml-10 mt-6 lg:mt-0">
          <h1 className="text-4xl font-bold text-gray-900">Hi, I'm Brandon</h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I’m Brandon September, a digital mentor at Capaciti. With over ten years of expertise in technology 
            education, I develop and deliver high-quality online learning programs, empowering students 
            and teachers across the continent.
          </p>
          <h3 className="text-lg font-semibold text-gray-700 mt-4">Education Digital Mentor</h3>
          <button className="mt-4 bg-black text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-800 transition">
            Download CV
          </button>
        </div>
      </div>

      {/* Experience Section */}
      <div className="px-10 py-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900">My Experience</h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          With over a decade of expertise in technology education, I have developed and delivered innovative 
          online learning programs that enhance digital literacy and technical skills. My experience spans 
          roles as a digital mentor, educator, and web developer.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-10">
        {Array(3).fill().map((_, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-80 text-center hover:bg-black hover:text-white transition">
            <h1 className="text-lg font-bold">Digital Mentor in Education</h1>
            <p className="text-sm text-gray-600">UVU Africa: Full-time</p>
            <p className="text-sm">Technology integration/coaching</p>
            <p className="text-sm">2023 - Present</p>
          </div>
        ))}
      </div>

      {/* Future Vision Section */}
      <div className="px-10 py-10 text-center bg-gray-200">
        <h3 className="text-lg text-gray-700">I Make the Future</h3>
        <h1 className="text-3xl font-bold text-gray-900">I Develop & Create a Digital Future</h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          I have multiple certifications in time management, high-performance habits, and professional ethics 
          from reputable platforms such as LinkedIn and SACE.
        </p>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          I am proficient in various applications, including Microsoft Office and Google Apps, and I stay updated 
          with industry trends. With excellent communication and leadership skills, I strive to make a meaningful 
          impact in the digital education space.
        </p>
      </div>
    </div>
  );
}
