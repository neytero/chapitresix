import React from 'react';
import './footer.css';
import content from '../../content.json' 
import NAVPIC1 from '../../assets/Footer/PHOTO1.jpg'
import NAVPIC2 from '../../assets/Footer/PHOTO2.jpg'
import NAVPIC3 from '../../assets/Footer/PHOTO3.jpg'
import NAVPIC4 from '../../assets/Footer/PHOTO4.jpg'

const Footer = ({ changeLanguage}) => {
  const getFooterImages = () => {
    const path = window.location.pathname;
    if (path.includes('history')) {
      return [NAVPIC3, NAVPIC4];
    } else {
      return [NAVPIC1, NAVPIC2];
    }
  };

  const images = getFooterImages();

  return (
    <div className='footerContainer'>
      <div className='imageContainer'>
        <img src={images[0]} alt="1" />
        <img src={images[1]} alt="2" />
      </div>
      <div className='footerContentContainer'>
        <div className='ligne1'>
          <p>{content.home.fr.footer.recrutement}</p>
          <div className='languefooter'>
            <button onClick={() => changeLanguage('fr')}>FR</button>
            <button onClick={() => changeLanguage('en')}>EN</button>
          </div>
          <p>{content.home.fr.footer.instagram}</p>
        </div>
        <div className='ligne2'>
           <p>{content.home.fr.footer.contact}</p>
          <p>{content.home.fr.footer.linkedin}</p>
        </div>
        <div className='ligne3'>
          <p>{content.home.fr.footer.mentions}</p>
          <div className='newsletter'>
            <p>{content.home.fr.footer.newsletter}</p>
            <input type="email" name="sub-email" placeholder=""></input>
            <p>{content.home.fr.footer.sub}</p>
          </div>
          <p>{content.home.fr.footer.facebook}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;