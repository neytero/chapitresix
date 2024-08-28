import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../HotelList/hotellist.css'; // Assurez-vous que ce fichier est après les importations slick-carousel
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

const hotelNames = [
  "HÔtel Hana",
  "MONSIEUR GEORGE",
  "LE BUS PALLADIUM",
  "HÔTEL LA PONCHE",
  "CAP D’ANTIBES BEACH HOTEL",
  "CHALET SAINT-GEORGES",
  "MAISON SAINTONGE",
  "HÔTEL DES Académies et des Arts",
  "MONSIEUR CADET",
  "MONSIEUR ARISTIDE",
  "LA FOLIE Barbizon"
];

const hotelAddresses = [
  "17, rue du Quatre-Septembre, Paris 2",
  "17, rue Washington, Paris 8",
  "6, rue Pierre Fontaine, Paris 9",
  "5, rue des Remparts, Saint-Tropez",
  "10, boulevard Maréchal Juin, Cap d’Antibes",
  "159, rue Mgr Conseil, Megève",
  "16, rue de Saintonge, Paris 3",
  "15, rue de la Grande Chaumière, Paris 6",
  "4, rue Cadet, Paris 9",
  "3, rue Aristide Bruant, Paris 18",
  "17, rue du Quatre-Septembre, Paris 2"
];

const HotelList = () => {
  const [isCarouselVisible, setCarouselVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentHotelName, setCurrentHotelName] = useState(hotelNames[0]);
  const [currentHotelAddress, setCurrentHotelAddress] = useState(hotelAddresses[0]);
  const [fadeClass, setFadeClass] = useState(''); // Initial state without transition
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
    setCurrentHotelName(hotelNames[index]); // Set hotel name immediately
    setCurrentHotelAddress(hotelAddresses[index]); // Set hotel address immediately
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
    ref: sliderRef,
    beforeChange: (oldIndex, newIndex) => {
      setFadeClass(''); // Trigger fade-out
      setTimeout(() => {
        setCurrentHotelName(hotelNames[newIndex]);
        setCurrentHotelAddress(hotelAddresses[newIndex]);
        setFadeClass('visible'); // Trigger fade-in
      }, 500); // Match this duration with CSS transition
    }
  };

  return (
    <div className='container hotelListSection'>
      <p className='subTitleHotelList'>Les 5 étoiles</p>
      <div className='hotelListContainer'>
        <Link to="/" onClick={() => handleOpenCarousel(0)}>HÔtel Hana, Paris 2</Link>
        <Link to="/" onClick={() => handleOpenCarousel(1)}>MONSIEUR GEORGE, PARIS 8</Link>
        <div className='smallHotelListContainer'>
          <Link to="/" onClick={() => handleOpenCarousel(2)}>LE BUS PALLADIUM, Paris 9</Link>
          <p>{content.home.fr.other.wait}</p>
        </div>
        <Link to="/" onClick={() => handleOpenCarousel(3)}>HÔTEL LA PONCHE, SAINT-TROPEZ</Link>
        <Link to="/" onClick={() => handleOpenCarousel(4)}>CAP D’ANTIBES BEACH HOTEL, CAP D’ANTIBES</Link>
        <div className='smallHotelListContainer'>
          <Link to="/" onClick={() => handleOpenCarousel(5)}>CHALET SAINT-GEORGES, MEGÈVE</Link>
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
            <div className={`carouselText ${fadeClass}`}>{currentHotelName}</div>
            <div className={`carouselTextAdress ${fadeClass}`}>{currentHotelAddress}</div>
            <p className='fly'>voyager</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelList;
