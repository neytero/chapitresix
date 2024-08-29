import React, { useState, useRef, useEffect } from 'react';
import LANDINGVIDEO from '../../assets/VIDEO_DESKTOP.mp4';
import LANDINGVIDEOMOBILE from '../../assets/VIDEO_MOBILE.mov';
import '../LandingDesktop/landing.css';
import VOLUMEON from '../../assets/VOLUME_ON.png';
import VOLUMEOFF from '../../assets/VOLUME_OFF.png';

const Landing = ({ content }) => {
  const [volumeOn, setVolumeOn] = useState(false); // Commence avec le volume désactivé
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
        console.error('Desktop video playback error:', error);
      });
    }

    if (videoElementMobile) {
      videoElementMobile.muted = !volumeOn;
      videoElementMobile.play().catch(error => {
        console.error('Mobile video playback error:', error);
      });
    }
  }, [volumeOn]); // Dépendance sur le volume

  useEffect(() => {
    const videoElementDesktop = videoRefDesktop.current;
    const videoElementMobile = videoRefMobile.current;

    if (videoElementDesktop) {
      videoElementDesktop.muted = true; // Assurez-vous que la vidéo est muette au démarrage
      videoElementDesktop.play().catch(error => {
        console.error('Desktop video playback error on load:', error);
      });
    }

    if (videoElementMobile) {
      videoElementMobile.muted = true; // Assurez-vous que la vidéo est muette au démarrage
      videoElementMobile.play().catch(error => {
        console.error('Mobile video playback error on load:', error);
      });
    }
  }, []); // Dépendance vide pour s'exécuter uniquement lors du premier montage

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
        onCanPlay={() => console.log('Desktop Video can play')}
        onPlay={() => console.log('Desktop Video started playing')}
        onError={(e) => console.error('Desktop Video error:', e)}
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
        onCanPlay={() => console.log('Mobile Video can play')}
        onPlay={() => console.log('Mobile Video started playing')}
        onError={(e) => console.error('Mobile Video error:', e)}
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
