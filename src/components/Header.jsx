import React from 'react';

const Header = () => (
  <header className="bg-gray-800 shadow-md">
    <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Jay Prajapati</h1>
      <nav className="space-x-4">
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="#Skill" className="hover:text-blue-400">Skill</a>
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </nav>
    </div>
  </header>
);

export default Header;

