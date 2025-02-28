import React from 'react';

export default function Footer({ darkMode }) {
  const socialLinks = [
    {
      href: 'https://linkedin.com/in/yourprofile',
      src: '/linkedin-svgrepo-com.svg',
      alt: 'LinkedIn',
      label: 'Visit LinkedIn Profile',
    },
    {
      href: 'https://github.com/yourgithub',
      src: '/github-142-svgrepo-com.svg',
      alt: 'GitHub',
      label: 'Visit GitHub Profile',
    },
  ];

  return (
    <footer 
      className={`flex flex-col items-center justify-center space-y-4 py-6 border-t transition-colors duration-300 
        ${darkMode ? 'bg-black text-white' : 'bg-gray-200 text-black'}`
      }
    >
      {/* Social Media Icons */}
      <div className="flex space-x-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="transition-transform transform hover:scale-110 hover:opacity-80"
          >
            <img src={link.src} alt={link.alt} className="w-8 h-8" />
          </a>
        ))}
      </div>

      {/* Footer Text */}
      <div className="text-sm text-center">
        <p>&copy; 2025 Brandon September. All Rights Reserved.</p>
        <div className="text-gray-500">
          <h1>References</h1>

<p>Western Cape Government - Alistair Mather (WCED Head Office) 021 467 2962
or Alistair.mather@westerncape.gov.za</p>

<p>BMW IT hub South Africa - Rowan Pillay(Solutions Architect), 0723834482 or rowan.pillay@bmwithub.co.za</p>
</div>
      </div>
    </footer>
  );
}
