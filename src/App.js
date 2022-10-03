import Waves from './img/waves.svg';

import Intro from './components/intro';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Links from './components/links';
import Footer from './components/footer';
import './App.css';

function Portfolio() {
  return (
    <div
      className={`${
        process.env.NODE_ENV === 'development' && 'debug-screens'
      } relative overflow-hidden font-mono bg-jrey selection:bg-jurple selection:text-white`}
    >
      <img
        className="fixed top-0 left-0 z-0 object-cover w-full h-full min-w-full min-h-full"
        src={Waves}
        alt="waves-backdrop"
      />

      <Intro />

      <div className="container relative z-10 grid max-w-4xl gap-8 p-4 mx-auto">
        <hr className="border-jurple" />

        <About />

        <Skills />

        <hr className="border-jurple" />

        <Projects />
      </div>

      <div className="relative mt-4 bg-jurple-dark">
        <div className="container grid max-w-4xl gap-4 p-4 pt-8 mx-auto">
          <Contact />

          <Links />

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
