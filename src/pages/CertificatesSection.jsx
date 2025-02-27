// CertificatesSection.js
import React, { useState } from 'react';

export default function CertificatesSection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Sample certificate data (replace with actual data)
const certificates = [
    { src: "AWS.png", alt: "AWS Certificate" },
    { src: "Data analytics.png", alt: "Data Analytics Certificate" },
    { src: "Data science.png", alt: "Data Science Certificate" },
    { src: "Screenshot 2025-02-26 114521.png", alt: "Professional Certificate" },
    { src: "SQL essentials.png", alt: "SQL Essentials Certificate" },
    { src: "SQL top 5.png", alt: "SQL Top 5 Certificate" }
  ];
  

  return (
    <div className="py-10 px-6">
      <h1 className="text-center text-3xl font-extrabold tracking-wide mb-6">
        Certificates
      </h1>
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

      {/* Modal Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-700 transition duration-200"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ❌
            </button>
            <img
              src={selectedImage}
              alt="Certificate"
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
