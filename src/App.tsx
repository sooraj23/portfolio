import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Languages from './components/Languages';
import Footer from './components/Footer';
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
        <Hero />
        <section id="about" className="py-20 px-8 bg-gray-100/50 dark:bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <About />
          </div>
        </section>
        <section id="work" className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <Experience />
          </div>
        </section>
        <section id="projects" className="py-20 px-8 bg-gray-100/30 dark:bg-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <Projects />
          </div>
        </section>
        <section id="experience" className="py-20 px-8 bg-gray-100/50 dark:bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <Skills />
          </div>
        </section>
        <section id="contact" className="py-20 px-8 bg-gray-100/30 dark:bg-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <Education />
            <div className="mt-16">
              <Languages />
            </div>
            {/* <div className="mt-16">
              <Activities />
            </div> */}
          </div>
        </section>
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