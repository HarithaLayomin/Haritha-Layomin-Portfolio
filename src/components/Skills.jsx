import { Shield, Code2 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Infrastructure',
      icon: Shield,
      skills: [
        'Active Directory',
        'Windows Server',
        'Networking',
        'Cloud Computing',
        'System Administration'
      ]
    },
    {
      category: 'Development',
      icon: Code2,
      skills: [
        'MERN Stack',
        'PHP/Laravel',
        'Python',
        'JavaScript',
        'React'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-darker text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Shield className="mx-auto mb-4 text-azure-blue" size={48} />
          <h2 className="text-3xl font-bold">Skills Matrix</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, index) => (
            <div key={index} className="bg-slate-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <cat.icon className="text-azure-blue mr-3" size={24} />
                <h3 className="text-xl font-semibold">{cat.category}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {cat.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-slate-700 rounded px-3 py-2 text-center text-sm">
                    {skill}
                  </div>
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