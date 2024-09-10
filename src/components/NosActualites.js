import React, { useState, useEffect } from 'react';
import ActualityLanding from './ActualityLanding/ActualityLanding';
import LandingMobileActu from './mobile/LandingMobileActu/LandingMobileActu';

const Actualites = ({ content }) => {
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
          <ActualityLanding content={content} />
        ) : (
          <LandingMobileActu content={content} />
        )}
      </section>
    </div>
  );
};

export default Actualites;
