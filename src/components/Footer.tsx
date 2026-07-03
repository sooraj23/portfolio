import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 dark:bg-black border-t border-zinc-800 text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-14 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-indigo-500/20">
              SK
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Sooraj Krishnakumar</p>
              <p className="text-xs text-zinc-400">Software Developer · London, UK</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/krishnakumarsooraj7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-indigo-400 transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sooraj23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-200 transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="mailto:krishnakumarsooraj7@gmail.com"
              className="text-zinc-400 hover:text-indigo-400 transition-colors text-sm"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-zinc-500">© 2025 Sooraj Krishnakumar. All rights reserved.</p>
          <p className="text-xs text-zinc-600">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
