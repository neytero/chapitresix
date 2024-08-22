import React from 'react';
import LANDINGVIDEO from '../../assets/Home/landing.jpg';
import LANDINGVIDEOMOBILE from '../../assets/Home/landingmobile.jpg';
import '../LandingDesktop/landing.css';

const Landing = ({ content }) => {
 

  return (
    <div className='container'>
      <img className='imgLandingDesktop' src={LANDINGVIDEO} alt="Landing Desktop" />
      <img className='imgLandingMobile' src={LANDINGVIDEOMOBILE} alt="Landing Mobile" />
    </div>
  );
};

export default Landing;
