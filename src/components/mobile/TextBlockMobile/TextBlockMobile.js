import React from 'react';
import '../TextBlockMobile/textblockmobile.css'
import SECTION2MOBILE from '../../../assets/Home/mobile/section2.jpg'
import content from '../../../content.json'
const TextBlockMobile = () => {
  return (
    <div className='container section2LandingMobile'>
        <div className='textContainer'>
            <p className='title' >{content.home.fr.textBlock.titremobile}</p>
            <p>{content.home.fr.textBlock.textmobile1}</p>
        </div>
        <img className='imgMobile' src={SECTION2MOBILE} alt="" />
      
    </div>
  );
};

export default TextBlockMobile;
