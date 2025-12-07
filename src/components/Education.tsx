import React from 'react';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

const Education: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Chinmaya Mission College – Thrissur, Kerala',
      period: 'Jul 2012 - Jul 2015'
    },
    {
      degree: 'Higher Secondary Examination',
      institution: 'S.R.K.G.V.M.H.S.S - Thrissur, Kerala',
      period: 'Jun 2010 – Jul 2012'
    },
    {
      degree: 'Senior Secondary Examination',
      institution: 'S.N.D.P.H.S.S – Ernakulam, Kerala',
      period: 'May 2009 – Jun 2010'
    }
  ];

  return (
    <section className="py-8 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100 flex items-center justify-center">
          <span className="mr-2">🎓</span>Education
        </h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{edu.degree}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-1">{edu.institution}</p>
              <p className="text-gray-500 dark:text-gray-500 mb-2">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;