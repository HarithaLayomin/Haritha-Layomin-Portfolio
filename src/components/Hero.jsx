import { useState, useEffect, useMemo } from 'react';
import { Download, Linkedin, User, ChevronDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const DESCRIPTION = 'Passionate about cloud and infrastructure: designing, deploying, and managing systems that are scalable, reliable, and built for the real world.';

const Hero = () => {
  const [imageFailed, setImageFailed] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [typedText, setTypedText] = useState('');

  // Typewriter effect
  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const id = setInterval(() => {
      if (i < DESCRIPTION.length) {
        setTypedText(DESCRIPTION.slice(0, i + 1));
        i++;
      } else {
        clearInterval(id);
      }
    }, 22);
    return () => clearInterval(id);
  }, [inView]);

  // Stable random particles
  const particles = useMemo(() =>
    Array.from({ length: 22 }, (_, i) => ({
      id: i,
      width: `${4 + (i * 3.7) % 8}px`,
      height: `${4 + (i * 3.7) % 8}px`,
      left: `${(i * 17.3) % 100}%`,
      top: `${(i * 13.7) % 100}%`,
      animationDelay: `${(i * 0.55) % 7}s`,
      animationDuration: `${8 + (i * 1.3) % 9}s`,
      opacity: 0.2 + (i % 4) * 0.08,
    })), []
  );

  return (
    <section
      ref={ref}
      className="hero-bg relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay" />

      {/* Floating particles */}
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.width, height: p.height,
            left: p.left, top: p.top,
            opacity: p.opacity,
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
          }}
        />
      ))}

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10 pt-24">

        {/* Profile image */}
        <div
          className={`profile-ring mx-auto mb-8 w-40 h-40 rounded-full overflow-hidden transition-all duration-1000 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
        >
          {!imageFailed ? (
            <img
              src="/profile.png"
              alt="Haritha Layomin"
              className="w-full h-full object-cover"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-azure-blue bg-slate-900 dark:bg-slate-900">
              <User size={48} />
            </div>
          )}
        </div>

        {/* Name */}
        <h1
          className={`text-5xl sm:text-7xl font-black mb-4 gradient-text transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          style={{ transitionDelay: '0.2s' }}
        >
          Haritha Layomin
        </h1>

        {/* Title */}
        <p
          className={`text-base sm:text-lg text-azure-blue font-semibold mb-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          style={{ transitionDelay: '0.35s' }}
        >
          Intern · Managed Infrastructure Services &nbsp;|&nbsp; Final Year BSc (Hons) IT @ SLIIT
        </p>

        {/* Typewriter description */}
        <p
          className={`text-base sm:text-lg text-secondary max-w-2xl mx-auto leading-relaxed mb-10 min-h-[3rem] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          style={{ transitionDelay: '0.5s' }}
        >
          {typedText}
          <span className="cursor-blink ml-0.5">|</span>
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          style={{ transitionDelay: '0.65s' }}
        >
          <a
            href="/Portfolio_Haritha.pdf"
            download="Portfolio.Haritha.pdf"
            className="btn-primary flex items-center justify-center gap-2"
          >
            <Download size={20} />
            Download PDF Portfolio
          </a>
          <a
            href="https://www.linkedin.com/in/haritha-layomin-warnakulasooriya"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center justify-center gap-2"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-16 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'
            }`}
          style={{ transitionDelay: '1s' }}
        >
          <a href="#about" className="inline-block animate-bounce-slow">
            <ChevronDown className="mx-auto text-azure-blue/60 hover:text-azure-blue transition-colors" size={34} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;