import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { IoMdDocument, IoLogoCodepen, IoLogoGithub } from 'react-icons/io';

const links = () => {
  return (
    <div className="container max-w-4xl mx-auto">
      <ul className="grid grid-cols-2 gap-4 text-white md:grid-cols-4 ">
        {/* LinkedIn */}
        <a
          className="link"
          href="https://www.linkedin.com/in/jameshollos/"
          target="_blank"
        >
          <BsLinkedin />
          <span>LinkedIn</span>
        </a>
        {/* GitHub */}
        <a className="link" href="https://github.com/HollosJ" target="_blank">
          <IoLogoGithub />
          <span>Github</span>
        </a>
        <a className="link" href="https://codepen.io/HollosJ" target="_blank">
          <IoLogoCodepen />
          <span>Codepen</span>
        </a>
        <a
          className="link"
          href="https://drive.google.com/file/d/1025ja3ser6s5GgM5G2Btenl25hoAtggZ/view?usp=sharing"
          target="_blank"
        >
          <IoMdDocument />
          <span>CV</span>
        </a>
      </ul>
    </div>
  );
};

export default links;
