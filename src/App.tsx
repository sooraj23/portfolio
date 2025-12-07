import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Languages from './components/Languages';
import Activities from './components/Activities';
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
    <>
      <div className="fixed top-4 right-4 flex space-x-2 z-50">
        <a
          href="https://github.com/sooraj23"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-lg text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          title="GitHub"
          aria-label="GitHub"
        >
          🐙
        </a>
        <button
          onClick={toggleDarkMode}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-lg"
          title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg z-50 transition-colors"
        aria-label="Go to top"
      >
        ↑
      </button>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Languages />
      {/* <Activities /> */}
      <Footer />
    </>
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