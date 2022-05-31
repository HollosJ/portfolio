import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { IoMdDocument, IoLogoCodepen, IoLogoGithub } from 'react-icons/io';

const links = () => {
  return (
    <div className="p-4 mx-auto mt-8 bg-black">
      <div className="container max-w-4xl mx-auto">
        <ul className="flex flex-wrap text-4xl text-white justify-evenly">
          {/* LinkedIn */}
          <a
            className="flex flex-col items-center p-2 text-2xl transition rounded-sm focus:text-jurple hover:text-jurple hover:outline-jurple hover:outline hover:outline-2 focus:outline-jurple focus:outline focus:outline-2"
            href="https://www.linkedin.com/in/jameshollos/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
            <span className="mt-2 text-xs text-center md:text-base ">
              LinkedIn
            </span>
          </a>
          {/* GitHub */}
          <a
            className="flex flex-col items-center p-2 text-2xl transition rounded-sm focus:text-jurple hover:text-jurple hover:outline-jurple hover:outline hover:outline-2 focus:outline-jurple focus:outline focus:outline-2"
            href="https://github.com/HollosJ"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoGithub />
            <span className="mt-2 text-xs text-center md:text-base ">
              Github
            </span>
          </a>
          <a
            className="flex flex-col items-center p-2 text-2xl transition rounded-sm focus:text-jurple hover:text-jurple hover:outline-jurple hover:outline hover:outline-2 focus:outline-jurple focus:outline focus:outline-2"
            href="https://codepen.io/HollosJ"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoCodepen />
            <span className="mt-2 text-xs text-center md:text-base ">
              Codepen
            </span>
          </a>
          <a
            className="flex flex-col items-center p-2 text-2xl transition rounded-sm focus:text-jurple hover:text-jurple hover:outline-jurple hover:outline hover:outline-2 focus:outline-jurple focus:outline focus:outline-2"
            href="https://drive.google.com/file/d/1025ja3ser6s5GgM5G2Btenl25hoAtggZ/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <IoMdDocument />
            <span className="mt-2 text-xs text-center md:text-base ">CV</span>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default links;
