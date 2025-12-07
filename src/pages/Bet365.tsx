import React from 'react';
import { Link } from 'react-router-dom';

const Bet365: React.FC = () => {
  const achievements = [
    'Designed and developed backend microservices using .NET 6, C#, and VB.NET, ensuring modularity, scalability, and high throughput across core betting platform components.',
    'Built and maintained RESTful APIs supporting internal services and customer-facing features, ensuring secure communication and efficient data processing across distributed systems.',
    'Worked on backend features using Go and cross-service integrations using TypeScript, contributing to multi-language service interoperability within the microservices ecosystem.',
    'Implemented Kafka-based event-driven architectures, enabling real-time message streaming, asynchronous workflows, and reliable communication between critical betting services.',
    'Utilised VB.NET in maintaining and upgrading legacy components, ensuring backward compatibility while gradually modernising older modules into newer .NET technologies.',
    'Participated in designing and enhancing data access layers using SQL Server, ensuring efficient query performance, well-structured schemas, and high system availability.',
    'Developed automated unit tests using xUnit, ensuring consistent code quality, verifiable behaviour, and reduced defect rates across ongoing development cycles.',
    'Contributed to configuring and maintaining CI/CD pipelines using Jenkins and GitLab, supporting automated builds, secure deployments, and environment-based release strategies.',
    'Collaborated with product owners, business analysts, and senior engineers to clarify requirements, refine user stories, and design solutions aligned with business goals.',
    'Worked closely with QA teams to conduct integration testing, troubleshoot defects, and ensure smooth release cycles for high-demand betting applications.',
    'Investigated production issues through log analysis, performance tracing, and debugging distributed workflows, delivering permanent fixes to minimise service disruption.',
    'Participated actively in Agile ceremonies—including sprint planning, daily stand-ups, and retrospectives—contributing to collaborative delivery and continuous team improvement.',
    'Assisted in migrating legacy application components from VB.NET and older .NET frameworks to modern .NET 6+, improving maintainability and long-term platform stability.',
    'Contributed to service optimisation by refactoring performance-sensitive components, improving response times, and enhancing service-level reliability for peak traffic events.',
    'Reviewed peer code, followed industry best practices, and provided suggestions to ensure adherence to consistent coding standards and architectural principles.'
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-6">
          <Link to="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
            ← Back to Portfolio
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Bet365 Experience</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Software Developer | June 2024 - Present | Manchester, England
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

export default Bet365;