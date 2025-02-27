import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function About({ id }) {
  const { darkMode } = useContext(ThemeContext); // Get dark mode state

  return (
    <div 
      id={id} 
      className={`px-10 py-10 shadow-md rounded-lg transition-all duration-500 
        ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}
    >
      {/* Section Title */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">About</h1>
      </div>

      {/* Description */}
      <h2 className="mt-6 text-lg leading-relaxed transition-all duration-300 
        ${darkMode ? 'text-gray-300' : 'text-gray-700'}"
      >
        I have over a decade of experience in technology education, developing and delivering innovative online learning programs 
        that enhance digital literacy and technical skills. My expertise spans roles as a digital mentor, educator, and web developer, 
        where I have consistently demonstrated leadership, teaching ability, and a passion for creating impactful educational content.
        Through mentoring, I have developed an empathetic yet honest approach, preparing my students to thrive in the tech industry.
        I have worked as a digital mentor, subject matter expert, technology specialist, and educator at the following organizations:
      </h2>

      {/* Company Logos & Titles */}
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {[
          { src: "Valenture-Institute.jpg", alt: "Valenture Institute", title: "Technology Specialist" },
          { src: "uvu-africa-logo-c.jpg", alt: "UVU Africa", title: "Digital Mentor" },
          { src: "westerncape-department-education-wced_orig.png", alt: "Western Cape Department of Education", title: "Subject Matter Expert" }
        ].map((image, index) => (
          <div key={index} className="relative group text-center">
            <img
              src={image.src}
              alt={image.alt}
              className={`w-52 h-50 border-4 rounded-lg transition-transform duration-300 transform hover:scale-110 hover:shadow-xl 
                ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}
            />
            <h1 className={`mt-2 text-lg font-semibold transition-all duration-300 
              ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}
            >
              {image.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
