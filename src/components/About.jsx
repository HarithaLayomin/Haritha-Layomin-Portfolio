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
            However, my passion for enterprise infrastructure led me to pivot towards Cloud Infrastructure and Enterprise IT.
            Currently, I serve as an Intern in Managed Infrastructure Services at MillenniumIT ESP, where I&apos;m gaining hands-on
            experience in managing critical enterprise systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;