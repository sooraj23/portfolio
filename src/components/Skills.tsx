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
    <section className="py-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Skills</h2>
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