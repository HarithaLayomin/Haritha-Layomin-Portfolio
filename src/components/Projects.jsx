import { Code, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Dyslexia Screening Tool',
      role: 'Research Lead',
      description: 'Developed an AI-driven application for early dyslexia detection using machine learning algorithms and natural language processing.',
      tech: ['Python', 'TensorFlow', 'NLP']
    },
    {
      title: 'Student Portal',
      role: 'Full Stack Developer',
      description: 'Built a comprehensive student management system with user authentication, course enrollment, and grade tracking features.',
      tech: ['MERN Stack', 'MongoDB', 'Express.js', 'React', 'Node.js']
    },
    {
      title: 'Gem Management System',
      role: 'Backend Developer',
      description: 'Created a Laravel-based system for managing gemstone inventory, sales tracking, and supplier relationships.',
      tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Code className="mx-auto mb-4 text-azure-blue" size={48} />
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
              <h3 className="text-xl font-semibold text-azure-blue mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-3">{project.role}</p>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-slate-700 text-xs px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <button className="text-azure-blue hover:text-white transition-colors flex items-center gap-1">
                <ExternalLink size={16} />
                View Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;