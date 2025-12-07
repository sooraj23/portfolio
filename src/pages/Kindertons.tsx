import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { sectionVariants, staggerContainer, fadeInUp } from '../animations';

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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md transition-colors duration-200">
            ← Back to Portfolio
          </Link>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="mb-8"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Kindertons Experience</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            Software Developer | May 2023 – May 2024 | Crew, England
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
                className="flex items-start p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                variants={fadeInUp}
              >
                <span className="text-2xl mr-4 mt-1">💡</span>
                <span className="text-gray-800 dark:text-gray-200 leading-relaxed">{achievement}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Kindertons;