import React from 'react';

const Hero: React.FC = () => {
  const techStack = [
    { name: 'C#', icon: '🔷' },
    { name: '.NET', icon: '⚙️' },
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Azure', icon: '☁️' },
    { name: 'SQL Server', icon: '🗄️' },
    { name: 'Kafka', icon: '📨' },
    { name: 'Docker', icon: '🐳' }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-black dark:via-gray-900 dark:to-black flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top Label */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-black/15 dark:bg-white/10 backdrop-blur-sm border border-black/30 dark:border-white/20 rounded-full text-sm text-gray-800 dark:text-gray-300 tracking-widest font-medium">
              MANCHESTER, UK • SENIOR .NET DEVELOPER
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Sooraj</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            .NET developer with 8 years of experience building scalable backend systems and cloud-first applications.
          </p>

          {/* Tech Stack */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 px-4 py-2 bg-black/10 dark:bg-white/5 backdrop-blur-sm border border-black/20 dark:border-white/10 rounded-full hover:bg-black/20 dark:hover:bg-white/10 transition-all duration-300 cursor-default shadow-sm"
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="text-gray-800 dark:text-gray-300 font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-gray-700 dark:text-gray-300">
              <a
                href="mailto:krishnakumarsooraj7@gmail.com"
                className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span className="text-lg">✉️</span>
                <span>krishnakumarsooraj7@gmail.com</span>
              </a>
              <div className="flex items-center space-x-2">
                <span className="text-lg">📞</span>
                <span>+44 7818585732</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <a
              href="mailto:krishnakumarsooraj7@gmail.com"
              className="px-8 py-4 border-2 border-gray-800 dark:border-white/20 text-gray-800 dark:text-white font-semibold rounded-full hover:bg-gray-800 hover:text-white dark:hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;