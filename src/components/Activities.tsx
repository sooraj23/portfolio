import React from 'react';

const Activities: React.FC = () => {
  const activities = [
    'Participated and achieved trophies in various sport activities at high school level.',
    'Interested in playing football, Listening music and Learning new skills.'
  ];

  return (
    <section className="py-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100 flex items-center justify-center">
          <span className="mr-2">⚽</span>Extra-Curricular Activities
        </h2>
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <ul className="space-y-4">
            {activities.map((activity, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span className="text-gray-700 dark:text-gray-300">{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Activities;