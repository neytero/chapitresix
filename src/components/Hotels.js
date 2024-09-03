import React from 'react';
import HotelsLanding from './HotelsLanding/HotelsLanding'

const Hotels = ({ content }) => {
  return (
    <div>
      <section className="landing-section section">
          <HotelsLanding content={content} />
        </section>
    </div>
  );
};

export default Hotels;
