import React from 'react';
import { Link } from 'react-router-dom';

const Cmots: React.FC = () => {
  const achievements = [
    'Participated in requirement gathering and analysis sessions with clients and project managers, translating business needs into technical specifications and actionable development tasks.',
    'Designed, developed, and implemented scalable software applications using ASP.NET, ASP.NET MVC, C#, LINQ, and SQL Server, ensuring secure and efficient processing across various modules.',
    'Contributed to building and maintaining web interfaces by collaborating with frontend teams, ensuring seamless integration between backend APIs and user-facing features.',
    'Developed reusable components and backend services to streamline common application functionalities, reducing development time and improving system consistency.',
    'Worked on optimising database queries and stored procedures, improving system performance and ensuring efficient data retrieval for high-traffic modules.',
    'Participated in the full software development lifecycle, including coding, testing, debugging, deployment, and support for multiple client applications.',
    'Conducted functional and integration testing to validate application behaviour, identify issues, and ensure smooth system operation before production release.',
    'Collaborated with cross-functional teams—including designers, QA engineers, and senior developers—to resolve technical issues and deliver high-quality solutions.',
    'Troubleshot application bugs by analysing logs, identifying root causes, and implementing robust fixes to avoid reoccurrence of similar issues.',
    'Contributed to deployment activities by preparing release notes, coordinating with operations teams, and ensuring smooth rollout of new features and enhancements.',
    'Participated in performance tuning of application components, refactoring legacy code to improve maintainability and overall system reliability.',
    'Assisted in preparing detailed technical documentation, including module designs, API references, and deployment guidelines to support long-term maintainability.',
    'Supported live production environments by monitoring application behaviour, responding to incidents, and ensuring minimal downtime for end-users.',
    'Collaborated on version control practices using Git, ensuring code integrity, organised branching, and structured team-based development workflows.',
    'Worked closely with clients to understand feedback, gather enhancement requirements, and deliver modifications aligned with user expectations.',
    'Engaged regularly in internal knowledge-sharing sessions to introduce new technologies, best practices, and improved development standards within the team.'
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-6">
          <Link to="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
            ← Back to Portfolio
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">C-MOTS Internet Technologies Experience</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Software Developer | Dec 2017 – Jan 2020 | Mumbai, India
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

export default Cmots;