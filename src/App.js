import Intro from './components/intro';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';

function Portfolio() {
  return (
    <div className="relative overflow-hidden font-mono bg-jrey debug-screens selection:bg-jurple selection:text-white">
      <Intro />
      <hr className="max-w-md mx-auto md:max-w-4xl" />
      <About />
      <Skills />
      <hr className="max-w-md mx-auto md:max-w-4xl" />
      <Projects />
      <hr className="max-w-md mx-auto md:max-w-4xl" />
      <Contact />
      <Footer />
    </div>
  );
}

export default Portfolio;
