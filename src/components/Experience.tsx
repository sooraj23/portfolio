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
    <section className="py-16 bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 dark:from-green-400/5 dark:to-blue-400/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white flex items-center justify-center">
            <span className="mr-3 text-5xl">💼</span>Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
        </div>
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div key={index} className="group relative">
              <div className="bg-white/5 dark:bg-white/5 backdrop-blur-sm dark:backdrop-blur-sm border border-gray-200/30 dark:border-white/10 rounded-2xl p-8 hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-500/10 shadow-lg">
                {(job.company === 'Bet365' || job.company === 'Kindertons Accident Management' || job.company === 'Gadgeon Smart Systems Inc (Client – KORE Wireless)' || job.company === 'E-Team (Client - Wipro Ltd, Project – ICICI Bank)' || job.company === 'C-MOTS Internet Technologies') ? (
                  <Link to={
                    job.company === 'Bet365' ? '/bet365' :
                    job.company === 'Kindertons Accident Management' ? '/kindertons' :
                    job.company === 'Gadgeon Smart Systems Inc (Client – KORE Wireless)' ? '/gadgeon' :
                    job.company === 'E-Team (Client - Wipro Ltd, Project – ICICI Bank)' ? '/eteam' :
                    '/cmots'
                  } className="block">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-gray-400 text-lg">{job.company}</p>
                        <p className="text-gray-500 text-sm mt-1">{job.location} • {job.period}</p>
                      </div>
                      <div className="text-gray-700 dark:text-gray-400 group-hover:text-blue-400 transition-colors text-2xl">
                        →
                      </div>
                    </div>
                    <div className="space-y-3">
                      {job.description.slice(0, 2).map((point, i) => (
                        <p key={i} className="text-gray-300 leading-relaxed">{point}</p>
                      ))}
                      <p className="text-black dark:text-blue-400 font-bold mt-4 group-hover:underline">
                        View full experience →
                      </p>
                    </div>
                  </Link>
                ) : (
                  <>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-black dark:text-[rgb(22,1,1)] mb-2">
                          {job.title}
                        </h3>
                        <p className="text-black dark:text-[rgb(6,12,22)] text-lg font-medium">{job.company}</p>
                        <p className="text-black dark:text-gray-500 text-sm mt-1 font-medium">{job.location} • {job.period}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {job.description.slice(0, 2).map((point, i) => (
                        <p key={i} className="text-black dark:text-[rgb(12,30,56)] leading-relaxed">{point}</p>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;