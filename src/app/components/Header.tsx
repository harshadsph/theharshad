// app/components/Header.tsx

'use client'; // To enable React hooks like useState

import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu state for mobile

  // Toggle menu function
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full z-10 bg-navy text-softgrey p-4">
      <div className="grid grid-cols-12 items-center gap-4">
        {/* Left side: Logo */}
        <div className="col-span-12 md:col-span-4">
          <h1 className="text-2xl font-bold text-left">
            Harshad Gillurkar
          </h1>
        </div>

        {/* Right side: Navigation on larger screens */}
        <div className="col-span-12 md:col-span-8 flex justify-end items-center space-x-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-lg hover:underline">Home</a>
            <a href="#about" className="text-lg hover:underline">About</a>
            <a href="#portfolio" className="text-lg hover:underline">Portfolio</a>
            <a href="#contact" className="text-lg hover:underline">Contact</a>
          </nav>

          {/* Hamburger Menu for small screens */}
          <button onClick={toggleMenu} className="md:hidden text-3xl">
            {isMenuOpen ? '✖' : '☰'} {/* Toggle between "Hamburger" and "Close" icon */}
          </button>
        </div>
      </div>

      {/* Mobile Navigation (hidden by default, shown when menu is open) */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#F4F4F4] flex flex-col items-center space-y-4 py-4">
          <a href="#home" className="text-lg hover:underline">Home</a>
          <a href="#about" className="text-lg hover:underline">About</a>
          <a href="#portfolio" className="text-lg hover:underline">Portfolio</a>
          <a href="#contact" className="text-lg hover:underline">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
