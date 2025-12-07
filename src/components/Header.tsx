import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900 text-white dark:text-gray-100 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
          👨‍💻
        </div>
        <h1 className="text-5xl font-bold mb-2 animate-fade-in">Sooraj Krishnakumar</h1>
        <p className="text-xl mb-6 animate-fade-in-delay">Software Developer</p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8">
          <p className="text-gray-100"><strong>📍 Address:</strong> Finchley Road, London, NW37BB</p>
          <p className="text-gray-100"><strong>📞 Phone:</strong> +44 7818585732</p>
          <p className="text-gray-100"><strong>✉️ Email:</strong> krishnakumarsooraj7@gmail.com</p>
          <p className="text-gray-100"><strong>🔗 LinkedIn:</strong> <a href="http://www.linkedin.com/in/krishnakumarsooraj7" className="underline text-blue-200 dark:text-blue-300 hover:text-blue-100 transition-colors">linkedin.com/in/krishnakumarsooraj7</a></p>
        </div>
      </div>
    </header>
  );
};

export default Header;