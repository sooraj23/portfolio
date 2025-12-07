import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { sectionVariants, staggerContainer, fadeInUp } from '../animations';

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
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="inline-flex items-center px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg shadow-md transition-colors duration-200">
            ← Back to Portfolio
          </Link>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="mb-8"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">E-Team (Wipro) Experience</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            Dot Net Developer | Jan 2020 – Oct 2021 | Mumbai, India
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
                className="flex items-start p-4 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                variants={fadeInUp}
              >
                <span className="text-2xl mr-4 mt-1">🏦</span>
                <span className="text-gray-800 dark:text-gray-200 leading-relaxed">{achievement}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Eteam;