import React from 'react';
import './Footer.css';
import ViviktaLogo from './ViviktaLogo';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">MADHUBANTI</h1>
          <p>
            Experience an unforgettable musical journey with MADHUBANTI live in concert.
            Join us for a night of premium music, aesthetic vibes, and romantic melodies.
          </p>
          <div className="ticketing-partner">
            <div className="ticketing-partner-header">
              <i className="fas fa-ticket-alt"></i>
              <span>Buy Tickets From</span>
            </div>
            <a href="https://zoniq.in" target="_blank" rel="noopener noreferrer" className="zoniq-promo-link">
              <strong>zoniq.in</strong>
              <i className="fas fa-external-link-alt"></i>
            </a>
            <p className="ticketing-description">Secure your spot for this exclusive musical experience</p>
          </div>
          <div className="socials">
            <a href="#home"><i className="fab fa-instagram"></i></a>
            <a href="#home"><i className="fab fa-spotify"></i></a>
            <a href="#home"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#events">Events</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#home">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-section contact-info">
          <h2>Contact</h2>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:yashwantajeet@zoniq.in">yashwantajeet@zoniq.in</a>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <a href="tel:8104559589">8104559589</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-event-by">
          <span className="footer-event-label">EVENT BY</span>
          <div className="footer-vivikta-branding">
            <ViviktaLogo size={80} />
            <span className="footer-vivikta-text">VIVIKTA ENTERTAINERS PVT. LTD.</span>
          </div>
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} MADHUBANTI Live Concert | Tickets available on <a href="https://zoniq.in" target="_blank" rel="noopener noreferrer">zoniq.in</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
