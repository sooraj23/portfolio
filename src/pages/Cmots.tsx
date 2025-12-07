import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { sectionVariants, staggerContainer, fadeInUp } from '../animations';

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md transition-colors duration-200">
            ← Back to Portfolio
          </Link>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="mb-8"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">C-MOTS Internet Technologies Experience</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            Software Developer | Dec 2017 – Jan 2020 | Mumbai, India
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
                className="flex items-start p-4 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                variants={fadeInUp}
              >
                <span className="text-2xl mr-4 mt-1">🌐</span>
                <span className="text-gray-800 dark:text-gray-200 leading-relaxed">{achievement}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Cmots;