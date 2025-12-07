import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
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

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const HomePage = () => (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="lg:ml-64">
        <motion.div
          whileInView="visible"
          variants={sectionVariants}
          initial="hidden"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Hero />
        </motion.div>
        <motion.section
          id="about"
          className="py-20 px-8 bg-gray-100/50 dark:bg-gray-900/30"
          whileInView="visible"
          variants={sectionVariants}
          initial="hidden"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-6xl mx-auto">
            <About />
          </div>
        </motion.section>
        <motion.section
          id="work"
          className="py-20 px-8"
          whileInView="visible"
          variants={sectionVariants}
          initial="hidden"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-6xl mx-auto">
            <Experience />
          </div>
        </motion.section>
        <motion.section
          id="projects"
          className="py-20 px-8 bg-gray-100/30 dark:bg-gray-900/50"
          whileInView="visible"
          variants={sectionVariants}
          initial="hidden"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-6xl mx-auto">
            <Projects />
          </div>
        </motion.section>
        <motion.section
          id="experience"
          className="py-20 px-8 bg-gray-100/50 dark:bg-gray-900/30"
          whileInView="visible"
          variants={sectionVariants}
          initial="hidden"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-6xl mx-auto">
            <Skills />
          </div>
        </motion.section>
        <motion.section
          id="contact"
          className="py-20 px-8 bg-gray-100/30 dark:bg-gray-900/50"
          whileInView="visible"
          variants={sectionVariants}
          initial="hidden"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-6xl mx-auto">
            <Education />
            <div className="mt-16">
              <Languages />
            </div>
            {/* <div className="mt-16">
              <Activities />
            </div> */}
          </div>
        </motion.section>
        <Footer />
      </div>
    </div>
  );

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bet365" element={<Bet365 />} />
          <Route path="/kindertons" element={<Kindertons />} />
          <Route path="/gadgeon" element={<Gadgeon />} />
          <Route path="/eteam" element={<Eteam />} />
          <Route path="/cmots" element={<Cmots />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;