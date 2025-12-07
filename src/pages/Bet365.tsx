import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { sectionVariants, staggerContainer, fadeInUp } from '../animations';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-colors duration-200">
            ← Back to Portfolio
          </Link>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="mb-8"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Bet365 Experience</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            Software Developer | June 2024 - Present | Manchester, England
          </p>
        </motion.div>
        <motion.div
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-white/20"
          whileInView="visible"
          variants={sectionVariants}
          initial="hidden"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-gray-100 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">Key Achievements & Responsibilities</h2>
          <motion.ul
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.li
                key={index}
                className="flex items-start p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                variants={fadeInUp}
              >
                <span className="text-2xl mr-4 mt-1">🚀</span>
                <span className="text-gray-800 dark:text-gray-200 leading-relaxed">{achievement}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Bet365;