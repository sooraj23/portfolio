import React from 'react';
import { Link } from 'react-router-dom';

const Kindertons: React.FC = () => {
  const achievements = [
    'Designed and developed backend services using .NET 6, implementing scalable microservice components that supported business workflows across multiple internal systems.',
    'Built and maintained Azure Functions to automate business processes, handle asynchronous jobs, and integrate with other Azure services within the Kindertons cloud ecosystem.',
    'Worked extensively with Azure Service Bus to implement event-driven messaging patterns, improving communication between distributed services and enabling reliable message processing.',
    'Developed and optimized SQL queries and stored procedures in SQL Server, ensuring efficient data retrieval and maintaining high system performance across various application modules.',
    'Created, customized, and deployed solutions using Microsoft Power Apps, designing model-driven apps to automate operational tasks and improve user efficiency.',
    'Integrated Dataverse as a core data layer for Power Apps solutions, ensuring secure, consistent, and structured data handling across the organisation\'s digital workflows.',
    'Collaborated on frontend features using JavaScript, ensuring seamless communication between backend APIs and user interfaces across web and Power Apps components.',
    'Participated actively in the deployment lifecycle of both .NET applications and Power Apps, supporting release cycles, validating build quality, and coordinating with live environment teams.',
    'Worked closely with Business Analysts (BAs) to understand requirements, refine user stories, and ensure the technical solutions aligned precisely with operational needs.',
    'Collaborated with DBAs to design efficient database schemas, optimize query performance, and ensure data integrity during application integrations and deployments.',
    'Coordinated with QA and testing teams in planning and executing test cycles, resolving defects, and ensuring high-quality feature releases across web and cloud platforms.',
    'Contributed improvements to microservices and Power Apps workflows by analysing system logs, identifying performance bottlenecks, and implementing enhancements to ensure system reliability.',
    'Provided cross-team support by working with infrastructure, security, and support teams to ensure application compliance, maintain system uptime, and resolve production issues effectively.',
    'Participated actively in Agile ceremonies including sprint planning, daily stand-ups, refinement sessions, and retrospectives, contributing to collaborative delivery and continuous improvement.',
    'Prepared deployment documentation, release notes, and technical guides to support knowledge sharing, onboarding of new developers, and smoother handover of application releases.'
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-6">
          <Link to="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
            ← Back to Portfolio
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Kindertons Experience</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Software Developer | May 2023 – May 2024 | Crew, England
        </p>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Key Achievements & Responsibilities</h2>
          <ul className="space-y-4">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Kindertons;