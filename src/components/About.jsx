import { useInView } from '../hooks/useInView';

const About = () => {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="section-alt py-24">
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
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <p className="section-subtitle">Get to know me</p>
          <h2 className="section-title">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-azure-blue to-azure-light rounded-full mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div
            className={`glass-card p-7 transition-all duration-700 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <h3 className="text-azure-blue font-semibold text-sm uppercase tracking-wider mb-3">My Journey</h3>
            <p className="text-secondary leading-relaxed text-sm">
              I began my journey in software development, working extensively with the MERN stack and Laravel
              frameworks. Over time, I shifted focus toward Enterprise Infrastructure and Cloud services
              because I wanted to build reliable, scalable systems from the ground up.
            </p>
          </div>

          <div
            className={`glass-card p-7 transition-all duration-700 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '0.35s' }}
          >
            <h3 className="text-azure-blue font-semibold text-sm uppercase tracking-wider mb-3">Where I Work</h3>
            <p className="text-secondary leading-relaxed text-sm">
              I previously interned in the Digital Infrastructure department at MillenniumIT ESP. Today,
              I work as a Service Desk Coordinator on the BDO project in Managed Infrastructure Services,
              coordinating technical incidents via ServiceNow and collaborating with engineers to ensure
              seamless operations across critical systems.
            </p>
          </div>

          {/* Stats row */}
          {[
            { value: '2+', label: 'Years Experience' },
            { value: '3', label: 'Companies' },
            { value: '4', label: 'Certifications Planned' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`glass-card p-6 text-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${i === 0 ? 'md:col-span-2' : ''}`}
              style={{ transitionDelay: `${0.5 + i * 0.1}s` }}
            >
              <div className="grid grid-cols-3 gap-4 md:gap-8">
                {[
                  { value: '1+', label: 'Years Experience' },
                  { value: '2', label: 'Companies' },
                  { value: '4', label: 'Certifications Planned' },
                ].map(s => (
                  <div key={s.label}>
                    <div className="text-3xl font-black gradient-text mb-1">{s.value}</div>
                    <div className="text-xs text-muted font-medium uppercase tracking-wide">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )).slice(0, 1)}
        </div>
      </div>
    </section>
  );
};

export default About;