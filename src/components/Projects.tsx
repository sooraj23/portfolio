import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, scaleIn } from '../animations';

interface Project {
  name: string;
  role: string;
  technologies: string[];
  description: string;
  gradient: string;
  glow: string;
}

const projects: Project[] = [
  {
    name: 'Verification Tool',
    role: 'Full Stack Developer',
    gradient: 'from-indigo-500 to-violet-500',
    glow: 'hover:shadow-indigo-500/20',
    technologies: ['.Net', 'C#', 'LINQ', 'SQL Server', 'Kafka', 'TypeScript', 'Go', 'GCP'],
    description: 'Worked on the backend of a verification application for a betting company, developing key features and integrations.',
  },
  {
    name: 'Shopping Cart',
    role: 'Full Stack Developer',
    gradient: 'from-emerald-500 to-teal-500',
    glow: 'hover:shadow-emerald-500/20',
    technologies: ['.Net', 'C#', 'Azure Service Bus', 'Azure', 'Ocelot Gateway', 'RabbitMQ', 'SQL Server', 'HTML', 'CSS'],
    description: 'Developed a scalable cloud kitchen platform using ASP.NET Core microservices with .NET 8. Integrated Azure services, RabbitMQ, Stripe Payments and Ocelot gateway.',
  },
  {
    name: 'Fleet Management System',
    role: 'CRM & .Net Developer',
    gradient: 'from-orange-500 to-rose-500',
    glow: 'hover:shadow-orange-500/20',
    technologies: ['Dynamics 365', 'Power BI', 'ASP.Net Core', 'C#', 'Dataverse', 'Azure Service Bus', 'Azure Functions'],
    description: 'Developed and customized model-driven and canvas apps using Power Apps. Integrated Power Automate to automate workflows and business processes.',
  },
  {
    name: 'Physical Asset Verification',
    role: 'Developer, Designer, Tester',
    gradient: 'from-cyan-500 to-blue-500',
    glow: 'hover:shadow-cyan-500/20',
    technologies: ['ASP.Net', 'C#', 'JavaScript', 'jQuery', 'ASP.Net MVC Core', 'SQL', 'Bootstrap'],
    description: 'Managing Assets, Location and Users of Bank. Developing code as per requirement.',
  },
  {
    name: 'Mutual Fund',
    role: 'Developer, Designer, Tester',
    gradient: 'from-violet-500 to-purple-600',
    glow: 'hover:shadow-violet-500/20',
    technologies: ['ASP.Net', 'ADO.Net', 'C#', 'JavaScript', 'jQuery', 'Angular JS', 'SQL', 'Bootstrap'],
    description: 'Provides information on Mutual Fund schemes, maintains current prices, NAV, and Dividend records. Includes portfolio comparison tools with chart returns.',
  },
  {
    name: 'Portfolio Management',
    role: 'Developer, Designer',
    gradient: 'from-pink-500 to-rose-500',
    glow: 'hover:shadow-pink-500/20',
    technologies: ['ASP.Net', 'ADO.Net', 'C#', 'JavaScript', 'jQuery', 'SQL', 'Bootstrap'],
    description: 'Managing portfolio of individual user. Display summary of user activities like buy, sell etc.',
  },
];

/* 3D tilt card */
const TiltCard: React.FC<{ project: Project }> = ({ project }) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = ((e.clientX - left) / width  - 0.5) * 14;
    const y = ((e.clientY - top)  / height - 0.5) * 14;
    el.style.transform = `perspective(700px) rotateX(${-y}deg) rotateY(${x}deg) scale(1.03)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(700px) rotateX(0) rotateY(0) scale(1)';
  };

  return (
    <motion.div
      variants={scaleIn}
      className={`card card-3d overflow-hidden flex flex-col cursor-default hover:shadow-xl ${project.glow}`}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* Gradient top accent */}
      <div className={`h-0.5 bg-gradient-to-r ${project.gradient} -mx-6 -mt-6 mb-5 rounded-t-2xl`} />

      <div className="flex items-start justify-between mb-2">
        <h3 className="text-base font-bold text-zinc-900 dark:text-white">{project.name}</h3>
        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${project.gradient} flex-shrink-0 opacity-80`} />
      </div>

      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 mb-3 self-start">
        {project.role}
      </span>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.technologies.slice(0, 5).map((tech) => (
          <span key={tech} className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
            {tech}
          </span>
        ))}
        {project.technologies.length > 5 && (
          <span className="px-2 py-0.5 text-[10px] text-zinc-400 dark:text-zinc-500 font-medium">
            +{project.technologies.length - 5} more
          </span>
        )}
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => (
  <div className="section bg-zinc-50 dark:bg-zinc-900/40">
    <div className="section-inner">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="section-label">Work</p>
        <h2 className="section-title">Projects</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        {projects.map((p, i) => (
          <TiltCard key={i} project={p} />
        ))}
      </motion.div>
    </div>
  </div>
);

export default Projects;
