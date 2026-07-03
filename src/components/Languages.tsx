import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, scaleIn } from '../animations';

const languages = [
  { name: 'English',   level: 'Fluent',         flag: '🇬🇧' },
  { name: 'Hindi',     level: 'Fluent',         flag: '🇮🇳' },
  { name: 'Malayalam', level: 'Native',         flag: '🌿' },
  { name: 'Tamil',     level: 'Conversational', flag: '🌺' },
  { name: 'Marathi',   level: 'Conversational', flag: '🌸' },
];

const Languages: React.FC = () => (
  <div className="pb-16 bg-zinc-50 dark:bg-zinc-900/40">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-14">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <p className="section-label">Communication</p>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Languages</h2>
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {languages.map((lang, i) => (
          <motion.div
            key={i}
            variants={scaleIn}
            whileHover={{ y: -4, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="card flex items-center gap-3 py-3 px-4 cursor-default"
          >
            <span className="text-xl">{lang.flag}</span>
            <div>
              <p className="text-sm font-semibold text-zinc-900 dark:text-white leading-tight">{lang.name}</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">{lang.level}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
);

export default Languages;
