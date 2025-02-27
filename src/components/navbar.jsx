import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='flex justify-between py-4 items-center'>
      <button onClick={() => setDarkMode(!darkMode)} className='text-2xl hover:scale-110 transition-transform'>
        {darkMode ? "☀️" : "🌙"}
      </button>
      <button onClick={() => setMenuOpen(!menuOpen)} className='p-2 text-2xl rounded-full bg-gray-800 text-white hover:bg-gray-600 hover:scale-110 transition-transform duration-200'>
        <img src='/menu-hamburger-svgrepo-com.svg' alt='Menu' className='w-6 h-6' />
      </button>
      {menuOpen && (
        <nav className='absolute top-16 right-10 bg-white text-black shadow-lg rounded-lg p-4 w-40'>
          <ul className='space-y-2'>
            <li><a href='#about' className='block hover:text-gray-700'>About</a></li>
            <li><a href='#experience' className='block hover:text-gray-700'>Experience</a></li>
            <li><a href='#skills' className='block hover:text-gray-700'>Skills</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
}