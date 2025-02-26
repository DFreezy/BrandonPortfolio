import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Homepage() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    { src: "AWS.png", alt: "AWS Certificate" },
    { src: "Data analytics.png", alt: "Data Analytics Certificate" },
    { src: "Data science.png", alt: "Data Science Certificate" },
    { src: "Screenshot 2025-02-26 114521.png", alt: "Professional Certificate" },
    { src: "SQL essentials.png", alt: "SQL Essentials Certificate" },
    { src: "SQL top 5.png", alt: "SQL Top 5 Certificate" }
  ];

  return (
    <div className={`min-h-screen px-10 transition-colors duration-300 font-sans ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      {/* Dark Mode Toggle and Menu Button */}
      <div className='flex justify-between py-4 items-center'>
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className="text-2xl hover:scale-110 transition-transform"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 text-2xl rounded-full bg-gray-800 text-white hover:bg-gray-600 hover:scale-110 transition-transform duration-200"
        >
          <img src="/menu-hamburger-svgrepo-com.svg" alt="Menu" className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Menu */}
      {menuOpen && (
        <nav className="absolute top-16 right-10 bg-white text-black shadow-lg rounded-lg p-4 w-40">
          <ul className="space-y-2">
            <li><a href="#about" className="block hover:text-gray-700">About</a></li>
            <li><a href="#experience" className="block hover:text-gray-700">Experience</a></li>
            <li><a href="#skills" className="block hover:text-gray-700">Skills</a></li>
          </ul>
        </nav>
      )}

      {/* Hero Section */}
      <div
        className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-10 py-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${darkMode ? "/th.jpeg" : "/R.jfif"})`, minHeight: 'calc(100vh - 10rem)' }}
      >
        <div>
          <img
            src="image.jfif"
            alt="Profile"
            className="rounded-full w-50 h-54"
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
            <button className="mt-4 px-6 py-2 rounded-lg shadow-md transition duration-300 bg-red-600 text-white hover:bg-gray-700">
              Download CV
            </button>
          </div>
        </div>
      </div>


    {/*About section*/}
      <div id="about" className={`lg:ml-10 mt-6 lg:mt-24 py-14 px-14 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
   <div className='bg-red-600'>
  <h1 className="text-center text-3xl font-bold">About</h1>
  </div>
  <h2 className="mt-6 text-lg leading-relaxed">
    I have gained experience with over a decade of expertise in technology education. 
    I have developed and delivered innovative online learning programs that enhance digital literacy and technical skills. 
    My experience spans roles as a digital mentor, educator, and web developer, where I have consistently demonstrated 
    my ability to lead, teach, and create impactful educational content. Through all my time mentoring, 
    I have developed an understanding and empathetic approach, yet honest, to teaching my pupils to take over the tech industry. 
    I have acquired experience as a digital mentor, subject matter expert, technology specialist, tech teacher, 
    and educational expert for the following companies:
  </h2>

  <div className="flex flex-wrap justify-center gap-10 mt-10">
    {[
      { src: "Valenture-Institute.jpg", alt: "Valenture Institute" },
      { src: "uvu-africa-logo-c.jpg", alt: "UVU Africa" },
      { src: "westerncape-department-education-wced_orig.png", alt: "Western Cape Department of Education" }
    ].map((image, index) => (
      <div key={index} className="relative group">
        <img 
          src={image.src} 
          alt={image.alt} 
          className="w-52 h-50 border-4 border-gray-400 rounded-lg transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl"
        />
      </div>
    ))}
  </div>
</div>

 {/* Certificates Section */}
 <div className="py-10 px-6">
        <h1 className="text-center text-3xl font-extrabold tracking-wide mb-6">Certificates</h1>
        <div className="flex justify-center flex-wrap gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="relative group">
              <img
                src={cert.src}
                alt={cert.alt}
                className="w-60 h-60 rounded-lg border-2 border-gray-400 shadow-md cursor-pointer transition-transform duration-300 transform group-hover:scale-110 group-hover:shadow-2xl"
                onClick={() => setSelectedImage(cert.src)}
              />
            </div>
          ))}
        </div>
      </div>

 {/* Modal Popup */}
 {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-700 transition duration-200"
              onClick={() => setSelectedImage(null)}
            >
              ❌
            </button>
            <img src={selectedImage} alt="Certificate" className="max-w-full max-h-[90vh] rounded-lg shadow-lg" />
          </div>
        </div>
      )}


      {/* Experience Section */}
      <div id="experience" className="px-10 py-10 text-center">
        <h1 className="text-3xl font-bold">My Experience</h1>
        <p className="mt-4 max-w-3xl mx-auto">
          With over a decade of expertise in technology education, I have developed and delivered innovative
          online learning programs that enhance digital literacy and technical skills.
        </p>
         {/* Experience Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-10 mb-44 mt-20">
          <div className={`shadow-lg rounded-lg p-6 w-80 text-center transition duration-300 ${darkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white text-black hover:bg-gray-300"}`}>
            <h1 className="text-lg font-bold">Digital Mentor in Education</h1>
            <p className="text-sm">UVU Africa: Full-time</p>
            <p className="text-sm">Technology integration/coaching</p>
            <p className="text-sm">2023 - Present</p>
          </div>
        
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

      {/* Skills Section */}
      <div id="skills" className="px-10 py-10 text-center">
        <h1 className="text-3xl font-bold">Skills</h1>
        <p className="mt-4 max-w-3xl mx-auto">
          Proficient in multiple applications including Microsoft Office, Google Apps, and modern web development tools.
        </p>
      </div>
    </div>
  );
}
