import React from 'react';

export default function Experience({ id, darkMode }) {
  const experiences = [
    {
      title: "Digital Mentor in Education",
      company: "UVU Africa: Full-time",
      description: "Technology integration/coaching",
      duration: "2023 - Present",
    },
    {
      title: "Subject Matter Expert",
      company: "Western Cape Education Department",
      description: "Guiding professionals to ensure content accuracy",
      duration: "2014 - Present",
    },
    {
      title: "Technology Specialist",
      company: "Valenture Institute",
      description: "Educational leadership & technology integration",
      duration: "Mar 2022 - Mar 2023",
    },
    {
      title: "Educational Specialist",
      company: "Norman Henshilwood High School",
      description: "Educational leadership & technology integration",
      duration: "Jan 2014 - Jul 2021",
    },
    {
      title: "Technology Education Teacher",
      company: "Wynberg Girls' High School",
      description: "Educational leadership & technology integration",
      duration: "Apr 2021 - Mar 2022",
    },
  ];

  return (
    <section 
      id={id} 
      className={`px-10 py-16 text-center transition-all duration-500 ${
        darkMode ? 'bg-black text-white' : 'bg-gray-200 text-black'
      }`}
    >
      {/* Header */}
      <h1 className="text-4xl font-extrabold mb-10 bg-red-600 py-3 text-white rounded-lg inline-block px-6">
        My Experience
      </h1>

      {/* Experience Cards */}
      <div className="flex flex-wrap justify-center gap-8 px-6 mt-10">
        {experiences.map((experience, index) => (
          <div 
            key={index} 
            className={`w-full sm:w-80 p-6 rounded-lg shadow-lg transform transition-transform duration-300 ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
            } hover:scale-105`}
          >
            <h2 className="text-xl font-bold">{experience.title}</h2>
            <p className="text-md font-semibold mt-1 text-red-400">{experience.company}</p>
            <p className="text-sm mt-2">{experience.description}</p>
            <p className="text-sm font-medium mt-2 text-gray-400">{experience.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
