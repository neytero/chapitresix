import React from 'react';
import './imagesection.css';
import BIGIMAGE from '../../../../assets/History/mobile/big.jpg'
import content from '../../../../content.json';

const ImageSection = () => {
  return (
    <div className='historyImageSection'>
      <div className='textContainer'> 
        <h2>{content.history.fr.title1}</h2>
        <p className='text'>{content.history.fr.text2}</p>        
      </div>
        
        <img src={BIGIMAGE} alt="" />
        <p className='title'>{content.history.fr.textmobile1}</p>
    </div>
  );
};

export default ImageSection;