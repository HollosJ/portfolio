import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Modal from './modal';

const Project = ({ project, tabIndex }) => {
  const [open, setOpen] = useState(false);

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
        className="flex overflow-hidden text-white transition bg-black rounded-md outline-hidden lg:hover:scale-101 group md:hover:shadow-xl"
      >
        {/* left */}
        <div className="overflow-hidden">
          <picture className="">
            <source srcSet={project.previews.webp} type="image/webp"></source>
            <source srcSet={project.previews.png} type="image/png"></source>
            <img
              className="object-cover w-36 sm:w-48 aspect-square"
              src={project.previews.png}
              alt={project.name}
            />
          </picture>
        </div>
        {/* right */}
        <div className="grid flex-1 p-2">
          {/* text */}
          <div className="grid content-start gap-2">
            <h3 className="text-sm font-black leading-4 sm:text-lg md:text-base lg:text-lg">
              {project.name}
            </h3>
            <p className="text-xs sm:text-base md:text-sm lg:text-base">
              {project.caption}
            </p>
          </div>
          {/* button */}
          <button
            className="self-end button button--purple button--outline-white"
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
