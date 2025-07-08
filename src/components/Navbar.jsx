import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img src="/Airtel.png" alt="Airtel" className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900">Airtel Intelligence</span>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;