import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';

const Intro = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen max-h-screen">
      <div className="relative flex flex-col items-center group">
        <h1 className="relative text-3xl font-black text-center text-white md:text-5xl">
          James Hollos
        </h1>
        <h2 className="text-lg font-thin md:mt-2 md:text-3xl text-jrey">
          Front-end Developer
        </h2>
      </div>
      <a
        href="#about"
        className="absolute text-4xl transition-colors border-2 rounded-full text-jrey border-jrey hover:border-jurple focus:text-jurple focus:border-jurple hover:text-jurple bottom-6 animate-bounce"
      >
        <AiOutlineArrowDown />
      </a>
    </div>
  );
};

export default Intro;
