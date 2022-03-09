import { motion } from 'framer-motion';
import React from 'react';

const backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className="z-10 fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black/[.75] opacity-50 cursor-pointer"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default backdrop;
