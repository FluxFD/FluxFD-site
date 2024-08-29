import React from 'react';

function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800">
      <img src="./title.png" alt="FluxFusion Logo" className="h-16" />

      <div className="flex space-x-8">
        <a href="#about" className="text-white hover:text-gray-400">About</a>
        <a href="#services" className="text-white hover:text-gray-400">Services</a>
        <a href="#technologies" className="text-white hover:text-gray-400">Technologies</a>
        <a href="#devs" className="text-white hover:text-gray-400">Devs</a>
      </div>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Contact Us
      </button>
    </nav>
  );
}

export default NavBar;
