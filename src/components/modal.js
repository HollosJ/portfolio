import React from 'react';
import { motion } from 'framer-motion';
import Backdrop from './backdrop';
import { FaRegWindowClose } from 'react-icons/fa';

const dropIn = {
  hidden: { opacity: 0, y: '-100vh' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      type: 'spring',
    },
  },
  exit: { opacity: 0, y: '100vh' },
};

const modal = ({ handleClose, project }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative grid content-start w-full h-full max-w-4xl gap-4 p-4 overflow-y-auto text-center bg-white cursor-default md:h-auto justify-items-center md:rounded-md"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button
          onClick={handleClose}
          className="absolute p-1 text-2xl transition rounded-sm cursor-pointer top-1 right-1 hover:outline hover:outline-jurple hover:outline-2 hover:bg-black hover:text-white"
        >
          <FaRegWindowClose onClick={handleClose} />
        </button>
        <h3 className="text-base font-black md:text-lg">{project.name}</h3>

        {/* img */}
        <picture>
          <source srcSet={project.previews.webp} type="image/webp"></source>
          <source srcSet={project.previews.png} type="image/png"></source>
          <img
            width="200px"
            height="200px"
            className="w-40"
            src={project.previews.png}
            alt={project.name}
          />
        </picture>

        {/* text */}
        <div className="grid gap-4 text-sm md:text-lg">
          {project.inProgress && (
            <span className="block font-black">
              &#x1F6A7; WORK IN PROGRESS &#x1F6A7;
            </span>
          )}

          {/* description */}
          <p className="text-sm md:text-base">{project.description}</p>

          {/* technologies */}
          <div>
            <span className="block font-black">Technologies used:</span>
            <ul className="flex flex-wrap justify-center gap-2">
              {project.tech.map((tech, key) => (
                <li className="label" key={key}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* features */}
          <div>
            <span className="block font-black">Features:</span>
            <ul className="flex flex-wrap justify-center gap-2">
              {project.features.map((feature, key) => (
                <li className="label" key={key}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* buttons */}
          <div className="grid gap-2">
            <a
              className="button button--outline-black"
              href={project.links.live}
              target="_blank"
            >
              Live Preview
            </a>
            <a
              className="button button--outline-black"
              href={project.links.code}
              target="_blank"
            >
              My Code
            </a>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default modal;
