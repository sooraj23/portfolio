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
    <section className="section-bg-indigo-cyan">
      <div className="overlay-indigo-cyan"></div>
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-title-emoji">💡</span>Skills & Technologies
          </h2>
          <div className="underline-indigo-cyan"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="card-white border-l-4 border-blue-500">
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