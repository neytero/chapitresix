import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import content from '../../content.json';
import NAVPIC1 from '../../assets/Footer/PHOTO1.jpg';
import NAVPIC2 from '../../assets/Footer/PHOTO2.jpg';
import NAVPIC3 from '../../assets/Footer/PHOTO3.jpg';
import NAVPIC4 from '../../assets/Footer/PHOTO4.jpg';
import NAVPIC5 from '../../assets/Footer/PHOTO5.jpg';
import NAVPIC6 from '../../assets/Footer/PHOTO6.jpg';
import NAVPIC7 from '../../assets/Footer/PHOTO7.jpg';
import NAVPIC8 from '../../assets/Footer/PHOTO8.jpg';


const Footer = ({ changeLanguage }) => {
  const [activeLanguage, setActiveLanguage] = useState('fr'); // État pour la langue active

  const getFooterImages = () => {
    const path = window.location.pathname;

    if (path.includes('nos-actualites')) {
      return [NAVPIC5, NAVPIC6];
    } else if (path.includes('les-hotels')) {
      return [NAVPIC7, NAVPIC8];
    } else if (path.includes('history')) {
      return [NAVPIC3, NAVPIC4];
    } else {
      return [NAVPIC1, NAVPIC2];
    }
  };

  const images = getFooterImages();

  const handleLanguageChange = (lang) => {
    setActiveLanguage(lang);
    changeLanguage(lang);
  };

  return (
    <div className='footerContainer'>
      <div className='imageContainer'>
        <img src={images[0]} alt=" 1" />
        <img src={images[1]} alt=" 2" />
      </div>
      <div className='footerContentContainer'>
        <div className='ligne1'>
          <Link to="https://careers.werecruit.io/fr/chapitre-six">{content.home[activeLanguage].footer.recrutement}</Link>
          <div className='languefooter'>
            <button 
              onClick={() => handleLanguageChange('fr')} 
              className={activeLanguage === 'fr' ? 'active' : ''}
            >
              FR
            </button>
            <button 
              onClick={() => handleLanguageChange('en')} 
              className={activeLanguage === 'en' ? 'active' : ''}
            >
              EN
            </button>
          </div>
          <Link to='https://www.instagram.com/chapitresix_hotels'>{content.home[activeLanguage].footer.instagram}</Link>
        </div>
        <div className='ligne2'>
          <Link to='mailto:contact@chapitresix.com'>{content.home[activeLanguage].footer.contact}</Link>
          <Link to='https://linkedin.com/company/chapitre-six-hotels'>{content.home[activeLanguage].footer.linkedin}</Link>
        </div>
        <div className='ligne3'>
          <p>{content.home[activeLanguage].footer.mentions}</p>
          <div className='newsletter'>
            <p>{content.home[activeLanguage].footer.newsletter}</p>
            <input type="email" name="sub-email" placeholder="" />
            <p>{content.home[activeLanguage].footer.sub}</p>
          </div>
          <Link to='https://www.facebook.com/chapitresixhotels/'>{content.home[activeLanguage].footer.facebook}</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
