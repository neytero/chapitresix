import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../HotelList2/hotellist2.css'; // Assurez-vous que ce fichier est après les importations slick-carousel
import { Link } from 'react-router-dom';
import content from '../../../content.json';

// Importation des images
import PICTURE1 from '../../../assets/Home/mobile/caroussel/PHOTO1.jpg';
import PICTURE2 from '../../../assets/Home/mobile/caroussel/PHOTO2.jpg';
import PICTURE3 from '../../../assets/Home/mobile/caroussel/PHOTO3.jpg';
import PICTURE4 from '../../../assets/Home/mobile/caroussel/PHOTO4.jpg';
import PICTURE5 from '../../../assets/Home/mobile/caroussel/PHOTO5.jpg';
import PICTURE6 from '../../../assets/Home/mobile/caroussel/PHOTO6.jpg';
import PICTURE7 from '../../../assets/Home/mobile/caroussel/PHOTO7.jpg';
import PICTURE8 from '../../../assets/Home/mobile/caroussel/PHOTO8.jpg';
import PICTURE9 from '../../../assets/Home/mobile/caroussel/PHOTO9.jpg';
import PICTURE10 from '../../../assets/Home/mobile/caroussel/PHOTO10.jpg';
import PICTURE11 from '../../../assets/Home/mobile/caroussel/PHOTO11.jpg';

const images = [
  PICTURE1,
  PICTURE2,
  PICTURE3,
  PICTURE4,
  PICTURE5,
  PICTURE6,
  PICTURE7,
  PICTURE8,
  PICTURE9,
  PICTURE10,
  PICTURE11
];

const HotelList2 = () => {
  const [isCarouselVisible, setCarouselVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (isCarouselVisible && sliderRef.current) {
      const timer = setTimeout(() => {
        sliderRef.current.slickGoTo(currentSlide);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isCarouselVisible, currentSlide]);

  const handleOpenCarousel = (index) => {
    setCurrentSlide(index);
    setCarouselVisible(true);
  };

  const handleCloseCarousel = () => {
    setCarouselVisible(false);
  };

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button className={className} onClick={onClick} style={{ ...arrowStyle, left: '10px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
          <path d="M11 1L0.999999 8L6 11.5L11 15" stroke="#FEFAF1"/>
        </svg>
      </button>
    );
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button className={className} onClick={onClick} style={{ ...arrowStyle, right: '10px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
          <path d="M1 15L11 8L6 4.5L0.999999 0.999999" stroke="#FEFAF1"/>
        </svg>
      </button>
    );
  };

  const arrowStyle = {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    zIndex: 10
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    ref: sliderRef
  };

  return (
    <div className='container hotelListSection2'>
      <p className='subTitleHotelList2'>Les 4 étoiles</p>
      <div className='hotelListContainer2'>
        <Link to="/" onClick={() => handleOpenCarousel(6)}>MAISON SAINTONGE, PARIS 3</Link>
        <Link to="/" onClick={() => handleOpenCarousel(7)}>HÔTEL DES Académies et des Arts, PARIS 6</Link>
        <Link to="/" onClick={() => handleOpenCarousel(8)}>MONSIEUR CADET, PARIS 9</Link>
        <Link to="/" onClick={() => handleOpenCarousel(9)}>MONSIEUR ARISTIDE, PARIS 18</Link>
        <div className='smallHotelListContainer2'>
          <Link to="/" onClick={() => handleOpenCarousel(10)}>LA FOLIE Barbizon, BARBIZON</Link>
          <p>{content.home.fr.other.wait}</p>
        </div>
      </div>
      {isCarouselVisible && (
        <div className='carouselOverlay'>
          <div className='carouselContainer'>
            <button className='closeButton' onClick={handleCloseCarousel}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <Slider {...settings} className='carouselSlider' ref={sliderRef}>
              {images.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={`Carousel ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelList2;
