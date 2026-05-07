import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <User className="mx-auto mb-4 text-azure-blue" size={48} />
          <h2 className="text-3xl font-bold">About Me</h2>
        </div>
        <div className="prose prose-lg prose-invert mx-auto">
          <p className="text-gray-300 leading-relaxed">
            I began my journey in software development, working extensively with MERN stack and Laravel frameworks.
            Over time, I shifted focus toward Enterprise Infrastructure and Cloud services because I wanted to build reliable,
            scalable systems from the ground up.
          </p>
          <p className="text-gray-300 leading-relaxed">
            I previously served as an Intern in the Digital Infrastructure department at MillenniumIT ESP from November 2025 to May 2026.
            Today, I work as a Helpdesk Analyst on the BDO project (Australia) in the Managed Infrastructure Services department,
            supporting enterprise operations and delivering fast technical support across critical systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;