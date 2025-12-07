import React from 'react';
import { Link } from 'react-router-dom';

interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const Experience: React.FC = () => {
  const jobs: Job[] = [
    {
      title: 'Software Developer',
      company: 'Bet365',
      location: 'Manchester, England',
      period: 'June 2024 - Present',
      description: [
        'Designed and implemented microservices using .NET 6 and C#, ensuring scalability and high availability.',
        'Contributed to building a betting platform with .NET, Go, and TypeScript, delivering reliable features.',
        'Applied Kafka to build an event-driven architecture, streamlining communication between distributed services.',
        'Implemented unit testing (xUnit) to improve software reliability and maintainability.',
        'Set up and maintained CI/CD pipelines via Jenkins and GitLab, deploying services to GCP for reliable web hosting.',
        'Participated in Agile sprints and code reviews to maintain code quality and team collaboration.'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Kindertons Accident Management',
      location: 'Crew, England',
      period: 'May 2023 – May 2024',
      description: [
        'Developed and maintained micro services using .NET Core.',
        'Integrated Azure Service Bus for message queuing and event-driven architecture, enabling seamless communication between microservices.',
        'Worked in Microsoft Azure, for deploying and managing .NET applications.',
        'Deployed and managed .NET applications on Microsoft Azure, leveraging Azure services such as Azure DevOps for CI/CD pipelines and Azure App Service for scalable web hosting.',
        'Utilized Azure Functions and App Services to build and deploy serverless and cloud-native applications.',
        'Worked in an Agile environment, participating in daily stand-ups, sprint planning, and retrospectives to ensure smooth project execution and timely delivery.'
      ]
    },
    {
      title: 'Senior Software Engineer',
      company: 'Gadgeon Smart Systems Inc (Client – KORE Wireless)',
      location: 'Kochi, India',
      period: 'Oct 2021 – Jan 2023',
      description: [
        'Worked on a position tracking application as a .NET backend developer',
        'Utilized Kafka for building message stream architectures, enabling real-time data processing and event-driven communication between microservices.',
        'Implemented unit testing to ensure code quality and maintainability, resulting in a reduction in bugs and increased software reliability.',
        'Integrated Elastic Search into existing systems to enable fast and accurate search functionalities, improving user experience and data accessibility.',
        'Followed SOLID principles and clean coding practices to develop maintainable and modular backend services.'
      ]
    },
    {
      title: 'Dot Net Developer',
      company: 'E-Team (Client - Wipro Ltd, Project – ICICI Bank)',
      location: 'Mumbai, India',
      period: 'Jan 2020 – Oct 2021',
      description: [
        'Worked on banking application as a full stack Asp.net core project',
        'Worked with project managers, developers and quality assurance to resolve technical issues.',
        'Tested troubleshooting methods, devised innovative solutions, and documented resolutions for inclusion in knowledge base for support team use.',
        'Single sign in functionality, collaborating with another in house project to fetch users details as per in ICICI employee database.'
      ]
    },
    {
      title: 'Software Developer',
      company: 'C-MOTS Internet Technologies',
      location: 'Mumbai, India',
      period: 'Dec 2017 – Jan 2020',
      description: [
        'Analysed requirements and designed, developed and implemented software applications for multiple websites.',
        'Collaborated on all stages of systems development lifecycle, from requirement gathering to production releases.',
        'Built, tested and deployed scalable, highly available and modular software products.',
        'Evaluated project requirements and specifications and developed software applications that surpassed client expectations.'
      ]
    }
  ];

  return (
    <section className="py-8 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Work Experience</h2>
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div key={index} className={`bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-green-500 relative overflow-hidden ${(job.company === 'Bet365' || job.company === 'Kindertons Accident Management' || job.company === 'Gadgeon Smart Systems Inc (Client – KORE Wireless)' || job.company === 'E-Team (Client - Wipro Ltd, Project – ICICI Bank)' || job.company === 'C-MOTS Internet Technologies') ? 'cursor-pointer hover:bg-black hover:bg-opacity-5 dark:hover:bg-opacity-10' : ''}`}>
              {(job.company === 'Bet365' || job.company === 'Kindertons Accident Management' || job.company === 'Gadgeon Smart Systems Inc (Client – KORE Wireless)' || job.company === 'E-Team (Client - Wipro Ltd, Project – ICICI Bank)' || job.company === 'C-MOTS Internet Technologies') ? (
                <Link to={
                  job.company === 'Bet365' ? '/bet365' :
                  job.company === 'Kindertons Accident Management' ? '/kindertons' :
                  job.company === 'Gadgeon Smart Systems Inc (Client – KORE Wireless)' ? '/gadgeon' :
                  job.company === 'E-Team (Client - Wipro Ltd, Project – ICICI Bank)' ? '/eteam' :
                  '/cmots'
                } className="block group">
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 dark:group-hover:bg-opacity-10 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                      <span className="mr-2">🏢</span>{job.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{job.company}, {job.location}</p>
                    <p className="text-gray-500 dark:text-gray-500 mb-4">{job.period}</p>
                    <ul className="list-disc list-inside space-y-1">
                      {job.description.map((point, i) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300">{point}</li>
                      ))}
                    </ul>
                  </div>
                </Link>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                    <span className="mr-2">🏢</span>{job.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{job.company}, {job.location}</p>
                  <p className="text-gray-500 dark:text-gray-500 mb-4">{job.period}</p>
                  <ul className="list-disc list-inside space-y-1">
                    {job.description.map((point, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300">{point}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;