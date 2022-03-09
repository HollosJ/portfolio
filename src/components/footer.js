import React from 'react';

const Footer = () => {
  return (
    <div className="w-screen mt-4 bg-black">
      <div className="container px-4 py-2 mx-auto text-center text-white">
        Copyright © {new Date().getFullYear()} James Hollos. All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
