import React, { useState, useEffect } from 'react';
import HistoryLanding from './HistoryLanding/HistoryLanding';
import Landing from './mobile/History/Landing/Landing';
import ImageSection from './mobile/History/ImageSection/ImageSection';
import SectionTexte from './mobile/History/SectionTexte/SectionTexte'

const HistoryPage = ({ content }) => {
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
      <section className="section">
        {windowWidth > 1024 ? (
          <HistoryLanding content={content} />
        ) : (
          <Landing content={content} />
        )}
      </section>

      {windowWidth <= 1024 && (
        <>
          <section className="section">
            <ImageSection content={content} />
          </section>

          <section className="section">
            <SectionTexte content={content} />
          </section>
        </>
      )}
    </div>
  );
};

export default HistoryPage;
