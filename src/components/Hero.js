import React from 'react';
import './Hero.css';
import candid1 from '../assets/pics_candid/1 (1).JPG';
import candid2 from '../assets/pics_candid/1 (2).JPG';
import candid3 from '../assets/pics_candid/1 (3).JPG';
import candid4 from '../assets/pics_candid/1 (4).JPG';
import candid5 from '../assets/pics_candid/1 (5).JPG';
import candid6 from '../assets/pics_candid/1 (6).jpg';
import candid7 from '../assets/pics_candid/1 (7).jpg';
import candid8 from '../assets/pics_candid/1 (8).jpg';
import candid9 from '../assets/pics_candid/1 (9).jpg';
import candid10 from '../assets/pics_candid/1 (10).jpg';
import candid11 from '../assets/pics_candid/1 (11).JPG';
import candid12 from '../assets/pics_candid/1 (12).JPG';

const Hero = () => {
  const images = [
    candid1, candid2, candid3, candid4, candid5, candid6,
    candid7, candid8, candid9, candid10, candid11, candid12
  ];

  // Fisher-Yates shuffle
  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
  }

  return (
    <section id="home" className="hero">
      <div className="hero-collage">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Collage image ${index + 1}`} />
        ))}
      </div>
      <div className="hero-content">
        <div className="hero-badge">LIVE CONCERT</div>
        <h1 className="hero-title">
          <span>MADHUBANTI</span>
          <span className="hero-title-blur">MADHUBANTI</span>
        </h1>
        <p className="hero-subtitle">An Unforgettable Musical Journey</p>
        <p className="hero-description">13.9M+ Monthly Listeners • 983M+ YouTube Views</p>
        <a href="https://zoniq.in" target="_blank" rel="noopener noreferrer" className="hero-ticket-btn">
          <span>BOOK TICKETS</span>
          <i className="fas fa-arrow-right"></i>
        </a>
        <div className="hero-ticketing-partner">
          <div className="ticketing-badge">
            <i className="fas fa-ticket-alt"></i>
            <span>Get Your Tickets Now</span>
          </div>
          <div className="ticketing-link">
            <span>Powered by</span>
            <a href="https://zoniq.in" target="_blank" rel="noopener noreferrer" className="zoniq-link">
              <strong>zoniq.in</strong>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;