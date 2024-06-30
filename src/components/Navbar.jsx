import React, { useState } from 'react';
import './navbar.css';
import menuIcon from '../assets/images/menu.png'; // Adjust path as per your folder structure

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <h1>Alex Kamau</h1>
      <p className="p">(Bsc Computer science. Pwani University)</p>

      <div className="menu-icon" onClick={toggleMenu}>
        <img src={menuIcon} alt="Menu" />
      </div>

      <ul className={`navigation ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
