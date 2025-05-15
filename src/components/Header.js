import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="logo">
        <h1>Study Abroad</h1>
      </div>

      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#about" onClick={closeMenu}>About Us</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
