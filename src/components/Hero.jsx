import { Download, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-darker to-slate-dark text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Haritha Layomin
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8">
          Final Year IT Student specializing in Infrastructure & Cloud
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn flex items-center justify-center gap-2">
            <Download size={20} />
            Download PDF Portfolio
          </button>
          <a
            href="https://linkedin.com/in/harithalayomin"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-transparent border border-azure-blue hover:bg-azure-blue flex items-center justify-center gap-2"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;