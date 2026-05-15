import { useInView } from '../hooks/useInView';

const skillCategories = [
  {
    category: 'Infrastructure & Support',
    emoji: '🖥️',
    color: 'from-azure-blue to-azure-light',
    skills: [
      'Active Directory',
      'ManageEngine',
      'ServiceNow / SummitAI / ITSM Suppport Portal',
      'BitLocker & Endpoint Security',
      'OS Deployment',
      'Hardware Troubleshooting',
      'Printer & Peripheral Support',
      'User Management',
      'Ticketing & Incident Management',
      
    ],
  },
  {
    category: 'Cloud & Networking',
    emoji: '☁️',
    color: 'from-sky-500 to-cyan-500',
    skills: [
      'Microsoft Azure (Learning)',
      'AZ-900 (Planned 2026)',
      'TCP/IP & DNS',
      'Domain Management',
      'Remote Desktop Support',
      'ITSM Processes',
    ],
  },
  {
    category: 'Development',
    emoji: '💻',
    color: 'from-violet-500 to-purple-600',
    skills: [
      'MERN Stack',
      'PHP / Laravel',
      'Python',
      'React',
      'JavaScript',
      'MySQL',
    ],
  },
];

const SkillBadge = ({ skill, delay, inView }) => (
  <div
    className={`skill-badge transition-all duration-500 ${
      inView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
    }`}
    style={{ transitionDelay: delay }}
  >
    {skill}
  </div>
);

const Skills = () => {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="section-light py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="icon-circle">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <p className="section-subtitle">What I know</p>
          <h2 className="section-title">Skills Matrix</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-azure-blue to-azure-light rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <div
              key={ci}
              className={`glass-card p-6 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${ci * 0.15}s` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-xl shadow-md`}>
                  {cat.emoji}
                </div>
                <h3 className="font-bold text-primary text-sm leading-tight">{cat.category}</h3>
              </div>

              {/* Skill badges */}
              <div className="grid grid-cols-2 gap-2">
                {cat.skills.map((skill, si) => (
                  <SkillBadge
                    key={si}
                    skill={skill}
                    delay={`${ci * 0.15 + si * 0.06}s`}
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

export default Skills;