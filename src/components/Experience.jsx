import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'MillenniumIT ESP',
      roles: [
        {
          title: 'Intern - Digital Infrastructure',
          period: 'Nov 2025 - May 2026',
          responsibilities: [
            'Installed and configured printers and peripheral devices across the organization',
            'Set up and configured new laptops and desktops for end users',
            'Diagnosed and repaired hardware issues for RAM, SSDs, batteries, keyboards, and other internal parts',
            'Installed and configured MS 365, SentinelOne, and FortiClient VPN on user systems',
            'Executed OS deployment using ManageEngine for efficient system provisioning',
            'Performed Active Directory tasks including password resets, account unlocks, and cleanup of duplicate/inactive computer objects',
            'Resolved BitLocker encryption issues using recovery keys through ManageEngine',
            'Provided remote technical support and managed incidents through SummitAI ticketing',
            'Maintained and updated IT asset records using ManageEngine'
          ]
        },
        {
          title: 'Helpdesk Analyst - Managed Infrastructure Services (BDO Project, Australia)',
          period: 'May 2026 - Present',
          responsibilities: [
            'Provided desktop and remote support for end users on the BDO Australia project',
            'Provided 24/7 technical support for critical systems and applications, ensuring minimal downtime and disruption to business operations',
            'Managed incidents and service requests through ServiceNow ticketing',
            'Assigned tickets to suitable support groups and coordinated escalations',
            'Communicated with clients through the ticketing system and provided timely updates',
            'Collaborated with engineers and cross-functional teams to resolve issues efficiently',
            'Maintained documentation of support processes and solutions for knowledge sharing',
          ]
        }
      ]
    },
    {
      company: 'Bank of Ceylon',
      roles: [
        {
          title: 'IT Support Intern',
          period: 'May 2025 - Nov 2025',
          responsibilities: [
            'Troubleshot and resolved system issues across branch IT systems to ensure smooth daily operations',
            'Configured new PCs with IP assignment and joined devices to the bank domain',
            'Diagnosed and fixed hardware issues for printers, PCs, and peripheral devices',
            'Managed ITSM support portal to log, track, and resolve incidents and service requests',
            'Installed and configured required software applications on user PCs',
            'Created and maintained user profiles, including password resets, unlocking accounts, and provisioning temporary admin access',
            'Provided remote and phone-based support to branches, identifying issues and delivering effective solutions',
            'Collaborated with teams to maintain IT infrastructure reliability and enhance system performance'
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