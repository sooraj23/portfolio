import React from 'react';
import ExperiencePage from '../components/ExperiencePage';

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
  'Engaged regularly in internal knowledge-sharing sessions to introduce new technologies, best practices, and improved development standards within the team.',
];

const tech = ['ASP.NET', 'ASP.NET MVC', 'C#', 'LINQ', 'SQL Server', 'JavaScript', 'jQuery', 'Bootstrap', 'Git', 'REST APIs'];

const Cmots: React.FC = () => (
  <ExperiencePage
    initial="C"
    company="C-MOTS Internet Technologies"
    role="Software Developer"
    period="Dec 2017 – Jan 2020"
    location="Mumbai, India"
    gradient="from-purple-500 to-pink-600"
    shadowColor="shadow-purple-500/30"
    fromColor="from-purple-500"
    toColor="to-pink-600"
    tech={tech}
    achievements={achievements}
  />
);

export default Cmots;
