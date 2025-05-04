import React, { useEffect, useRef } from 'react';
import './Gallery.css';

const Gallery = () => {
    const images = Array.from({ length: 16 }, (_, i) => require(`../images/gallery/${i + 1}.jpg`));
    const sliderRef = useRef(null);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (!sliderRef.current) return;
  
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;
  
        if (scrollLeft >= maxScrollLeft) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }, 3000); // Slide every 3 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="gallery-slider-container">
        <h2 className="gallery-slider-title">Gallery</h2>
        <div className="gallery-slider" ref={sliderRef}>
          {images.map((src, index) => (
            <div key={index} className="slider-image-wrapper">
              <img src={src} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Gallery;
