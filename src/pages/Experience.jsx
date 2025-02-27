import React from 'react';

export default function Experience({ id, darkMode }) {

  return (
    <div 
      id={id} 
      className={`px-10 py-10 text-center ${darkMode ? 'bg-black text-white' : 'bg-gray-300 text-black'}`}
    >
      <h1 className="text-3xl font-bold bg-red-600">My Experience</h1>
      
      {/* Experience Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-10 mb-44 mt-20">
        {[{
          title: "Digital Mentor in Education",
          company: "UVU Africa: Full-time",
          description: "Technology integration/coaching",
          duration: "2023 - Present",
        },
        {
          title: "Software Developer Intern",
          company: "XYZ Tech: Internship",
          description: "Frontend & Backend development",
          duration: "2022 - 2023",
        },
        {
          title: "Freelance Developer",
          company: "Self-employed",
          description: "Built web applications & managed clients",
          duration: "2021 - Present",
        },
        {
          title: "Teaching Assistant",
          company: "University of Example",
          description: "Assisted students in learning programming",
          duration: "2020 - 2021",
        }].map((experience, index) => (
          <div key={index} className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">{experience.title}</h2>
            <p className="text-sm">{experience.company}</p>
            <p className="text-sm">{experience.description}</p>
            <p className="text-sm">{experience.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
