import React from 'react';
import './historylanding.css';
import content from '../../content.json';
import SMALLIMG from '../../assets/History/small.jpg'
import BIGIMG from '../../assets/History/big.jpg'

const HistoryLanding = () => {
  return (
    <div className='superContainer'>
      <div className='historyContainer'>
        <div className='leftPart'>
          <div className='textContainer'>
            <h1>{content.history.fr.title1}</h1>

            <div className='firstBlockText'>

              <p>{content.history.fr.text1}</p>
              <p>{content.history.fr.text2}</p>

            </div>
            <h2>{content.history.fr.title2}</h2>

            <div className='secondBlockText'>

              <p>{content.history.fr.text3}</p>
              <p>{content.history.fr.text4}</p>

            </div>
          </div>
          <img src={SMALLIMG} alt="Small" />

        </div>

        <div className='rightPart'>

        <img src={BIGIMG} alt="Big" />

        </div>
      </div>
    </div>
  );
};

export default HistoryLanding;
