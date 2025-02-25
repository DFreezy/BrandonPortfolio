import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`flex flex-wrap justify-center gap-4 py-4 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} transition-colors duration-300`}>
      {/* Light/Dark Mode Toggle */}
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        className="text-2xl hover:scale-110 transition-transform"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      {/* Menu Button */}
      <button className="p-2 text-2xl rounded-full bg-gray-800 text-white hover:bg-gray-600 hover:scale-110 transition-transform duration-200">
        <img src="/menu-hamburger-svgrepo-com.svg" alt="Menu" className="w-6 h-6" />
      </button>

      {/* Navigation Buttons */}
      <Link to="/resume">
        <button className={`px-6 py-2 rounded-lg shadow-md transition ${darkMode ? "bg-gray-700 hover:bg-gray-500" : "bg-gray-300 hover:bg-gray-400"}`}>
          Resume
        </button>
      </Link>

      <Link to="/experience">
        <button className={`px-6 py-2 rounded-lg shadow-md transition ${darkMode ? "bg-gray-700 hover:bg-gray-500" : "bg-gray-300 hover:bg-gray-400"}`}>
          Experience
        </button>
      </Link>

      <Link to="/certifications">
        <button className={`px-6 py-2 rounded-lg shadow-md transition ${darkMode ? "bg-gray-700 hover:bg-gray-500" : "bg-gray-300 hover:bg-gray-400"}`}>
          Certifications
        </button>
      </Link>

      <Link to="/education">
        <button className={`px-6 py-2 rounded-lg shadow-md transition ${darkMode ? "bg-gray-700 hover:bg-gray-500" : "bg-gray-300 hover:bg-gray-400"}`}>
          Education
        </button>
      </Link>

      <Link to="/contact">
        <button className={`px-6 py-2 rounded-lg shadow-md transition ${darkMode ? "bg-gray-700 hover:bg-gray-500" : "bg-gray-300 hover:bg-gray-400"}`}>
          Contact
        </button>
      </Link>
    </div>
  );
}
