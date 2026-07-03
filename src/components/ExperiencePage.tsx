import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export interface ExperiencePageProps {
  initial: string;
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  gradient: string;
  shadowColor: string;
  fromColor: string;
  toColor: string;
  tech: string[];
  achievements: string[];
}

const ExperiencePage: React.FC<ExperiencePageProps> = ({
  initial, company, role, period, location, current,
  gradient, shadowColor, fromColor, toColor,
  tech, achievements,
}) => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">

      {/* Sticky top bar */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-14 h-14 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors text-sm"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>

      {/* Hero header */}
      <div className="relative overflow-hidden">
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-[0.07] dark:opacity-[0.12]`} />
        <div className="absolute inset-0 grid-bg opacity-20 dark:opacity-10 pointer-events-none" />
        {/* Glow blob */}
        <div className={`absolute -top-32 -right-32 w-[36rem] h-[36rem] bg-gradient-to-br ${gradient} opacity-10 rounded-full blur-3xl pointer-events-none`} />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-14 py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-wrap items-start gap-6 mb-8">
              {/* Logo */}
              <motion.div
                className={`w-20 h-20 lg:w-24 lg:h-24 rounded-3xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-2xl ${shadowColor} flex-shrink-0`}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.15, type: 'spring', stiffness: 200, damping: 18 }}
              >
                <span className="text-white font-black text-3xl lg:text-4xl">{initial}</span>
              </motion.div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-white leading-tight">
                    {company}
                  </h1>
                  {current && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-700/50">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                      </span>
                      Currently Here
                    </span>
                  )}
                </div>
                <p className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}>
                  {role}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {period}
                  </span>
                  <span className="text-zinc-300 dark:text-zinc-700">·</span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {location}
                  </span>
                </div>
              </div>
            </div>

            {/* Gradient rule */}
            <motion.div
              className={`h-px bg-gradient-to-r ${gradient} to-transparent mb-8`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              style={{ originX: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            {/* Tech pills */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {tech.map((t) => (
                <span
                  key={t}
                  className={`px-3 py-1 rounded-full text-xs font-semibold border bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300`}
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Achievements */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-14 py-12 lg:py-16">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className={`text-sm font-semibold uppercase tracking-widest bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-1`}>
            What I did
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
            Key Responsibilities & Achievements
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="flex gap-4 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800/60 hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 + index * 0.04, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -2 }}
            >
              {/* Number badge */}
              <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md ${shadowColor} opacity-90 group-hover:opacity-100 transition-opacity`}>
                <span className="text-white font-bold text-[10px]">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {achievement}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
