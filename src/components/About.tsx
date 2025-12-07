import React from 'react';

const About: React.FC = () => {
  const highlights = [
    { icon: '💻', title: '8+ Years Experience', desc: '.NET development across diverse industries' },
    { icon: '🏗️', title: 'Full-Stack Expertise', desc: 'Frontend & backend development' },
    { icon: '☁️', title: 'Cloud Solutions', desc: 'Azure, GCP, and modern cloud platforms' },
    { icon: '🔧', title: 'Modern Technologies', desc: 'Kafka, Elastic Search, microservices' }
  ];

  return (
    <section className="section-bg-blue-purple">
      <div className="overlay-blue-purple"></div>
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-title-emoji">👋</span>About Me
          </h2>
          <div className="underline-blue-purple"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-highlight mb-12">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center font-medium">
              Dynamic and results-driven .NET Developer with 8 years of experience delivering scalable, high-performance solutions across diverse industries. Highly skilled in C#, .NET, SQL, Azure, Elasticsearch, and Kafka, with hands-on exposure to Go, Dynamics 365 Power Platform, and TypeScript. Adept in object-oriented design and passionate about crafting clean, robust, and maintainable code. Experienced in building modern RESTful APIs, implementing solid unit testing practices, and thriving in fast-paced Agile environments. A strong problem-solver who enjoys transforming complex requirements into elegant technical solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="card-white">
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