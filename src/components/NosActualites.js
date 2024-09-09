import React from 'react';
import ActualityLanding from './ActualityLanding/ActualityLanding'

const Actualites = ({ content }) => {
  return (
    <div>
      <section className="landing-section section">
        <ActualityLanding content={content} />
        </section>
    </div>
  );
};

export default Actualites;
