import React from 'react';
import { Link } from 'react-router-dom';

const Eteam: React.FC = () => {
  const achievements = [
    'Worked closely with project managers, developers, and quality assurance teams to resolve complex technical issues and ensure smooth delivery of project milestones within strict banking SLAs.',
    'Designed and developed forward-thinking banking application modules using ASP.NET Core MVC, improving usability, maintainability, and operational efficiency.',
    'Contributed to the re-architecture of legacy systems into modern MVC structures, enhancing scalability, performance, and long-term supportability.',
    'Developed backend components and REST APIs using C#, .NET Core, LINQ, and SQL Server, ensuring secure and consistent data flow across banking modules.',
    'Built and maintained microservices, enabling modular deployments, fault isolation, and improved operational efficiency across distributed banking systems.',
    'Contributed to CI/CD pipeline configurations using Jenkins, automating deployments, improving build reliability, and reducing manual intervention for frequent application releases.',
    'Analysed existing application performance and executed optimisation tasks, including refactoring of slow-running modules and implementing efficient database queries.',
    'Collaborated with Wipro and ICICI teams to gather functional requirements, refine user stories, and translate business needs into detailed technical specifications.',
    'Conducted unit testing and integration testing to validate new features, ensure compatibility with legacy systems, and maintain overall system stability.',
    'Provided production support by analysing system logs, identifying root causes, and implementing long-term fixes to enhance overall application stability.',
    'Developed reusable backend components and shared libraries to maintain consistency and reduce redundant development efforts across ICICI\'s platforms.',
    'Ensured that all development activities complied with the bank\'s stringent security guidelines, coding standards, and audit requirements.',
    'Supported junior team members and new joiners by providing technical guidance, onboarding assistance, and code-level mentoring to help them adapt to project standards and processes.',
    'Contributed to cross-team collaboration, knowledge sharing, and continuous improvement initiatives to streamline development workflows and enhance delivery efficiency.'
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-6">
          <Link to="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
            ← Back to Portfolio
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">E-Team (Wipro) Experience</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Dot Net Developer | Jan 2020 – Oct 2021 | Mumbai, India
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

export default Eteam;