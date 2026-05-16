import { useInView } from '../hooks/useInView';

const projects = [
  {
    title: 'AI-Powered Dyslexia Screening Tool',
    role: 'Member',
    description: 'Developed an AI-driven application for early dyslexia detection using machine learning algorithms and natural language processing.',
    tech: ['Python', 'TensorFlow', 'NLP', 'Machine Learning'],
    icon: '🧠',
    color: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Student Portal',
    role: 'Developer',
    description: 'Built a comprehensive student management system with user authentication, course enrollment, and grade tracking features.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    icon: '🎓',
    color: 'from-azure-blue to-azure-light',
  },
  {
    title: 'Gem Management System',
    role: 'Developer',
    description: 'Created a Laravel-based system for managing gemstone inventory, sales tracking, and supplier relationships.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    icon: '💎',
    color: 'from-emerald-500 to-teal-500',
  },
];

const ProjectCard = ({ project, delay, inView }) => (
  <div
    className={`glass-card project-card flex flex-col h-full transition-all duration-700 overflow-hidden ${
      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}
    style={{ transitionDelay: delay }}
  >
    {/* Top gradient strip */}
    <div className={`h-1.5 w-full bg-gradient-to-r ${project.color}`} />

    <div className="p-6 flex flex-col flex-1">
      {/* Icon + title */}
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl flex-shrink-0 shadow-md`}>
          {project.icon}
        </div>
        <div>
          <h3 className="font-bold text-primary leading-snug">{project.title}</h3>
          <span className="text-xs text-azure-blue font-medium">{project.role}</span>
        </div>
      </div>

      <p className="text-secondary text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t, i) => (
          <span key={i} className="tech-badge">{t}</span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [ref, inView] = useInView();

  return (
    <section id="projects" className="section-alt py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="icon-circle">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <p className="section-subtitle">What I've built</p>
          <h2 className="section-title">Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-azure-blue to-azure-light rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              project={p}
              delay={`${0.1 + i * 0.15}s`}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;