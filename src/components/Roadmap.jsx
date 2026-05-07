import { useInView } from '../hooks/useInView';

const milestones = [
  {
    year: '2026',
    certification: 'AZ-900',
    fullName: 'Microsoft Azure Fundamentals',
    status: 'upcoming',
    icon: '☁️',
    color: 'from-azure-blue to-azure-light',
  },
  {
    year: '2027',
    certification: 'AZ-104',
    fullName: 'Microsoft Azure Administrator Associate',
    status: 'planned',
    icon: '⚙️',
    color: 'from-sky-500 to-cyan-500',
  },
  {
    year: '2028',
    certification: 'CCNA',
    fullName: 'Cisco Certified Network Associate',
    status: 'planned',
    icon: '🌐',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    year: '2029',
    certification: 'AZ-305',
    fullName: 'Microsoft Azure Solutions Architect Expert',
    status: 'planned',
    icon: '🏆',
    color: 'from-violet-500 to-purple-600',
  },
];

const Roadmap = () => {
  const [ref, inView] = useInView();

  return (
    <section id="roadmap" className="section-alt py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="icon-circle">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <p className="section-subtitle">Where I'm headed</p>
          <h2 className="section-title">Certification Roadmap</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-azure-blue to-azure-light rounded-full mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className={`absolute left-6 top-0 w-0.5 bg-gradient-to-b from-azure-blue via-azure-light to-violet-400 rounded-full transition-all duration-1500 ${
              inView ? 'h-full opacity-100' : 'h-0 opacity-0'
            }`}
            style={{ transitionDelay: '0.3s' }}
          />

          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-5 transition-all duration-700 ${
                  inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                }`}
                style={{ transitionDelay: `${0.35 + i * 0.15}s` }}
              >
                {/* Dot / icon */}
                <div className="relative flex-shrink-0 z-10">
                  {i === 0 && (
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${m.color} opacity-30 animate-ping-slow`} />
                  )}
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${m.color} flex items-center justify-center text-xl shadow-lg`}>
                    {m.icon}
                  </div>
                </div>

                {/* Card */}
                <div className="glass-card p-5 flex-1 group">
                  <div className="flex flex-wrap justify-between items-center gap-2 mb-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full bg-gradient-to-r ${m.color} text-white`}>
                        {m.year}
                      </span>
                      <span className="font-bold text-primary">{m.certification}</span>
                    </div>
                    {i === 0 ? (
                      <span className="text-xs text-amber-600 dark:text-amber-400 font-medium bg-amber-50 dark:bg-amber-900/20 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
                        🎯 Next Target
                      </span>
                    ) : (
                      <span className="text-xs text-muted font-medium">Planned</span>
                    )}
                  </div>
                  <p className="text-secondary text-sm">{m.fullName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;