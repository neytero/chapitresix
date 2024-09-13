import React, { useState, useEffect } from 'react';
import HotelsLanding from './HotelsLanding/HotelsLanding';
import MobileLandingHotels from './mobile/MobileLandingHotels/MobileLandingHotels'; // Assure-toi que le chemin est correct

const Hotels = ({ content }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <section className="landing-section section">
        {windowWidth > 1024 ? (
          <HotelsLanding content={content} />
        ) : (
          <MobileLandingHotels content={content}/>
        )}
      </section>
    </div>
  );
};

export default Hotels;
