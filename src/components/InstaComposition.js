import React, { useState, useEffect } from 'react';
import './InstaComposition.css';
import { useFadeIn } from './useFadeIn';
import img1 from '../assets/ip/2 (1).jpeg';
import img2 from '../assets/ip/2 (2).jpeg';
import img3 from '../assets/ip/2 (3).jpeg';
import img4 from '../assets/ip/2 (4).jpeg';
import spotlight1 from '../assets/pics_candid/1 (21).jpg';
import spotlight2 from '../assets/pics_candid/1 (22).jpg';
import spotlight3 from '../assets/pics_candid/1 (23).jpg';
import spotlight4 from '../assets/pics_candid/1 (24).jpg';
import spotlight5 from '../assets/pics_candid/1 (25).jpg';


const InstaComposition = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSpotlightIndex, setCurrentSpotlightIndex] = useState(0);
  const [ref, isVisible] = useFadeIn();

  const images = [
    img1,
    img2,
    img3,
    img4,
  ];

  const spotlightImages = [
    spotlight1,
    spotlight2,
    spotlight3,
    spotlight4,
    spotlight5,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const spotlightInterval = setInterval(() => {
      setCurrentSpotlightIndex((prevIndex) => (prevIndex + 1) % spotlightImages.length);
    }, 3000); // Change spotlight image every 3 seconds

    return () => clearInterval(spotlightInterval);
  }, [spotlightImages.length]);

  return (
    <section ref={ref} className={`insta-composition ${isVisible ? 'is-visible' : ''}`}>
      <div className="switcher">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Instagram promotion ${index + 1}`}
            className={index === activeIndex ? 'active' : ''}
          />
        ))}
      </div>

      <div className="artist-spotlight">
        {spotlightImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt="Featured Artist"
            className={`artist-image ${index === currentSpotlightIndex ? 'active' : ''}`}
          />
        ))}
        <div className="artist-info">
          <h2 className="artist-title">Featured Artist</h2>
          <p className="artist-name">MADHUBANTI</p>
        </div>
      </div>
    </section>
  );
};

export default InstaComposition;
