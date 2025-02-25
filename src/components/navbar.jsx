import React from 'react'
import {Link} from 'react-router-dom'

export default function() {
    return (
        <>
       <div className="flex flex-wrap justify-center gap-4 py-4 bg-gray-900 text-white">
        <button className="text-2xl hover:scale-110 transition-transform">☀</button>
        <button className="p-2 text-2xl rounded-full bg-gray-800 text-white hover:bg-gray-600 hover:scale-110 transition-transform duration-200">
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
  <img src="/menu-hamburger-svgrepo-com.svg" alt="icon" className="w-6 h-6" />
  </svg>
</button>

        <button className="px-6 py-2 bg-gray-700 rounded-lg shadow-md hover:bg-gray-500 transition">
          Resume
        </button>
      <button className="px-6 py-2 bg-gray-700 rounded-lg shadow-md hover:bg-gray-500 transition">
        Experience
      </button>
      <button className="px-6 py-2 bg-gray-700 rounded-lg shadow-md hover:bg-gray-500 transition">
        Certifications
      </button>
      <button className="px-6 py-2 bg-gray-700 rounded-lg shadow-md hover:bg-gray-500 transition">
        Education
      </button>
      <button className="px-6 py-2 bg-gray-700 rounded-lg shadow-md hover:bg-gray-500 transition">
        Contact
      </button>
    </div>
        </>
    )
}




