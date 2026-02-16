import React from 'react';
import './Hero.css';
import videoSrc from '../assets/videos/8.mp4'; 

const Hero = () => {
  return (
    <section id="home" className="hero">
      <video autoPlay loop muted className="hero-video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1 className="hero-title">
          <span>MADHUBANTI</span>
        </h1>
        <div className="hero-badge">LIVE IN CONCERT</div>
        <p className="hero-subtitle">An Unforgettable Musical Journey</p>
        <p className="hero-description">13.9M+ Monthly Listeners • 983M+ YouTube Views</p>
        <a href="https://zoniq.in" target="_blank" rel="noopener noreferrer" className="hero-ticket-btn">
          <span>BOOK TICKETS</span>
        </a>
        <div className="hero-ticketing-partner">
            <a href="https://zoniq.in" target="_blank" rel="noopener noreferrer" className="zoniq-link">
              Get Your Tickets: <strong>zoniq.in</strong>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
