import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Modal from './modal';

const Project = ({ project, tabIndex }) => {
  const [open, setOpen] = useState(false);

  console.log(project.previews);

  const openModal = () => {
    setOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      {/* MODAL */}
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {open && (
          <Modal project={project} open={open} handleClose={closeModal} />
        )}
      </AnimatePresence>

      {/* PREVIEW */}
      <div
        tabIndex={tabIndex}
        className="grid grid-cols-2 overflow-hidden text-white transition bg-black rounded-md lg:hover:scale-101 group md:hover:shadow-xl"
      >
        {/* left */}
        <div className="h-full overflow-hidden">
          <picture>
            <source srcSet={project.previews.webp} type="image/webp"></source>
            <source srcSet={project.previews.png} type="image/png"></source>
            <img
              className="relative transition md:group-hover:-rotate-2 md:group-hover:scale-105 md:grayscale group-hover:grayscale-0 z-1"
              src={project.previews.png}
              alt={project.name}
            />
          </picture>
        </div>
        {/* right */}
        <div className="flex flex-col justify-between p-2">
          {/* text */}
          <div className="">
            <h3 className="text-sm font-black leading-4 sm:text-lg md:text-base lg:text-lg">
              {project.name}
            </h3>
            <p className="mt-1 text-xs sm:text-base md:text-sm lg:text-base">
              {project.caption}
            </p>
          </div>
          {/* button */}
          <button
            className="self-end w-full px-2 py-1 transition-all rounded-sm focus:outline-jurple hover:outline-jurple outline md:text-sm lg:text-base outline-white outline-2"
            onClick={openModal}
          >
            See more
          </button>
        </div>
      </div>
    </>
  );
};

export default Project;
