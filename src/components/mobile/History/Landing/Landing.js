import React from 'react';
import './landing.css';
import content from '../../../../content.json';

const HistoryLanding = () => {
  return (
    <div className='historyLandingMobile'>
        <h1>{content.history.fr.title1}</h1>
        <p>{content.history.fr.text1}</p>
    </div>
  );
};

export default HistoryLanding;