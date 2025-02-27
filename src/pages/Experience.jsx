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
          title: "Subject Matter Expert",
          company: "Westernn Cape Education Department",
          description: "I guide other professionals on subject to ensure the content is accurate",
          duration: "2014 - Present",
        },
        {
          title: "Technology specialist",
          company: "Valenture Institute",
          description: "Educational Leadership, Technology Integration",
          duration: "Mar 2022 - Mar 2023",
        },
        {
        title: "Educational Specialist",
        company: "Norman Henshilwood High School",
        description: "Educational Leadership, Technology Integration",
        duration: "Jan 2014 - Jul 2021",
        },
        {
          title: "Technology Education teacher",
          company: "Wynberg Girl's High School",
          description: "Educational Leadership, Technology Integration",
          duration: "Apr 2021 - Mar 2022",
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
