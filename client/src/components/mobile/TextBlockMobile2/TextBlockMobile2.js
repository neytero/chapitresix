import React from 'react';
import '../TextBlockMobile2/textblockmobile2.css'
import SECTION3MOBILE from '../../../assets/Home/mobile/section3.jpg'
import content from '../../../content.json'
const TextBlockMobile2 = () => {
  return (
    <div className='container section3LandingMobile'>
        <div className='textContainer'>
            {content && <p className='title' >{content.home.fr.textBlock.titremobile}</p>}
            <img className='imgMobile' src={SECTION3MOBILE} alt="" />
            {content && <p>{content.home.fr.textBlock.textmobile2}</p>}
        </div>
        
      
    </div>
  );
};

export default TextBlockMobile2;