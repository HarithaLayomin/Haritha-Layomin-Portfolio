import { useInView } from '../hooks/useInView';

const Footer = () => {
  const [ref, inView] = useInView();
  const year = new Date().getFullYear();

  return (
    <footer className="section-light border-t border-theme py-12">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
      >
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-azure-blue to-azure-light flex items-center justify-center text-white font-black text-lg shadow-lg shadow-azure-blue/30 animate-glow-pulse">
            HL
          </div>
        </div>

        <h3 className="text-lg font-bold text-primary mb-1">Haritha Layomin</h3>
        <p className="text-sm text-muted mb-5">Colombo, Sri Lanka · Open to opportunities</p>

        {/* Social links */}
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="https://www.linkedin.com/in/haritha-layomin-warnakulasooriya"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-xl border border-theme hover:border-azure-blue hover:bg-azure-blue/8 transition-all duration-300 text-secondary hover:text-azure-blue text-sm font-medium"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 group-hover:scale-110 transition-transform">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="/HarithaCV_old.pdf"
            download="HarithaCV.pdf"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-azure-blue to-azure-light text-white text-sm font-medium hover:shadow-lg hover:shadow-azure-blue/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:scale-110 transition-transform">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </div>

        <div className="w-24 h-px bg-gradient-to-r from-transparent via-azure-blue/40 to-transparent mx-auto mb-4" />

        <p className="text-xs text-muted">
          © {year} Haritha Layomin · Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;