import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-emerald-400 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Aghary. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

