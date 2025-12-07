import React from 'react';

interface Project {
  name: string;
  role: string;
  technologies: string[];
  description: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      name: 'Verification Tool',
      role: 'Full Stack Developer',
      technologies: ['.Net', 'C#', 'LINQ', 'SQL Server', 'Kafka', 'Typescript', 'Go', 'Google Cloud Platform'],
      description: 'Worked on the backend of a verification application for a betting company, developing key features and integrations.'
    },
    {
      name: 'Shopping Cart',
      role: 'Full Stack Developer',
      technologies: ['.Net', 'C#', 'LINQ', 'SQL Server', 'Azure Service Bus', 'Azure', 'Ocelot Gateway', 'RabbitMQ', 'HTML', 'CSS', 'JavaScript'],
      description: 'Developed a scalable cloud kitchen platform using ASP.NET Core microservices with .NET 8, Integrated Azure services, RabbitMQ, Stripe Payments and Ocelot gateway to optimize ordering.'
    },
    {
      name: 'Fleet Management System',
      role: 'CRM and .Net Developer',
      technologies: ['Dynamics 365', 'Power BI', 'ASP.Net Core', 'C#', 'LINQ', 'SQL Server', 'Dataverse', 'Azure Service Bus', 'Azure Functions'],
      description: 'Developed and customized model-driven and canvas apps using Power Apps. Integrated Power Automate to automate workflows and business process.'
    }
  ];

  return (
    <section className="section-bg-purple-pink">
      <div className="overlay-purple-pink"></div>
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-title-emoji">🚀</span>Projects
          </h2>
          <div className="underline-purple-pink"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="card-white border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 flex items-center">
                <span className="mr-2">🚀</span>{project.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>👤 Role:</strong> {project.role}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4"><strong>🛠️ Technologies:</strong> {project.technologies.join(', ')}</p>
              <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;