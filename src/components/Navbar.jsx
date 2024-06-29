import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Alex Kamau   </h1>    
        <p className='p'>
        </p>

      <p className='p'>(Bsc Computer science. Pwani University)</p>

      <ul className="navigation">

        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
