import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Left Section: Company Info and Social Media Links */}
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-xl font-bold">Your Company</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Section: Blank */}
        <div className="flex-grow"></div>
      </div>

      {/* Copyright Information */}
      <div className="text-center mt-8">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;