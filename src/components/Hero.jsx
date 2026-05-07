import { useState } from 'react';
import { Download, Linkedin, User } from 'lucide-react';

const Hero = () => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-darker to-slate-dark text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 w-40 h-40 rounded-full overflow-hidden border border-slate-700 bg-slate-800">
          {!imageFailed ? (
            <img
              src="/profile.png"
              alt="Haritha Layomin"
              className="w-full h-full object-cover"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-azure-blue bg-slate-900">
              <User size={48} />
            </div>
          )}
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Haritha Layomin
        </h1>
        <p className="text-lg sm:text-xl text-azure-blue font-semibold mb-2">
          Intern - Managed Infrastructure Services | Final Year BSc (Hons) in IT @ SLIIT
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/Portfolio.Haritha.pdf"
            download="portfolio_haritha.pdf"
            className="btn flex items-center justify-center gap-2"
          >
            <Download size={20} />
            Download PDF Portfolio
          </a>
          <a
            href="https://www.linkedin.com/in/haritha-layomin"
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