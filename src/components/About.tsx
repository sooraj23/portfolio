import React from 'react';

const About: React.FC = () => {
  const highlights = [
    { icon: '💻', title: '8+ Years Experience', desc: '.NET development across diverse industries' },
    { icon: '🏗️', title: 'Full-Stack Expertise', desc: 'Frontend & backend development' },
    { icon: '☁️', title: 'Cloud Solutions', desc: 'Azure, GCP, and modern cloud platforms' },
    { icon: '🔧', title: 'Modern Technologies', desc: 'Kafka, Elastic Search, microservices' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 dark:from-blue-400/5 dark:to-purple-400/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white flex items-center justify-center">
            <span className="mr-3 text-5xl">👋</span>About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 mb-12">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center font-medium">
              Dynamic and results-driven .NET Developer with 8 years of experience delivering scalable, high-performance solutions across diverse industries. Highly skilled in C#, .NET, SQL, Azure, Elasticsearch, and Kafka, with hands-on exposure to Go, Dynamics 365 Power Platform, and TypeScript. Adept in object-oriented design and passionate about crafting clean, robust, and maintainable code. Experienced in building modern RESTful APIs, implementing solid unit testing practices, and thriving in fast-paced Agile environments. A strong problem-solver who enjoys transforming complex requirements into elegant technical solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:scale-105">
                <div className="text-center">
                  <div className="text-4xl mb-3">{highlight.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{highlight.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{highlight.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;