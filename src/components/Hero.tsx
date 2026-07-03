import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { charReveal, staggerFast, fadeInUp, staggerContainer } from '../animations';

const roles = ['Developer', 'Engineer', 'Problem Solver', 'Tech Lead'];

/* ── Animated counter ── */
const Counter: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = target / 60;
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
          }, 20);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

/* ── Marquee ── */
const tech1 = ['C#', '.NET Core', 'React', 'TypeScript', 'Azure', 'Kafka', 'Docker', 'SQL Server', 'Go', 'Elasticsearch'];
const tech2 = ['GCP', 'Microservices', 'REST APIs', 'xUnit', 'Entity Framework', 'Power Apps', 'Azure Service Bus', 'RabbitMQ', 'Jenkins', 'GitLab CI'];

const MarqueeRow: React.FC<{ items: string[]; reverse?: boolean; accent: string }> = ({ items, reverse, accent }) => {
  const tripled = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className={`flex gap-4 py-2 ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`}>
        {tripled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border whitespace-nowrap bg-white/60 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 backdrop-blur-sm"
          >
            <span className={`w-1.5 h-1.5 rounded-full ${accent}`} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const stats = [
  { value: 8,  suffix: '+', label: 'Years Experience' },
  { value: 5,  suffix: '',  label: 'Companies' },
  { value: 15, suffix: '+', label: 'Projects' },
];

const Hero: React.FC = () => {
  const name = 'Sooraj';
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setRoleIndex(i => (i + 1) % roles.length), 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] bg-white dark:bg-zinc-950 overflow-hidden flex flex-col">

      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-15 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[36rem] h-[36rem] bg-indigo-400/15 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      {/* ── MOBILE: Full-width photo at top ── */}
      <div className="lg:hidden relative w-full h-[65vh] overflow-hidden flex-shrink-0">
        <motion.img
          src="/profile.png"
          alt="Sooraj Krishnakumar"
          className="w-full h-full object-cover object-[center_20%]"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Bottom gradient fade into page background */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent pointer-events-none" />
        {/* Left fade */}
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent pointer-events-none" />
        {/* Right fade */}
        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent pointer-events-none" />
      </div>

      {/* ── RIGHT: Full-height photo panel (desktop only) ── */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[45%] overflow-hidden">
        {/* Left edge — seamless blend into background */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none" />

        <motion.img
          src="/profile.png"
          alt="Sooraj Krishnakumar"
          className="w-full h-full object-cover object-top"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* ── LEFT: Text content ── */}
      <div className="relative z-20 flex-1 flex items-center lg:w-[58%] px-6 lg:px-14">
        <div className="w-full pt-2 pb-10 lg:py-14">

          {/* Status badge */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Open to opportunities · London, UK
            </span>
          </motion.div>

          {/* Name — char flip reveal */}
          <div className="overflow-hidden mb-1">
            <motion.div
              className="flex"
              variants={staggerFast}
              initial="hidden"
              animate="visible"
              style={{ perspective: 800 }}
            >
              {name.split('').map((char, i) => (
                <motion.span
                  key={i}
                  variants={charReveal}
                  className="inline-block text-[5rem] sm:text-[7rem] lg:text-[9rem] xl:text-[11rem] font-extrabold leading-none tracking-tight gradient-text"
                  style={{ transformOrigin: 'bottom center' }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Last name */}
          <motion.p
            className="text-xl md:text-2xl lg:text-4xl font-bold text-zinc-300 dark:text-zinc-700 tracking-[0.18em] uppercase mb-7"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Krishnakumar
          </motion.p>

          {/* Flip role */}
          <motion.div
            className="flex items-center gap-3 mb-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.5 }}
          >
            <span className="text-lg md:text-2xl text-zinc-500 dark:text-zinc-400 font-light">Software</span>
            <div className="relative overflow-hidden h-[1.8em] flex items-center" style={{ perspective: '600px' }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  className="inline-block text-lg md:text-2xl font-bold gradient-text whitespace-nowrap"
                  initial={{ rotateX: 90, opacity: 0, y: '40%' }}
                  animate={{ rotateX: 0, opacity: 1, y: '0%' }}
                  exit={{ rotateX: -90, opacity: 0, y: '-40%' }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: 'inline-block', transformOrigin: 'center center' }}
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Gradient rule */}
          <motion.div
            className="h-px bg-gradient-to-r from-indigo-500 via-violet-400 to-transparent mb-7"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            style={{ originX: 0 }}
            transition={{ duration: 0.9, delay: 1.0, ease: 'easeOut' }}
          />

          {/* Bio */}
          <motion.p
            className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed mb-9 font-light"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
          >
            8 years building scalable backends, cloud-first microservices, and high-performance systems across fintech, IoT, and enterprise platforms.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap gap-10 md:gap-12 mb-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <p className="text-4xl md:text-5xl font-black gradient-text leading-none mb-1">
                  <Counter target={s.value} suffix={s.suffix} />
                </p>
                <p className="text-sm text-zinc-400 dark:text-zinc-500 font-medium">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Info cards */}
          <motion.div
            className="flex flex-wrap gap-3 mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <div className="flex items-center gap-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-2.5 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-xs flex-shrink-0 shadow-md shadow-indigo-500/30">
                B
              </div>
              <div>
                <p className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium uppercase tracking-wider">Currently at</p>
                <p className="text-sm font-bold text-zinc-900 dark:text-white leading-tight">Bet365 · Manchester</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl px-4 py-2.5 shadow-md shadow-indigo-500/25">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-white/60 font-medium uppercase tracking-wider">Experience</p>
                <p className="text-sm font-bold text-white leading-tight">8+ Years</p>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.5 }}
          >
            <motion.button
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-xl text-base shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-shadow"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              View My Work
            </motion.button>
            <motion.a
              href="mailto:krishnakumarsooraj7@gmail.com"
              className="px-8 py-3.5 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-semibold rounded-xl border border-zinc-200 dark:border-zinc-700 text-base shadow-sm hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

        </div>
      </div>

      {/* Marquee */}
      <motion.div
        className="relative z-20 border-t border-zinc-100 dark:border-zinc-800/60 py-5 space-y-3 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <MarqueeRow items={tech1} accent="bg-indigo-500" />
        <MarqueeRow items={tech2} reverse accent="bg-violet-500" />
      </motion.div>

    </section>
  );
};

export default Hero;
