import React from 'react';
import './ImageStrip.css';
import { useFadeIn } from './useFadeIn';
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
import candid13 from '../assets/pics_candid/1 (13).JPG';
import candid14 from '../assets/pics_candid/1 (14).JPG';
import candid15 from '../assets/pics_candid/1 (15).JPG';
import candid16 from '../assets/pics_candid/1 (16).JPG';
import candid17 from '../assets/pics_candid/1 (17).JPG';
import candid18 from '../assets/pics_candid/1 (18).JPG';
import candid19 from '../assets/pics_candid/1 (19).JPG';
import candid20 from '../assets/pics_candid/1 (20).JPG';

const ImageStrip = () => {
  const [ref, isVisible] = useFadeIn();
  const images = [
    candid1, candid2, candid3, candid4, candid5, candid6,
    candid7, candid8, candid9, candid10, candid11, candid12,
    candid13, candid14, candid15, candid16, candid17, candid18,
    candid19, candid20
  ];

  // Fisher-Yates shuffle
  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
  }

  return (
    <section id="gallery" ref={ref} className={`kinetic-strip ${isVisible ? 'is-visible' : ''}`}>
      <div className="strip">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Strip ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default ImageStrip;
