import React from 'react';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-6">
          <Link to="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
            ← Back to Portfolio
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Gadgeon Smart Systems Experience</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Senior Software Engineer | Oct 2021 – Jan 2023 | Kochi, India
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

export default Gadgeon;