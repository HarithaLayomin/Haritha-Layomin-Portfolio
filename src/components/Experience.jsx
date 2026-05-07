import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'MillenniumIT ESP',
      roles: [
        {
          title: 'Intern - Digital Infrastructure',
          period: '2024 - Present',
          responsibilities: [
            'Managed Active Directory environments and user authentication systems',
            'Implemented Role-Based Access Control (RBAC) workflows',
            'Supported Windows Server administration and maintenance'
          ]
        },
        {
          title: 'Intern - Managed Services',
          period: '2024 - Present',
          responsibilities: [
            'Monitored and maintained enterprise infrastructure systems',
            'Assisted in network configuration and security implementations',
            'Participated in incident response and system troubleshooting'
          ]
        }
      ]
    },
    {
      company: 'Bank of Ceylon',
      roles: [
        {
          title: 'IT Support Intern',
          period: '2023 - 2024',
          responsibilities: [
            'Provided technical support for banking software systems',
            'Assisted in hardware maintenance and software deployment',
            'Contributed to IT infrastructure documentation'
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-darker text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Briefcase className="mx-auto mb-4 text-azure-blue" size={48} />
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-azure-blue mb-4">{exp.company}</h3>
              {exp.roles.map((role, roleIndex) => (
                <div key={roleIndex} className="mb-4 last:mb-0">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-medium">{role.title}</h4>
                    <span className="text-gray-400 text-sm">{role.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {role.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;