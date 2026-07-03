import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, fadeInLeft } from '../animations';

const highlights = [
  { icon: '💻', title: '8+ Years Experience', desc: '.NET development across diverse industries', color: 'from-indigo-500 to-violet-500' },
  { icon: '🏗️', title: 'Full-Stack', desc: 'Frontend & backend development', color: 'from-violet-500 to-purple-500' },
  { icon: '☁️', title: 'Cloud First', desc: 'Azure, GCP, modern cloud platforms', color: 'from-sky-500 to-cyan-500' },
  { icon: '⚡', title: 'Event-Driven', desc: 'Kafka, Elastic Search, microservices', color: 'from-emerald-500 to-teal-500' },
];

const About: React.FC = () => (
  <div className="section bg-zinc-50 dark:bg-zinc-900/40">
    <div className="section-inner">

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Left — bio */}
        <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <p className="section-label">About Me</p>
          <h2 className="section-title leading-tight">Crafting scalable<br />software solutions</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mb-6" />
          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg mb-6">
            Dynamic and results-driven .NET Developer with{' '}
            <strong className="text-zinc-900 dark:text-white">8 years of experience</strong> delivering scalable,
            high-performance solutions across diverse industries. Highly skilled in{' '}
            <strong className="text-indigo-600 dark:text-indigo-400">C#, .NET, SQL, Azure, Elasticsearch, Kafka, Go, and TypeScript</strong>,
            with hands-on exposure to Python and Dynamics 365 Power Platform.
          </p>
          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg">
            Adept in object-oriented design and passionate about crafting clean, robust, and maintainable code.
            Experienced in building modern RESTful APIs, solid unit testing practices, and thriving in fast-paced Agile environments.
          </p>
        </motion.div>

        {/* Right — highlight grid */}
        <motion.div
          className="grid grid-cols-2 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="card group cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${h.color} flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                {h.icon}
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-1.5">{h.title}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </div>
);

export default About;
