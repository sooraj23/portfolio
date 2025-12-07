import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC<{ darkMode: boolean; toggleDarkMode: () => void }> = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About', path: '#about', icon: '👋', isAnchor: true },
    { name: 'Experience', path: '#work', icon: '💼', isAnchor: true },
    { name: 'Projects', path: '#projects', icon: '🚀', isAnchor: true },
    { name: 'Skills', path: '#experience', icon: '🛠️', isAnchor: true },
    { name: 'Background', path: '#contact', icon: '📚', isAnchor: true }
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/sooraj23', icon: '🐙' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/krishnakumarsooraj7', icon: '💼' },
    { name: 'Email', url: 'mailto:krishnakumarsooraj7@gmail.com', icon: '✉️' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-black/90 backdrop-blur-md border-r border-white/10 z-40 hidden lg:flex flex-col">
      {/* Logo/Name */}
      <div className="p-8 border-b border-white/10">
        <h1 className="text-2xl font-bold text-white tracking-wide">
          Sooraj Krishnakumar
        </h1>
        <p className="text-sm text-gray-400 mt-1">Software Developer</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-8">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              {item.isAnchor ? (
                <button
                  onClick={() => scrollToSection(item.path)}
                  className="w-full text-left px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center space-x-3 group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.name}</span>
                </button>
              ) : (
                <Link
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg transition-all duration-200 flex items-center space-x-3 group ${
                    location.pathname === item.path
                      ? 'text-white bg-white/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.name}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Theme Toggle & Social Links */}
      <div className="p-8 border-t border-white/10">
        <div className="mb-6">
          <button
            onClick={toggleDarkMode}
            className="w-full flex items-center justify-center space-x-3 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-200"
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="text-xl">{darkMode ? '☀️' : '🌙'}</span>
            <span className="text-sm font-medium text-white">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
        <p className="text-xs text-gray-500 mb-4 tracking-widest">CONNECT</p>
        <div className="flex space-x-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-xl hover:scale-110 transform duration-200"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;