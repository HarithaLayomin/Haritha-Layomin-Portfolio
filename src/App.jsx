import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-darker">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;