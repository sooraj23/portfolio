import React from 'react';
import ExperiencePage from '../components/ExperiencePage';

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
  'Participated in architectural discussions and contributed to improving the IoT backend infrastructure, including optimisations for high-throughput event ingestion and database schema tuning.',
];

const tech = ['.NET Core', 'C#', 'Kafka', 'Elasticsearch', 'Cassandra', 'PostgreSQL', 'RabbitMQ', 'GraphQL', 'Angular', 'Microservices', 'IoT'];

const Gadgeon: React.FC = () => (
  <ExperiencePage
    initial="G"
    company="Gadgeon Smart Systems"
    role="Senior Software Engineer"
    period="Oct 2021 – Jan 2023"
    location="Kochi, India"
    gradient="from-orange-500 to-rose-600"
    shadowColor="shadow-orange-500/30"
    fromColor="from-orange-500"
    toColor="to-rose-600"
    tech={tech}
    achievements={achievements}
  />
);

export default Gadgeon;
