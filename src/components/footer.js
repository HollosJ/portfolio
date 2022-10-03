import React from 'react';

const Footer = () => {
  return (
    <div className="container px-4 py-2 mx-auto text-center text-white rounded-lg bg-jurple">
      Copyright © {new Date().getFullYear()} James Hollos. All rights reserved.
    </div>
  );
};

export default Footer;
