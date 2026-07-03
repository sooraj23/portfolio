import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../animations';

const educationData = [
  {
    degree: 'Bachelor of Computer Applications',
    institution: 'Chinmaya Mission College',
    location: 'Thrissur, Kerala',
    period: 'Jul 2012 – Jul 2015',
    gradient: 'from-indigo-500 to-violet-500',
    iconGradient: 'from-indigo-500 to-violet-600',
    glow: 'hover:shadow-indigo-500/20',
  },
  {
    degree: 'Higher Secondary Examination',
    institution: 'S.R.K.G.V.M.H.S.S',
    location: 'Thrissur, Kerala',
    period: 'Jun 2010 – Jul 2012',
    gradient: 'from-violet-500 to-purple-500',
    iconGradient: 'from-violet-500 to-purple-600',
    glow: 'hover:shadow-violet-500/20',
  },
  {
    degree: 'Senior Secondary Examination',
    institution: 'S.N.D.P.H.S.S',
    location: 'Ernakulam, Kerala',
    period: 'May 2009 – Jun 2010',
    gradient: 'from-purple-500 to-pink-500',
    iconGradient: 'from-purple-500 to-pink-600',
    glow: 'hover:shadow-purple-500/20',
  },
];

const Education: React.FC = () => (
  <div className="section bg-zinc-50 dark:bg-zinc-900/40">
    <div className="section-inner">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="section-label">Background</p>
        <h2 className="section-title">Education</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {educationData.map((edu, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`card group overflow-hidden cursor-default hover:shadow-xl ${edu.glow}`}
          >
            {/* Gradient top accent */}
            <div className={`h-0.5 bg-gradient-to-r ${edu.gradient} -mx-6 -mt-6 mb-6 rounded-t-2xl`} />

            {/* Number badge */}
            <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${edu.iconGradient} text-white font-bold text-sm mb-5 shadow-lg`}>
              {String(i + 1).padStart(2, '0')}
            </div>

            <h3 className="text-base font-bold text-zinc-900 dark:text-white leading-snug mb-3">
              {edu.degree}
            </h3>

            <p className={`text-sm font-semibold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent mb-2`}>
              {edu.institution}
            </p>

            <div className="flex items-center gap-1.5 mt-auto">
              <svg className="w-3 h-3 text-zinc-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">{edu.location}</span>
            </div>

            <div className="flex items-center gap-1.5 mt-1.5">
              <svg className="w-3 h-3 text-zinc-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">{edu.period}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
);

export default Education;
