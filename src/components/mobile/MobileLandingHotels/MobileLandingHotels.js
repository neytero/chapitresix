import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import './mobilelandinghotels.css';
import { useFilter } from '../../../FilterContext'; // Assurez-vous que ce chemin est correct

// Images et données
import IMAGE1 from '../../../assets/Hotels/mobile/IMAGE1.jpg';
import IMAGE2 from '../../../assets/Hotels/mobile/IMAGE2.jpg';
import IMAGE3 from '../../../assets/Hotels/mobile/IMAGE3.jpg';
import IMAGE4 from '../../../assets/Hotels/mobile/IMAGE4.jpg';
import IMAGE5 from '../../../assets/Hotels/mobile/IMAGE5.jpg';
import IMAGE6 from '../../../assets/Hotels/mobile/IMAGE6.jpg';
import IMAGE7 from '../../../assets/Hotels/mobile/IMAGE7.jpg';
import IMAGE8 from '../../../assets/Hotels/mobile/IMAGE8.jpg';
import IMAGE9 from '../../../assets/Hotels/mobile/IMAGE9.jpg';
import IMAGE10 from '../../../assets/Hotels/mobile/IMAGE10.jpg';
import IMAGE11 from '../../../assets/Hotels/mobile/IMAGE11.jpg';

const images = [
  IMAGE1, IMAGE2, IMAGE3, IMAGE4, IMAGE5,
  IMAGE6, IMAGE7, IMAGE8, IMAGE9, IMAGE10, IMAGE11
];

const hotelNames = [
  "HÔtel Hana", "CAP D’ANTIBES BEACH HOTEL", "HÔTEL LA PONCHE", "MONSIEUR ARISTIDE", "HÔTEL DES Académies et des Arts",
  "MAISON SAINTONGE", "MONSIEUR GEORGE", "MONSIEUR CADET", "CHALET SAINT-GEORGES", "LA FOLIE Barbizon", "LE BUS PALLADIUM"
];

const hotelAddresses = [
  "17, rue du Quatre-Septembre, Paris 2", "10, boulevard Maréchal Juin, Cap d’Antibes", "5, rue des Remparts, Saint-Tropez",
  "3, rue Aristide Bruant, Paris 18", "15, rue de la Grande Chaumière, Paris 6", "16, rue de Saintonge, Paris 3",
  "17, rue Washington, Paris 8", "4, rue Cadet, Paris 9", "159, rue Mgr Conseil, Megève", "17, rue du Quatre-Septembre, Paris 2",
  "6, rue Pierre Fontaine, Paris 9"
];

const categories = [
  'paris', 'ailleurs', 'ailleurs', 'paris', 'paris', 'paris', 'paris', 'paris', 'ailleurs', 'ailleurs', 'ailleurs'
];

const urlSite = [
  "https://hotelhana-paris.com/", "https://capdantibes-beachhotel.com/", "https://laponche.com/",
  "https://www.monsieuraristide.com/", "https://hoteldesacademies.fr/", "https://maisonsaintonge.com/",
  "https://www.monsieurgeorge.com/", "https://www.monsieurcadet.com/", "https://chaletsaintgeorges.com/fr",
  "https://www.lafoliebarbizon.com/", "https://www.buspalladium.com/"
];

const MobileLandingHotels = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeClass, setFadeClass] = useState('');
  const sliderRef = useRef(null);
  const { selectedFilter, handleFilterChange } = useFilter();

  // Filtrer les hôtels en fonction du filtre sélectionné
  const filteredHotels = images.map((image, index) => ({
    image,
    name: hotelNames[index],
    address: hotelAddresses[index],
    category: categories[index]
  })).filter(hotel =>
    selectedFilter === 'Tous' || hotel.category === selectedFilter.toLowerCase()
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    beforeChange: (oldIndex, newIndex) => {
      setFadeClass('');
      setTimeout(() => {
        setCurrentSlide(newIndex);
        setFadeClass('visible');
      }, 500);
    },
    ref: sliderRef
  };

  const handleImageClick = () => {
    window.location.href = urlSite[currentSlide];
  };

  return (
    <div className='ultraBigContainerMobileLandingHotels'>
      <div className='MobileLandingHotels'>
        {/* Boutons de filtrage */}
        <div className='filter'>
          <button 
            onClick={() => handleFilterChange('Tous')} 
            className={selectedFilter === 'Tous' ? 'active' : ''}
          >
            Tous
          </button>
          <button 
            onClick={() => handleFilterChange('Paris')} 
            className={selectedFilter === 'Paris' ? 'active' : ''}
          >
            Paris
          </button>
          <button 
            onClick={() => handleFilterChange('Ailleurs')} 
            className={selectedFilter === 'Ailleurs' ? 'active' : ''}
          >
            Ailleurs
          </button>
        </div>

        <Slider {...settings}>
          {filteredHotels.map((hotel, index) => (
            <div key={index} className='slide' onClick={handleImageClick}>
              <img src={hotel.image} alt={`Hotel ${index}`} />
            </div>
          ))}
        </Slider>
        <div className={`hotel-info ${fadeClass}`}>
          <h2 className='hotel-name'>{filteredHotels[currentSlide]?.name}</h2>
          <p className='hotel-address'>{filteredHotels[currentSlide]?.address}</p>
        </div>
        <p className='travel'>Voyager</p>
      </div>
    </div>
  );
};

export default MobileLandingHotels;
