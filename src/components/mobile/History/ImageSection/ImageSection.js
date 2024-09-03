import React from 'react';
import './imagesection.css';
import BIGIMAGE from '../../../../assets/History/mobile/big.jpg'
import content from '../../../../content.json';

const ImageSection = () => {
  return (
    <div className='historyImageSection'>
        <img src={BIGIMAGE} alt="" />
        <p>{content.history.fr.textmobile1}</p>
    </div>
  );
};

export default ImageSection;