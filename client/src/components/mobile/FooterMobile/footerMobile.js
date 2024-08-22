import React from 'react';
import './footermobile.css';
import content from '../../../content.json' 
import NAVPIC1MOBILE from '../../../assets/Footer/Mobile/PHOTO1.jpg'


const FooterMobile = (changeLanguage) => {
 

    return (
        <div className='footerMobileBigContainer'>
            <div className='imageFooterMobileContainer'>
            <img className='imgFooterMobile' src={NAVPIC1MOBILE} alt="footer home" />
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
                    <p>{content.home.fr.footer.recrutement}</p>
                    <p>{content.home.fr.footer.instagram}</p>
                </div>

                <div className='ligne3'>
                    <p>{content.home.fr.footer.contact}</p>
                    <p>{content.home.fr.footer.linkedin}</p>
                </div>

                <div className='ligne4'>
                    <p>{content.home.fr.footer.mentions}</p>
                    <p>{content.home.fr.footer.facebook}</p>
                </div>
            </div>
        </div>
    );
  };
  
  export default FooterMobile;