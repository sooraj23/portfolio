import React from 'react';
import ExperiencePage from '../components/ExperiencePage';

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
  'Prepared deployment documentation, release notes, and technical guides to support knowledge sharing, onboarding of new developers, and smoother handover of application releases.',
];

const tech = ['.NET 6', 'C#', 'Azure Functions', 'Azure Service Bus', 'SQL Server', 'Power Apps', 'Dataverse', 'JavaScript', 'Microservices', 'REST APIs'];

const Kindertons: React.FC = () => (
  <ExperiencePage
    initial="K"
    company="Kindertons"
    role="Software Developer"
    period="May 2023 – May 2024"
    location="Crewe, England"
    gradient="from-emerald-500 to-teal-600"
    shadowColor="shadow-emerald-500/30"
    fromColor="from-emerald-500"
    toColor="to-teal-600"
    tech={tech}
    achievements={achievements}
  />
);

export default Kindertons;
