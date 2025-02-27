import React from 'react';

export default function About({ id }) {
  return (
    <div id={id}>
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
          { src: "Valenture-Institute.jpg", alt: "Valenture Institute", title: "Technology Specialist"},
          { src: "uvu-africa-logo-c.jpg", alt: "UVU Africa", title: "Digital Mentor" },
          { src: "westerncape-department-education-wced_orig.png", alt: "Western Cape Department of Education", title: "Subject Matter expert" }
        ].map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image.src}
              alt={image.alt}
              className="w-52 h-50 border-4 border-gray-400 rounded-lg transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl"
            />
            <h1>{image.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
