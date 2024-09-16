import React from 'react';
import { Link } from 'react-router-dom';
import './footermobile.css';
import content from '../../../content.json';
import NAVPIC1MOBILE from '../../../assets/Footer/Mobile/PHOTO1.jpg';
import NAVPIC2MOBILE from '../../../assets/Footer/Mobile/PHOTO2.jpg';
import NAVPIC3MOBILE from '../../../assets/Footer/Mobile/PHOTO3.jpg';
import NAVPIC4MOBILE from '../../../assets/Footer/Mobile/PHOTO4.jpg';


const FooterMobile = ({ changeLanguage, activeLanguage = 'fr' }) => {
  const getFooterImage = () => {
    const path = window.location.pathname;

    if (path.includes('nos-actualites')) {
      return NAVPIC3MOBILE;
    } else if (path.includes('les-hotels')) {
      return NAVPIC4MOBILE;
    } else if (path.includes('history')) {
      return NAVPIC2MOBILE;
    } else {
      return NAVPIC1MOBILE;
    }
  };

  const imageSrc = getFooterImage();

  return (
    <div className='footerMobileBigContainer'>
      <div className='imageFooterMobileContainer'>
        <img className='imgFooterMobile' src={imageSrc} alt="footer" />
      </div>
      <div className='contentFooterMobileContainer'>
        <div className='ligne1'>
          <p>{content.home.fr.footer.newsletter}</p>
          <div className='langueMobileFooter'>
            <button onClick={() => changeLanguage('fr')}>FR</button>
            <button onClick={() => changeLanguage('en')}>EN</button>
          </div>
        </div>

        <div className='ligne2'>
          <Link to="https://careers.werecruit.io/fr/chapitre-six">{content.home[activeLanguage].footer.recrutement}</Link>
          <Link to='https://www.instagram.com/chapitresix_hotels'>{content.home[activeLanguage].footer.instagram}</Link>
        </div>

        <div className='ligne3'>
          <Link to='mailto:contact@chapitresix.com'>{content.home[activeLanguage].footer.contact}</Link>
          <Link to='https://linkedin.com/company/chapitre-six-hotels'>{content.home[activeLanguage].footer.linkedin}</Link>
        </div>

        <div className='ligne4'>
          <p>{content.home.fr.footer.mentions}</p>
          <Link to='https://www.facebook.com/chapitresixhotels/'>{content.home[activeLanguage].footer.facebook}</Link>
        </div>
      </div>
    </div>
  );
};


export default FooterMobile;
