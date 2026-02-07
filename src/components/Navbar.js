import React, { useState, useEffect } from 'react';
import './Navbar.css';
import zoniqLogo from '../assets/zoniq.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">
        <a href="/">
          <img src={zoniqLogo} alt="Zoniq" className="zoniq-logo-img" />
        </a>
      </div>
      <div className={`nav-items ${isOpen && 'open'}`}>
        <a href="#home">Home</a>
        <a href="#stats">Stats</a>
        <a href="#gallery">Gallery</a>
        <a href="https://zoniq.in" target="_blank" rel="noopener noreferrer">Tickets</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && 'open'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
