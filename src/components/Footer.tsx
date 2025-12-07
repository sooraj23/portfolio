import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-sm mb-2">© 2025 Sooraj Krishnakumar. All rights reserved.</p>
          <p className="text-xs text-gray-400 mb-4">Built with React, Tailwind.</p>
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://www.linkedin.com/in/krishnakumarsooraj7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sooraj23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;