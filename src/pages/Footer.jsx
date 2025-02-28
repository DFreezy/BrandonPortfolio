export default function Footer({ darkMode }) {
  const socialLinks = [
    {
      href: "https://linkedin.com/in/yourprofile",
      src: "/linkedin-svgrepo-com.svg",
      alt: "LinkedIn",
      label: "Visit LinkedIn Profile",
    },
    {
      href: "https://github.com/yourgithub",
      src: "/github-142-svgrepo-com.svg",
      alt: "GitHub",
      label: "Visit GitHub Profile",
    },
  ];

  return (
    <footer
      className={`flex flex-col items-center justify-center space-y-4 py-4 border-t shadow-md text-sm transition-all duration-500
        ${darkMode ? "bg-gray-900 text-white border-gray-700" : "bg-gray-400 text-black border-gray-300"}
      `}
    >
      {/* Social Media Icons */}
      <div className="flex space-x-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="p-1 rounded-full bg-gray-700 dark:bg-gray-200 transition-transform transform hover:scale-105 hover:opacity-80"
          >
            <img src={link.src} alt={link.alt} className="w-6 h-6" />
          </a>
        ))}
      </div>

      {/* Footer Text */}
      <p className="font-medium">&copy; 2025 Brandon September</p>

      {/* References Section (Collapsed but Accessible) */}
      <details className="text-center w-full">
        <summary className="cursor-pointer text-blue-500 hover:underline">References</summary>
        <div className={`mt-2 p-2 rounded-md shadow-sm text-left text-xs transition-all duration-500 
          ${darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"}
        `}>
          <p>
            <span className="font-semibold">Western Cape Government -</span> Alistair Mather<br />
            <a href="mailto:Alistair.mather@westerncape.gov.za" className="text-blue-500 hover:underline">
              Alistair.mather@westerncape.gov.za
            </a> | 021 467 2962
          </p>
          <p className="mt-1">
            <span className="font-semibold">BMW IT Hub SA -</span> Rowan Pillay<br />
            <a href="mailto:rowan.pillay@bmwithub.co.za" className="text-blue-500 hover:underline">
              rowan.pillay@bmwithub.co.za
            </a> | 072 383 4482
          </p>
        </div>
      </details>
    </footer>
  );
}
