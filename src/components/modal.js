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
        className="relative flex flex-col w-full h-full px-2 py-4 overflow-y-auto bg-white cursor-default md:h-auto xl:w-5/12 2xl:4/12 lg:w-7/12 md:w-9/12 md:rounded-md"
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
        <h3 className="text-base font-black text-center md:text-lg">
          {project.name}
        </h3>

        {/* img */}
        <picture>
          <source srcSet={project.previews.webp} type="image/webp"></source>
          <source srcSet={project.previews.png} type="image/png"></source>
          <img
            width="200px"
            height="200px"
            className="w-40 mx-auto mt-4"
            src={project.previews.png}
            alt={project.name}
          />
        </picture>

        {/* text */}
        <div className="px-4 mt-4 text-sm md:text-lg">
          {project.inProgress && (
            <span className="block mb-2 font-black text-center">
              &#x1F6A7; WORK IN PROGRESS &#x1F6A7;
            </span>
          )}

          {/* description */}
          <p className="mx-auto text-sm md:max-w-md md:text-base">
            {project.description}
          </p>

          {/* technologies */}
          <span className="block mt-4 font-black text-center">
            Technologies used:
          </span>
          <ul className="flex flex-wrap justify-center">
            {project.tech.map((tech, key) => (
              <li className="label" key={key}>
                {tech}
              </li>
            ))}
          </ul>

          {/* features */}
          <span className="block mt-4 font-black text-center">Features:</span>
          <ul className="flex flex-wrap justify-center">
            {project.features.map((feature, key) => (
              <li className="label" key={key}>
                {feature}
              </li>
            ))}
          </ul>

          {/* buttons */}
          <div className="flex flex-col mt-4 text-center">
            <a
              className="p-2 transition border-2 border-black rounded-md focus:bg-black focus:text-white md:hover:bg-black md:hover:text-white"
              href={project.links.live}
              target="_blank"
            >
              Live Preview
            </a>
            <a
              className="p-2 mt-2 transition border-2 border-black rounded-md focus:bg-black focus:text-white md:hover:bg-black md:hover:text-white"
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
