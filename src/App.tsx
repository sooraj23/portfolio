import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Languages from './components/Languages';
import Footer from './components/Footer';
import { sectionVariants } from './animations';
import Bet365 from './pages/Bet365';
import Kindertons from './pages/Kindertons';
import Gadgeon from './pages/Gadgeon';
import Eteam from './pages/Eteam';
import Cmots from './pages/Cmots';

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      className="fixed top-16 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 z-[60] origin-left"
      style={{ scaleX }}
    />
  );
};

const HomePage: React.FC = () => (
  <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">
    <ScrollProgress />
    <Navbar />
    <div className="pt-16">
      <Hero />

      <motion.section id="about" whileInView="visible" variants={sectionVariants} initial="hidden" viewport={{ once: true, amount: 0.1 }}>
        <About />
      </motion.section>

      <motion.section id="work" whileInView="visible" variants={sectionVariants} initial="hidden" viewport={{ once: true, amount: 0.05 }}>
        <Experience />
      </motion.section>

      <motion.section id="projects" whileInView="visible" variants={sectionVariants} initial="hidden" viewport={{ once: true, amount: 0.05 }}>
        <Projects />
      </motion.section>

      <motion.section id="experience" whileInView="visible" variants={sectionVariants} initial="hidden" viewport={{ once: true, amount: 0.1 }}>
        <Skills />
      </motion.section>

      <motion.section id="contact" whileInView="visible" variants={sectionVariants} initial="hidden" viewport={{ once: true, amount: 0.05 }}>
        <Education />
        <Languages />
      </motion.section>

      <Footer />
    </div>
  </div>
);

const App: React.FC = () => (
  <ThemeProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bet365" element={<Bet365 />} />
        <Route path="/kindertons" element={<Kindertons />} />
        <Route path="/gadgeon" element={<Gadgeon />} />
        <Route path="/eteam" element={<Eteam />} />
        <Route path="/cmots" element={<Cmots />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;
