import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8 mt-11">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <p className="text-center text-sm">&copy; 2024 OKWY-TECH. All rights reserved.</p>
        <div className="flex items-center mt-4">
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Terms of Service
          </a>
          <span className="text-gray-400">•</span>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Privacy Policy
          </a>
          <span className="text-gray-400">•</span>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
