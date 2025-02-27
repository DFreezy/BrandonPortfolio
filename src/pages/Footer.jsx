import React from 'react';

export default function Footer() {
  const socialLinks = [
    {
      href: 'https://linkedin.com/in/yourprofile',
      src: '/linkedin-svgrepo-com',
      alt: 'LinkedIn',
      label: 'Visit LinkedIn Profile',
    },
    {
      href: 'https://github.com/yourgithub',
      src: '/github-142-svgrepo-com',
      alt: 'GitHub',
      label: 'Visit GitHub Profile',
    },
    {
      href: 'mailto:duwaynefrieslaar23@gmail.com',
      src: '/email.svg',
      alt: 'Email',
      label: 'Send an Email',
    },
  ];

  return (
    <div className="flex justify-center space-x-6 mt-6 py-4 border-t">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target={link.href.startsWith('http') ? '_blank' : '_self'}
          rel="noopener noreferrer"
          aria-label={link.label}
          className="transition-transform transform hover:scale-110"
        >
          <img src={link.src} alt={link.alt} className="w-8 h-8" />
        </a>
      ))}
    </div>
  );
}
