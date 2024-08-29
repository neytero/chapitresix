import React, { useState, useRef, useEffect } from 'react';
import LANDINGVIDEO from '../../assets/VIDEO_DESKTOP.mp4';
import LANDINGVIDEOMOBILE from '../../assets/VIDEO_MOBILE.mov';
import '../LandingDesktop/landing.css';
import VOLUMEON from '../../assets/VOLUME_ON.svg';
import VOLUMEOFF from '../../assets/VOLUME_OFF.svg';

const Landing = () => {
  const [volumeOn, setVolumeOn] = useState(false);
  const videoRefDesktop = useRef(null);
  const videoRefMobile = useRef(null);

  const toggleVolume = () => {
    setVolumeOn(prevVolumeOn => {
      const newVolumeOn = !prevVolumeOn;
      if (videoRefDesktop.current) {
        videoRefDesktop.current.muted = !newVolumeOn;
      }
      if (videoRefMobile.current) {
        videoRefMobile.current.muted = !newVolumeOn;
      }
      return newVolumeOn;
    });
  };

  useEffect(() => {
    const playVideo = async () => {
      if (videoRefDesktop.current) {
        try {
          await videoRefDesktop.current.play();
        } catch (error) {
          console.error('Failed to play desktop video', error);
        }
      }
      if (videoRefMobile.current) {
        try {
          await videoRefMobile.current.play();
        } catch (error) {
          console.error('Failed to play mobile video', error);
        }
      }
    };

    playVideo();
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