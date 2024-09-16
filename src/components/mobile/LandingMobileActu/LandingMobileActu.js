import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import des styles Slick de base
import 'slick-carousel/slick/slick-theme.css'; // Import des styles Slick thème
import './landingmobileactu.css'; // Ton propre fichier de styles
import ACTU from '../../../assets/Actualites/mobile/ACTU.jpg';
import PL from '../../../assets/Actualites/mobile/CADET.jpg';
import CADET from '../../../assets/Actualites/mobile/PL.jpg';
import BABA from '../../../assets/Actualites/mobile/BABA.jpg';
import content from '../../../content.json';

// Flèche Gauche
const ArrowLeft = (props) => (
  <button className='slick-arrow slick-prev' {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
      <path d="M11 1L0.999999 8L6 11.5L11 15" stroke="black"/>
    </svg>
  </button>
);

// Flèche Droite
const ArrowRight = (props) => (
  <button className='slick-arrow slick-next' {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
      <path d="M1 15L11 8L6 4.5L0.999999 0.999999" stroke="black"/>
    </svg>
  </button>
);

const images = [
  { src: ACTU, textKey: 'presentationmobile' }, // Pour ACTU
  { src: CADET, textKey: 'actualite1' }, // Pour CADET
  { src: PL, textKey: 'actualite2' }, // Pour PL
  { src: BABA, textKey: 'actualite3' }  // Pour BABA
];

const LandingMobileActu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAfterChange = (index) => {
    setCurrentIndex(index);
  };

  const currentText = content.actualites.fr[images[currentIndex].textKey] || {};

  // Configuration du carrousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10%',
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '10%',
        },
      },
    ],
  };

  return (
    <div className='landingMobileActu'>
        <div className='mobileActuBigContainer'>
            <div className='slider-text'>
                <h1>{content.actualites.fr.bloctext.title}</h1>
                <h2>{currentText.titre}</h2>
                <p>{currentText.texte}</p>
                <p className='date'>{currentText.date}</p>
            </div>
            <Slider {...settings}>
                {images.map((image, index) => (
                <div key={index} className='slide-item'>
                    <img src={image.src} alt={`Slide ${index}`} />
                </div>
                ))}
            </Slider>
        </div>
    </div>
  );
};

export default LandingMobileActu;
