import React, { useState, useEffect } from 'react';
import Landing from './LandingDesktop/Landing';
import TextBlock from './TextBlock/TextBlock';
import TextBlockMobile from './mobile/TextBlockMobile/TextBlockMobile';
import TextBlockMobile2 from './mobile/TextBlockMobile2/TextBlockMobile2';
import HotelList from './mobile/HotelList/HotelList';
import HotelList2 from './mobile/HotelList2/HotelList2';

const HomePage = ({ content }) => {
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

  const homeContent = content?.home || {};
  const { landing = {}, textBlock = {}, other = {} } = homeContent;

  return (
    <div>
      {landing && (
        <section className="landing-section section">
          <Landing content={landing} />
        </section>
      )}
      {textBlock && (
        <>
          {windowWidth > 1024 ? (
            <section className="section">
              <TextBlock />
            </section>
          ) : (
            <>
              <section className="section">
                <TextBlockMobile content={textBlock} />
              </section>
              <section className="section">
                <TextBlockMobile2 content={textBlock} />
              </section>
            </>
          )}
        </>
      )}
      {windowWidth <= 1024 && other && (
        <>
          <section className="section">
            <HotelList content={other} />
          </section>
          <section className="section">
            <HotelList2 content={other} />
          </section>
        </>
      )}
    </div>
  );
};

export default HomePage;
