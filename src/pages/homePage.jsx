import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import ContactForm from './contactForm';
import CertificatesSection from './CertificatesSection';
import Footer from './Footer';
import Skills from './Skills';
import Experience from './Experience';
import About from './About';
import HeroSection from './HeroSection';

export default function Homepage() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  

  const certificates = [
    { src: "AWS.png", alt: "AWS Certificate" },
    { src: "Data analytics.png", alt: "Data Analytics Certificate" },
    { src: "Data science.png", alt: "Data Science Certificate" },
    { src: "Screenshot 2025-02-26 114521.png", alt: "Professional Certificate" },
    { src: "SQL essentials.png", alt: "SQL Essentials Certificate" },
    { src: "SQL top 5.png", alt: "SQL Top 5 Certificate" }
  ];

  return (
    <div className={`min-h-screen px-10 transition-colors duration-300 font-sans 
      ${darkMode ? "bg-gray-900 text-white" : "bg-blue-200 text-gray-800"}`}>
    
      {/* Dark Mode Toggle and Menu Button */}
      <div className='flex justify-between py-4 items-center'>
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className="text-2xl hover:scale-110 transition-transform "
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
    
        <button 
  onClick={() => setMenuOpen(!menuOpen)}
  className={`fixed top-4 right-4 p-2 text-2xl rounded-full shadow-md 
    hover:scale-110 transition-transform duration-200 
    ${darkMode ? "bg-blue-300 text-black hover:bg-blue-400" : "bg-gray-800 text-white hover:bg-gray-700"}`}
>
  <img src="/menu-hamburger-svgrepo-com.svg" alt="Menu" className="w-6 h-6" />
</button>

      </div>
    
      {/* Navigation Menu */}
      {menuOpen && (
        <nav className="absolute top-16 right-10 bg-white text-gray-800 shadow-md rounded-lg p-4 w-40">
          <ul className="space-y-2">
            <li><a href="#About" className="block hover:text-gray-600">About</a></li>
            <li><a href="#Experience" className="block hover:text-gray-600">Experience</a></li>
            <li><a href="#Skills" className="block hover:text-gray-600">Skills</a></li>
          </ul>
        </nav>
      )}
    
      {/* Hero Section */}
      <HeroSection />
    
      {/* About Section */}
      <div className={`lg:ml-10 mt-6 lg:mt-24 py-14 px-14 
        ${darkMode ? "bg-black text-white" : "bg-white text-gray-900 shadow-md rounded-lg"}`}>
        <About id="About"/>
      </div>
    
      <CertificatesSection/>
      <Experience id="Experience" darkMode={darkMode}/>
      <Skills id="Skills"/>
      <ContactForm id="Contact"/>
      <Footer id="Links"/>
    </div>
  );
}
