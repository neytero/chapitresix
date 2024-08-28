import React, { useState } from 'react';
import '../TextBlock/textblock.css';
import content from '../../content.json';

import LEFTCAROUSSEL1 from '../../assets/Home/caroussel/left/PHOTO1.jpg';
import LEFTCAROUSSEL2 from '../../assets/Home/caroussel/left/PHOTO2.jpg';
import LEFTCAROUSSEL3 from '../../assets/Home/caroussel/left/PHOTO3.jpg';
import LEFTCAROUSSEL4 from '../../assets/Home/caroussel/left/PHOTO4.jpg';
import LEFTCAROUSSEL5 from '../../assets/Home/caroussel/left/PHOTO5.jpg';
import LEFTCAROUSSEL6 from '../../assets/Home/caroussel/left/PHOTO6.jpg';
import LEFTCAROUSSEL7 from '../../assets/Home/caroussel/left/PHOTO7.jpg';
import LEFTCAROUSSEL8 from '../../assets/Home/caroussel/left/PHOTO8.jpg';
import LEFTCAROUSSEL9 from '../../assets/Home/caroussel/left/PHOTO9.jpg';
import LEFTCAROUSSEL10 from '../../assets/Home/caroussel/left/PHOTO10.jpg';
import LEFTCAROUSSEL11 from '../../assets/Home/caroussel/left/PHOTO11.jpg';
import LEFTCAROUSSEL12 from '../../assets/Home/caroussel/left/PHOTO12.jpg';
import LEFTCAROUSSEL13 from '../../assets/Home/caroussel/left/PHOTO13.jpg';
import LEFTCAROUSSEL14 from '../../assets/Home/caroussel/left/PHOTO14.jpg';
import LEFTCAROUSSEL15 from '../../assets/Home/caroussel/left/PHOTO15.jpg';
import LEFTCAROUSSEL16 from '../../assets/Home/caroussel/left/PHOTO16.jpg';

import RIGHTCAROUSSEL1 from '../../assets/Home/caroussel/right/FAT1.jpg';
import RIGHTCAROUSSEL2 from '../../assets/Home/caroussel/right/FAT2.jpg';
import RIGHTCAROUSSEL3 from '../../assets/Home/caroussel/right/FAT3.jpg';
import RIGHTCAROUSSEL4 from '../../assets/Home/caroussel/right/FAT4.jpg';
import RIGHTCAROUSSEL5 from '../../assets/Home/caroussel/right/FAT5.jpg';
import RIGHTCAROUSSEL6 from '../../assets/Home/caroussel/right/FAT6.jpg';
import RIGHTCAROUSSEL7 from '../../assets/Home/caroussel/right/FAT7.jpg';
import RIGHTCAROUSSEL8 from '../../assets/Home/caroussel/right/FAT8.jpg';
import RIGHTCAROUSSEL9 from '../../assets/Home/caroussel/right/FAT9.jpg';
import RIGHTCAROUSSEL10 from '../../assets/Home/caroussel/right/FAT10.jpg';
import RIGHTCAROUSSEL11 from '../../assets/Home/caroussel/right/FAT11.jpg';
import RIGHTCAROUSSEL12 from '../../assets/Home/caroussel/right/FAT12.jpg';
import RIGHTCAROUSSEL13 from '../../assets/Home/caroussel/right/FAT13.jpg';
import RIGHTCAROUSSEL14 from '../../assets/Home/caroussel/right/FAT14.jpg';
import RIGHTCAROUSSEL15 from '../../assets/Home/caroussel/right/FAT15.jpg';
import RIGHTCAROUSSEL16 from '../../assets/Home/caroussel/right/FAT16.jpg';

const images = [
  LEFTCAROUSSEL1, LEFTCAROUSSEL2, LEFTCAROUSSEL3, LEFTCAROUSSEL4,
  LEFTCAROUSSEL5, LEFTCAROUSSEL6, LEFTCAROUSSEL7, LEFTCAROUSSEL8,
  LEFTCAROUSSEL9, LEFTCAROUSSEL10, LEFTCAROUSSEL11, LEFTCAROUSSEL12,
  LEFTCAROUSSEL13, LEFTCAROUSSEL14, LEFTCAROUSSEL15, LEFTCAROUSSEL16,
];

const images2 = [
  RIGHTCAROUSSEL1, RIGHTCAROUSSEL2, RIGHTCAROUSSEL3, RIGHTCAROUSSEL4,
  RIGHTCAROUSSEL5, RIGHTCAROUSSEL6, RIGHTCAROUSSEL7, RIGHTCAROUSSEL8,
  RIGHTCAROUSSEL9, RIGHTCAROUSSEL10, RIGHTCAROUSSEL11, RIGHTCAROUSSEL12,
  RIGHTCAROUSSEL13, RIGHTCAROUSSEL14, RIGHTCAROUSSEL15, RIGHTCAROUSSEL16,
];

const hotelAddresses = [
  "Hôtel La Ponche, Saint-Tropez",
  "Hôtel des Académies et des Arts, Paris 6",
  "Hôtel La Ponche, Saint-Tropez",
  "Cap d’Antibes Beach Hotel, Cap d’Antibes",
  "Hôtel des Académies et des Arts, Paris 6",
  "Hôtel Hana, Paris 2",
  "Monsieur Aristide, Paris 18",
  "Monsieur Cadet, Paris 9",
  "Monsieur George, Paris 8",
  "Maison Saintonge, Paris 3",
  "Hôtel La Ponche, Saint-Tropez",
  "Monsieur George, Paris 8 ",
  "Cap d’Antibes Beach Hotel, Cap d’Antibes ",
  "Hôtel Hana, Paris 2",
  "Monsieur Aristide, Paris 18",
  "Monsieur Cadet, Paris 9",
];

const TextBlock = ({ transitionDuration = 500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleContainerClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="text-block">
      <div className='bigContainerTextblock' onClick={handleContainerClick}>
        <div className="containerTextblock">
          <h2>{content.home.fr.textBlock.title}</h2>
          <p>{content.home.fr.textBlock.text1}</p>
          <p>{content.home.fr.textBlock.text2}</p>
          <p>{content.home.fr.textBlock.text3}</p>
        </div>
        <div className='fixButton'>
          <div className='buttonCarousel'>
            <p>Cliquer pour voyager</p>
          </div>
          <div className="carousel">
            {images.map((image, index) => {
              const position = (index - currentIndex + images.length) % images.length;
              const isVisible = position < 5;
              return (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className={`carousel-image position-${position}`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transitionDuration: `${transitionDuration}ms`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="carousselSecond">
        {images2.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={`second-carousel-image ${index === currentIndex ? 'visible' : ''}`}
            style={{
              opacity: index === currentIndex ? 1 : 0,
              transition: `opacity ${transitionDuration}ms ease-in-out`,
            }}
          />
        ))}
        <p className='trip'>Voyager</p>
        <p className='adressesHotels'>{hotelAddresses[currentIndex]}</p>
      </div>
    </div>
  );
};

export default TextBlock;
