import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = ({ toggleTheme, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Roadmap', href: '#roadmap' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.4 }
    );
    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-darker/85 backdrop-blur-xl shadow-lg shadow-azure-blue/5 border-b border-slate-200/60 dark:border-slate-700/60'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-azure-blue to-azure-light flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-110 transition-transform duration-300">
              HL
            </span>
            <span className="text-lg font-bold text-primary hidden sm:block group-hover:text-azure-blue transition-colors duration-300">
              Haritha Layomin
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? 'text-azure-blue bg-azure-blue/10'
                    : 'text-secondary hover:text-azure-blue hover:bg-azure-blue/8'
                }`}
              >
                {item.name}
              </a>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-slate-100 dark:bg-slate-800 hover:bg-azure-blue hover:text-white text-secondary hover:scale-110 hover:shadow-md hover:shadow-azure-blue/30"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-secondary hover:bg-azure-blue hover:text-white transition-all duration-300"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-secondary hover:text-azure-blue transition-all duration-300"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ${
            isOpen ? 'max-h-80 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg border border-slate-200 dark:border-slate-700 p-2 space-y-1">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-medium text-secondary hover:text-azure-blue hover:bg-azure-blue/8 transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;