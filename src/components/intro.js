import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Particles from 'react-tsparticles';

const Intro = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen max-h-screen">
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: '#eee',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'repulse',
              },
              onHover: {
                enable: true,
                mode: 'bubble',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 1,
                size: 30,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#7000ff',
            },
            links: {
              color: '#7000ff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1200,
              },
              value: 40,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      );
      <div className="relative flex flex-col items-center group">
        <h1 className="relative text-3xl font-black text-center md:text-5xl">
          James Hollos
        </h1>
        <h2 className="text-lg font-thin md:mt-2 md:text-3xl text-jurple">
          Front-end Developer
        </h2>
      </div>
      <a
        href="#about"
        className="absolute text-4xl transition-colors border-2 border-black rounded-full hover:border-jurple focus:text-jurple focus:border-jurple hover:text-jurple bottom-6 animate-bounce"
      >
        <AiOutlineArrowDown />
      </a>
    </div>
  );
};

export default Intro;
