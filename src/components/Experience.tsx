import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../animations';

interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  path?: string;
  gradient: string;
  dotBg: string;
  current?: boolean;
}

const jobs: Job[] = [
  {
    title: 'Software Developer',
    company: 'Bet365',
    location: 'Manchester, England',
    period: 'June 2024 – Present',
    current: true,
    gradient: 'from-indigo-500 to-violet-500',
    dotBg: 'from-indigo-500 to-violet-500',
    path: '/bet365',
    description: [
      'Designed and implemented microservices using .NET 6, C#, and Go, with cross-service integrations in TypeScript, deployed on GCP.',
      'Leveraged Kafka for event-driven architecture and Cloud Spanner for globally distributed, horizontally scalable data storage.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Kindertons Accident Management',
    location: 'Crew, England',
    period: 'May 2023 – May 2024',
    gradient: 'from-emerald-500 to-teal-500',
    dotBg: 'from-emerald-500 to-teal-500',
    path: '/kindertons',
    description: [
      'Developed and maintained microservices using .NET Core.',
      'Integrated Azure Service Bus for message queuing and event-driven architecture.',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Gadgeon Smart Systems Inc (KORE Wireless)',
    location: 'Kochi, India',
    period: 'Oct 2021 – Jan 2023',
    gradient: 'from-orange-500 to-rose-500',
    dotBg: 'from-orange-500 to-rose-500',
    path: '/gadgeon',
    description: [
      'Worked on a position tracking application as a .NET backend developer.',
      'Utilized Kafka for building message stream architectures, enabling real-time data processing.',
    ],
  },
  {
    title: 'Dot Net Developer',
    company: 'E-Team (Wipro Ltd / ICICI Bank)',
    location: 'Mumbai, India',
    period: 'Jan 2020 – Oct 2021',
    gradient: 'from-cyan-500 to-blue-500',
    dotBg: 'from-cyan-500 to-blue-500',
    path: '/eteam',
    description: [
      'Worked on a banking application as a full stack ASP.NET Core project.',
      'Collaborated with project managers, developers and quality assurance to resolve technical issues.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'C-MOTS Internet Technologies',
    location: 'Mumbai, India',
    period: 'Dec 2017 – Jan 2020',
    gradient: 'from-purple-500 to-pink-500',
    dotBg: 'from-purple-500 to-pink-500',
    path: '/cmots',
    description: [
      'Analysed requirements and designed, developed and implemented software applications for multiple websites.',
      'Built, tested and deployed scalable, highly available and modular software products.',
    ],
  },
];

const Experience: React.FC = () => (
  <div className="section bg-white dark:bg-zinc-950">
    <div className="section-inner">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="section-label">Career</p>
        <h2 className="section-title">Work Experience</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
      </motion.div>

      <div className="relative">
        {/* Animated timeline line */}
        <motion.div
          className="absolute left-4 top-0 w-px bg-gradient-to-b from-indigo-500 via-violet-500 to-pink-500 origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.2 }}
          viewport={{ once: true }}
          style={{ height: '100%' }}
        />

        <motion.div
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {jobs.map((job, index) => {
            const Inner = (
              <>
                <div className="flex items-start justify-between mb-3 gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-base font-bold text-zinc-900 dark:text-white">{job.title}</h3>
                      {job.current && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-700/50">
                          Current
                        </span>
                      )}
                    </div>
                    <p className={`font-semibold text-base bg-gradient-to-r ${job.gradient} bg-clip-text text-transparent`}>
                      {job.company}
                    </p>
                    <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-0.5">
                      {job.location} · {job.period}
                    </p>
                  </div>
                  {job.path && (
                    <svg className="w-4 h-4 text-zinc-300 dark:text-zinc-600 group-hover:text-indigo-500 flex-shrink-0 mt-0.5 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
                <div className="space-y-2 mb-3">
                  {job.description.map((pt, i) => (
                    <p key={i} className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600 flex-shrink-0 mt-2" />
                      {pt}
                    </p>
                  ))}
                </div>
                {job.path && (
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:underline">
                    View full experience →
                  </p>
                )}
              </>
            );

            return (
              <motion.div key={index} variants={fadeInUp} className="relative flex gap-6 pl-12">
                {/* Dot */}
                <motion.div
                  className={`absolute left-0 top-4 w-8 h-8 rounded-full bg-gradient-to-br ${job.dotBg} flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-zinc-950 flex-shrink-0`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <span className="w-2 h-2 bg-white rounded-full" />
                </motion.div>

                {job.path ? (
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className="flex-1"
                  >
                    <Link to={job.path} className="card block hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-md group">
                      {Inner}
                    </Link>
                  </motion.div>
                ) : (
                  <div className="flex-1 card">{Inner}</div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  </div>
);

export default Experience;
