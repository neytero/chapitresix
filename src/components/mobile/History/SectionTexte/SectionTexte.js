import React from 'react';
import './sectiontexte.css';
import SMALLIMG from '../../../../assets/History/mobile/small.jpg'
import content from '../../../../content.json';

const SectionTexte = () => {
  return (
    <div className='historySectionTexte'>
        <div className='textContainer'>
        <h1>{content.history.fr.title2}</h1>
        <p>{content.history.fr.textmobile2}</p>
        <p>{content.history.fr.textmobile3}</p>
        </div>
        <div className='imgContainer'>
            <img src={SMALLIMG} alt="" />
        </div>
    </div>
  );
};

export default SectionTexte;