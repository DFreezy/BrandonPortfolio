import React from 'react';

export default function Footer({ darkMode }) {
  const socialLinks = [
    {
      href: 'https://linkedin.com/in/yourprofile',
      src: '/linkedin-svgrepo-com.svg', // Ensure file extension
      alt: 'LinkedIn',
      label: 'Visit LinkedIn Profile',
    },
    {
      href: 'https://github.com/yourgithub',
      src: '/github-142-svgrepo-com.svg', // Ensure file extension
      alt: 'GitHub',
      label: 'Visit GitHub Profile',
    },
    {
      href: 'mailto:gry@gmail.com',
      src: '/email.svg',
      alt: 'Email',
      label: 'Send an Email',
    },
  ];

  
  return (
    <footer 
      className={`flex flex-col items-center justify-center space-y-4 py-8 border-t transition-colors duration-300 
        ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`
      }
    >
      {/* Social Media Icons */}
      <div className="flex space-x-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
            aria-label={link.label}
            className="transition-transform transform hover:scale-110 hover:opacity-80"
          >
            <img src={link.src} alt={link.alt} className="w-10 h-10" />
          </a>
        ))}
      </div>

      {/* Optional Footer Text */}
      <div className="text-sm">
        <p className="text-center">
          &copy; 2025 Brandon September. All Rights Reserved.
        </p>
        <p className="text-center text-gray-500">
          Designed & Developed by You.
        </p>
      </div>
    </footer>
  );
}
