import { useInView } from '../hooks/useInView';

const experiences = [
  {
    company: 'MillenniumIT ESP',
    roles: [
      {
        title: 'Intern - Managed Infrastructure Services | MillenniumIT ESP | (Service Desk Coordinator | BDO Project)',
        period: 'May 2026 – Present',
        current: true,
        responsibilities: [
          'Coordinated 24/7 technical support for critical systems by bridging the gap between clients and engineering teams',
          'Managed incidents and service requests through ServiceNow ticketing',
          'Assigned tickets to suitable support groups and coordinated escalations',
          'Communicated with clients and provided timely updates through ticketing system',
          'Facilitated the resolution of complex issues by collaborating with engineers and cross-functional teams',
        ],
      },
      {
        title: 'Intern | Digital Infrastructure',
        period: 'Nov 2025 – May 2026',
        current: false,
        responsibilities: [
          'Installed and configured printers and peripheral devices across the organization',
          'Set up and configured new laptops and desktops for end users',
          'Diagnosed and repaired hardware issues (RAM, SSDs, batteries, keyboards)',
          'Installed MS 365, SentinelOne, and FortiClient VPN on user systems',
          'Executed OS deployment using ManageEngine for efficient system provisioning',
          'Performed Active Directory tasks including password resets, account unlocks',
          'Resolved BitLocker encryption issues using recovery keys via ManageEngine',
        ],
      },
    ],
  },
  {
    company: 'Bank of Ceylon',
    roles: [
      {
        title: 'IT Support Intern | Technical Support',
        period: 'May 2025 – Nov 2025',
        current: false,
        responsibilities: [
          'Troubleshot and resolved system issues across branch IT systems',
          'Configured new PCs with IP assignment and domain joining',
          'Diagnosed and fixed hardware issues for printers, PCs, and peripherals',
          'Managed ITSM support portal to log, track, and resolve incidents',
          'Created and maintained user profiles, password resets, and account provisioning',
          'Provided remote and phone-based support to branches',
        ],
      },
    ],
  },
];

const ExperienceCard = ({ role, delay, inView }) => (
  <div
    className={`relative pl-6 border-l-2 border-azure-blue/30 transition-all duration-700 ${
      inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
    }`}
    style={{ transitionDelay: delay }}
  >
    {/* Dot on timeline */}
    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-azure-blue to-azure-light border-2 border-white dark:border-slate-darker shadow-md shadow-azure-blue/40" />
    {role.current && (
      <div className="absolute -left-[13px] top-[-3px] w-6 h-6 rounded-full bg-azure-blue/20 animate-ping-slow" />
    )}

    <div className="glass-card p-5 mb-4">
      <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
        <div>
          <h4 className="font-semibold text-primary text-sm leading-snug">{role.title}</h4>
          {role.current && (
            <span className="inline-flex items-center gap-1 mt-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Current
            </span>
          )}
        </div>
        <span className="text-xs text-muted bg-azure-blue/8 px-2.5 py-1 rounded-full font-medium whitespace-nowrap border border-azure-blue/15">
          {role.period}
        </span>
      </div>
      <ul className="space-y-1.5">
        {role.responsibilities.map((r, i) => (
          <li key={i} className="text-xs text-secondary leading-relaxed flex gap-2">
            <span className="text-azure-blue mt-1 flex-shrink-0">▸</span>
            {r}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience = () => {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className="section-light py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="icon-circle">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </div>
          <p className="section-subtitle">Where I've worked</p>
          <h2 className="section-title">Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-azure-blue to-azure-light rounded-full mx-auto" />
        </div>

        <div className="space-y-10">
          {experiences.map((exp, ei) => (
            <div key={ei}>
              <div
                className={`flex items-center gap-3 mb-5 transition-all duration-700 ${
                  inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${ei * 0.15}s` }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-azure-blue to-azure-light flex items-center justify-center shadow-md shadow-azure-blue/30 flex-shrink-0">
                  <span className="text-white font-bold text-xs">{exp.company.slice(0, 2).toUpperCase()}</span>
                </div>
                <h3 className="text-lg font-bold text-primary">{exp.company}</h3>
              </div>

              <div className="ml-5 space-y-0">
                {exp.roles.map((role, ri) => (
                  <ExperienceCard
                    key={ri}
                    role={role}
                    delay={`${0.2 + ei * 0.15 + ri * 0.15}s`}
                    inView={inView}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;