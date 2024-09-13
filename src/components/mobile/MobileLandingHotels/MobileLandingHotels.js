import React from 'react';
import Slider from 'react-slick';
import './mobilelandinghotels.css';

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

const MobileLandingHotels = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  return (
    <div className='ultraBigContainerMobileLandingHotels'>
        <div className='MobileLandingHotels'>
        <Slider {...settings}>
            {images.map((image, index) => (
            <div key={index} className='slide'>
                <img src={image} alt={`Hotel ${index}`} />
            </div>
            ))}
        </Slider>
        </div>
    </div>
  );
};

export default MobileLandingHotels;
