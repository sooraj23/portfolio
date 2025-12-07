import React from 'react';

const Languages: React.FC = () => {
  const languages = ['English', 'Hindi', 'Malayalam', 'Tamil', 'Marathi'];

  return (
    <section className="py-8 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100 flex items-center justify-center">
          <span className="mr-2">🌐</span>Known Languages
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          {languages.map((language, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300">
              <span className="text-gray-800 dark:text-gray-200 font-medium">{language}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;