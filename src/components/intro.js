import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';

const Intro = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen max-h-screen">
      <div className="relative group">
        <h1 className="relative text-3xl font-black text-center bg-jrey md:text-5xl">
          James Hollos
        </h1>
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
