import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../animations';

const skillCategories = [
  {
    category: 'Programming Languages',
    gradient: 'from-indigo-500 to-violet-500',
    pillClass: 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700/50',
    skills: ['C#', 'JavaScript', 'Go', 'TypeScript', 'Python'],
  },
  {
    category: 'Frameworks',
    gradient: 'from-violet-500 to-purple-500',
    pillClass: 'bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-700/50',
    skills: ['.NET', 'ASP.NET Core', '.NET 6+', 'MVC'],
  },
  {
    category: 'Web Technologies',
    gradient: 'from-cyan-500 to-blue-500',
    pillClass: 'bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700/50',
    skills: ['Web API', 'RESTful Services'],
  },
  {
    category: 'Database',
    gradient: 'from-orange-500 to-rose-500',
    pillClass: 'bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-700/50',
    skills: ['MS SQL Server', 'Entity Framework Core', 'Microsoft Dataverse'],
  },
  {
    category: 'Cloud Services',
    gradient: 'from-sky-500 to-indigo-500',
    pillClass: 'bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-700/50',
    skills: ['Azure', 'Google Cloud Platform', 'Dynamics 365 Power Platform'],
  },
  {
    category: 'Other Technologies',
    gradient: 'from-emerald-500 to-teal-500',
    pillClass: 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/50',
    skills: ['Elastic Search', 'Cassandra', 'Kafka', 'PostgreSQL'],
  },
];

import type { Variants } from 'framer-motion';

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 20 } },
};

const Skills: React.FC = () => (
  <div className="section bg-white dark:bg-zinc-950">
    <div className="section-inner">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="section-label">Technical</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skillCategories.map(({ category, gradient, pillClass, skills }) => (
          <motion.div
            key={category}
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="card group"
          >
            {/* Gradient top rule */}
            <div className={`h-0.5 bg-gradient-to-r ${gradient} -mx-6 -mt-6 mb-5 rounded-t-2xl`} />

            <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3">
              {category}
            </h3>

            <motion.div
              className="flex flex-wrap gap-2"
              variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={pillVariants}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold border ${pillClass} cursor-default`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
);

export default Skills;
