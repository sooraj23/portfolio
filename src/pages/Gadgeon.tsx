import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { sectionVariants, staggerContainer, fadeInUp } from '../animations';

const Gadgeon: React.FC = () => {
  const achievements = [
    'Designed, developed, and maintained backend services for an IoT device management platform using .NET Core, ensuring high performance, reliability, and scalable data processing across millions of device events.',
    'Worked extensively with Kafka to build event-driven architectures, implementing message streaming solutions that supported real-time device telemetry ingestion and asynchronous workflow orchestration.',
    'Utilised Elastic Search to index and search large volumes of IoT data, enabling low-latency query responses, analytics capabilities, and enhanced device event visibility.',
    'Developed backend modules integrating with Cassandra and PostgreSQL databases, ensuring high-speed data writes for device events and robust transactional consistency for application data.',
    'Worked with RabbitMQ to implement message queues, enabling efficient communication between distributed microservices and improving fault tolerance across the IoT system.',
    'Built and consumed GraphQL APIs to support flexible data retrieval patterns, enabling frontend modules and partner applications to query IoT device information dynamically.',
    'Contributed to frontend development using Angular, implementing user interfaces for device tracking, data visualisation, and system monitoring, supporting full-stack delivery responsibilities.',
    'Designed microservices that processed real-time device positions, alerts, and telemetry updates, ensuring highly available and modular architecture suitable for enterprise-scale IoT environments.',
    'Followed clean coding practices, SOLID principles, and modular design patterns to write maintainable, testable, and scalable backend components for the IoT platform.',
    'Implemented unit and integration tests to validate complex business logic, device workflows, and data processing pipelines, thereby improving long-term reliability and reducing defects.',
    'Troubleshot production issues by analysing distributed logs, identifying bottlenecks in event pipelines, and deploying permanent fixes to ensure uninterrupted IoT system operation.',
    'Worked closely with cross-functional teams including DevOps, QA, product managers, and other developers to refine requirements and deliver high-quality features within Agile sprints.',
    'Integrated Elastic Search visualisation and analytical tools to support operational dashboards, improving insight into device health, event flow, and system behaviour.',
    'Supported junior developers by conducting code reviews, providing technical guidance, and assisting new team members in understanding the project environment, workflows, and best practices.',
    'Participated in architectural discussions and contributed to improving the IoT backend infrastructure, including optimisations for high-throughput event ingestion and database schema tuning.'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg shadow-md transition-colors duration-200">
            ← Back to Portfolio
          </Link>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="mb-8"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Gadgeon Smart Systems Experience</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            Senior Software Engineer | Oct 2021 – Jan 2023 | Kochi, India
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
                className="flex items-start p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-600 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                variants={fadeInUp}
              >
                <span className="text-2xl mr-4 mt-1">⚙️</span>
                <span className="text-gray-800 dark:text-gray-200 leading-relaxed">{achievement}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Gadgeon;