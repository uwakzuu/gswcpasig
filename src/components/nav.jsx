import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-gray-800 text-white shadow-md z-10">
      {/* Icon on the left */}
      <div className="flex items-center">
        <img src="/path/to/icon.png" alt="Logo" className="h-8 w-8 mr-2" />
      </div>

      {/* Navigation links in the center */}
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
        <li><Link to="/contact" className="hover:text-gray-400">Contact Us</Link></li>
      </ul>

      {/* Get Started button on the right */}
      <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
        Get Started
      </button>
    </nav>
  );
}

export default Nav;