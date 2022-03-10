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
        className="flex p-1 text-white transition bg-black rounded-md lg:hover:scale-101 group md:hover:shadow-xl"
      >
        {/* left */}
        <div className="w-5/12 h-full ">
          <img
            className="relative transition rounded-sm md:group-hover:-rotate-2 md:group-hover:scale-101 md:grayscale group-hover:grayscale-0 object-fit z-1"
            src={project.preview}
            alt={`${project.name} preview`}
          />
        </div>
        {/* right */}
        <div className="flex flex-col items-start justify-between w-7/12 pb-1 pl-2 pr-1">
          {/* text */}
          <div>
            <h3 className="font-black md:text-sm lg:text-base">
              {project.name}
            </h3>
            <p className="text-ellipsis md:text-sm lg:text-base">
              {project.caption}
            </p>
          </div>
          {/* button */}
          <button
            className="w-full px-2 py-1 transition-all rounded-sm focus:outline-jurple hover:outline-jurple outline md:text-sm lg:text-base outline-white outline-2"
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
