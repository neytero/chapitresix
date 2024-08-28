import React, { useState } from 'react';
import LANDINGVIDEO from '../../assets/Home/landing.jpg';
import LANDINGVIDEOMOBILE from '../../assets/Home/landingmobile.jpg';
import '../LandingDesktop/landing.css';
import VOLUMEON from '../../assets/VOLUME_ON.png';
import VOLUMEOFF from '../../assets/VOLUME_OFF.png';

const Landing = ({ content }) => {
  const [volumeOn, setVolumeOn] = useState(true);

  const toggleVolume = () => {
    setVolumeOn(!volumeOn);
  };

  return (
    <div className='container'>
      <img className='imgLandingDesktop' src={LANDINGVIDEO} alt="Landing Desktop" />
      <p className='citation'>“Comme à la maison, on regarde, on vit, on revient.”</p>
      <p className='subTitle'>Des hôtels et des histoires </p>
      <img className='imgLandingMobile' src={LANDINGVIDEOMOBILE} alt="Landing Mobile" />
      
      
      <div className='volume-controls' onClick={toggleVolume}>
        <img
          className='volume-icon'
          src={volumeOn ? VOLUMEON : VOLUMEOFF}
          alt={volumeOn ? 'Volume On' : 'Volume Off'}
        />
      </div>
    </div>
  );
};

export default Landing;
