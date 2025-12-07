import React from 'react';

const Skills: React.FC = () => {
  const skills = {
    'Programming Languages': ['C#', 'JavaScript', 'Go', 'TypeScript'],
    'Frameworks': ['.NET', 'ASP.NET Core', '.NET 6+', 'MVC'],
    'Web Technologies': ['Web API', 'RESTful services'],
    'Database': ['MS SQL Server', 'Entity Framework Core', 'Microsoft Dataverse'],
    'Cloud Services': ['Azure', 'Google Cloud Platform', 'Dynamics 365 Power Platform'],
    'Other Technologies': ['Elastic Search', 'Cassandra', 'Kafka', 'PostgreSQL']
  };

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/10 to-cyan-400/10 dark:from-indigo-400/5 dark:to-cyan-400/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white flex items-center justify-center">
            <span className="mr-3 text-5xl">💡</span>Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
                <span className="mr-2">💡</span>{category}
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {skillList.map(skill => (
                  <li key={skill} className="text-gray-700 dark:text-gray-300">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;