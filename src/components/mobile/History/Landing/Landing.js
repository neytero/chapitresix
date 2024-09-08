import React from 'react';
import './landing.css';
import content from '../../../../content.json';
import GIF from '../../../../assets/History/mobile/gif.gif'

const HistoryLanding = () => {
  return (
    <div className='historyLandingMobile'>
        <h1>{content.history.fr.title1}</h1>
        <p>{content.history.fr.text1}</p>

        <img src={GIF} alt="Description du GIF" className='historyLandingGif' />
    </div>
  );
};

export default HistoryLanding;