import React from 'react';
import ExperiencePage from '../components/ExperiencePage';

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
  'Contributed to cross-team collaboration, knowledge sharing, and continuous improvement initiatives to streamline development workflows and enhance delivery efficiency.',
];

const tech = ['ASP.NET Core', 'C#', '.NET Core', 'LINQ', 'SQL Server', 'Jenkins', 'REST APIs', 'Microservices', 'MVC', 'Unit Testing'];

const Eteam: React.FC = () => (
  <ExperiencePage
    initial="E"
    company="E-Team (Wipro / ICICI)"
    role="Dot Net Developer"
    period="Jan 2020 – Oct 2021"
    location="Mumbai, India"
    gradient="from-cyan-500 to-blue-600"
    shadowColor="shadow-cyan-500/30"
    fromColor="from-cyan-500"
    toColor="to-blue-600"
    tech={tech}
    achievements={achievements}
  />
);

export default Eteam;
