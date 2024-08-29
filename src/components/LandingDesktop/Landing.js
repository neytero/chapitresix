import React, { useState, useRef, useEffect } from 'react';
import LANDINGVIDEO from '../../assets/VIDEO_DESKTOP.mp4';
import LANDINGVIDEOMOBILE from '../../assets/VIDEO_MOBILE.mov';
import '../LandingDesktop/landing.css';
import VOLUMEON from '../../assets/VOLUME_ON.png';
import VOLUMEOFF from '../../assets/VOLUME_OFF.png';

const Landing = ({ content }) => {
  const [volumeOn, setVolumeOn] = useState(false);
  const videoRefDesktop = useRef(null);
  const videoRefMobile = useRef(null);

  const toggleVolume = () => {
    if (videoRefDesktop.current) {
      videoRefDesktop.current.muted = !volumeOn;
    }
    if (videoRefMobile.current) {
      videoRefMobile.current.muted = !volumeOn;
    }
    setVolumeOn(!volumeOn);
  };

  useEffect(() => {
    const videoElementDesktop = videoRefDesktop.current;
    const videoElementMobile = videoRefMobile.current;

    if (videoElementDesktop) {
      videoElementDesktop.muted = !volumeOn;
      videoElementDesktop.play().catch(error => {
      });
    }

    if (videoElementMobile) {
      videoElementMobile.muted = !volumeOn;
      videoElementMobile.play().catch(error => {
      });
    }
  }, [volumeOn]);

  useEffect(() => {
    const videoElementDesktop = videoRefDesktop.current;
    const videoElementMobile = videoRefMobile.current;

    if (videoElementDesktop) {
      videoElementDesktop.muted = true;
      videoElementDesktop.play().catch(error => {
      });
    }

    if (videoElementMobile) {
      videoElementMobile.muted = true;
      videoElementMobile.play().catch(error => {
      });
    }
  }, []);

  return (
    <div className='container'>
      <video
        className='imgLandingDesktop'
        src={LANDINGVIDEO}
        autoPlay
        loop
        muted={!volumeOn}
        ref={videoRefDesktop}
        playsInline
        controls={false}
        preload="auto"
      >
        Votre navigateur ne supporte pas la balise vidéo.
      </video>
      <p className='subTitle'>Des hôtels et des histoires</p>
      <video
        className='imgLandingMobile'
        src={LANDINGVIDEOMOBILE}
        autoPlay
        loop
        muted={!volumeOn}
        ref={videoRefMobile}
        playsInline
        controls={false}
        preload="auto"
      >
        Votre navigateur ne supporte pas la balise vidéo.
      </video>

      <p className='citation'>“Comme à la maison, on regarde, on vit, on revient.”</p>
      
      
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
