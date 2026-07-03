import React from 'react';
import ExperiencePage from '../components/ExperiencePage';

const achievements = [
  'Designed and developed backend microservices using .NET 6, C#, and VB.NET, ensuring modularity, scalability, and high throughput across core betting platform components.',
  'Built and maintained RESTful APIs supporting internal services and customer-facing features, ensuring secure communication and efficient data processing across distributed systems.',
  'Built backend services in Go and cross-service integrations using TypeScript, enabling seamless multi-language interoperability across the distributed betting platform.',
  'Deployed and managed microservices on Google Cloud Platform (GCP), utilising Cloud Spanner for globally distributed, strongly consistent, and horizontally scalable data storage.',
  'Integrated Elasticsearch to power real-time search and analytics across betting data, enabling fast event and market querying at scale.',
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
  'Reviewed peer code, followed industry best practices, and provided suggestions to ensure adherence to consistent coding standards and architectural principles.',
];

const tech = ['.NET 6', 'C#', 'Go', 'TypeScript', 'GCP', 'Cloud Spanner', 'Kafka', 'Elasticsearch', 'SQL Server', 'xUnit', 'Jenkins', 'GitLab CI', 'REST APIs'];

const Bet365: React.FC = () => (
  <ExperiencePage
    initial="B"
    company="Bet365"
    role="Software Developer"
    period="June 2024 – Present"
    location="Manchester, England"
    current
    gradient="from-indigo-500 to-violet-600"
    shadowColor="shadow-indigo-500/30"
    fromColor="from-indigo-500"
    toColor="to-violet-600"
    tech={tech}
    achievements={achievements}
  />
);

export default Bet365;
