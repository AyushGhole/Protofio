// src/components/Header.jsx

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">AYUSH GHOLE</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-indigo-600">
            Home
          </a>
          <a href="#about" className="hover:text-indigo-600">
            About
          </a>
          <a href="#projects" className="hover:text-indigo-600">
            Projects
          </a>
          <a href="#skills" className="hover:text-indigo-600">
            Skills
          </a>
          <a href="#experience" className="hover:text-indigo-600">
            Experience
          </a>
          <a href="#contact" className="hover:text-indigo-600">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow px-4 pb-4 space-y-2">
          <a
            href="#home"
            className="block hover:text-indigo-600"
            onClick={closeMenu}>
            Home
          </a>
          <a
            href="#about"
            className="block hover:text-indigo-600"
            onClick={closeMenu}>
            About
          </a>
          <a
            href="#projects"
            className="block hover:text-indigo-600"
            onClick={closeMenu}>
            Projects
          </a>
          <a
            href="#skills"
            className="block hover:text-indigo-600"
            onClick={closeMenu}>
            Skills
          </a>
          <a
            href="#experience"
            className="block hover:text-indigo-600"
            onClick={closeMenu}>
            Experience
          </a>
          <a
            href="#contact"
            className="block hover:text-indigo-600"
            onClick={closeMenu}>
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
