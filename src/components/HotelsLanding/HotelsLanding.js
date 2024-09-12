import React from 'react';
import './hotelslanding.css';
import content from '../../content.json';
import IMAGE1 from '../../assets/Hotels/test.jpg';
import IMAGE2 from '../../assets/Hotels/test.jpg';
import IMAGE3 from '../../assets/Hotels/test.jpg';
import Slider from 'react-slick';

// Assure-toi d'importer les styles de react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HotelsLanding = () => {
    const settings = {
        dots: false, // Désactive les bullets
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false, // Désactive les flèches
        autoplay: true, // Active le défilement automatique
        autoplaySpeed: 3000, // Durée entre chaque défilement (en ms)
        pauseOnHover: true, // Pause lors du survol de la souris
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings} className='hotelsLandingContainer'>
            <div className='feuillet'>
                <div className='top'>
                    <p className='title'>{content.hotels.fr.hana.nom}</p>
                    <p className='adress'>{content.hotels.fr.hana.adresse}</p>
                </div>
                <img src={IMAGE1} alt="" />
                <div className='bottom'>
                    <p>{content.hotels.fr.hana.titre}</p>
                    <p className='texte'>{content.hotels.fr.hana.texte}</p>
                    <p className='voyager'>Voyager</p>
                </div>
            </div>

            <div className='feuillet'>
                <div className='top'>
                    <p className='title'>{content.hotels.fr.antibes.nom}</p>
                    <p className='adress'>{content.hotels.fr.antibes.adresse}</p>
                </div>
                <img src={IMAGE2} alt="" />
                <div className='bottom'>
                    <p>{content.hotels.fr.antibes.titre}</p>
                    <p className='texte'>{content.hotels.fr.antibes.texte}</p>
                    <p className='voyager'>Voyager</p>
                </div>
            </div>

            <div className='feuillet'>
                <div className='top'>
                    <p className='title'>{content.hotels.fr.laponche.nom}</p>
                    <p className='adress'>{content.hotels.fr.laponche.adresse}</p>
                </div>
                <img src={IMAGE3} alt="" />
                <div className='bottom'>
                    <p>{content.hotels.fr.laponche.titre}</p>
                    <p className='texte'>{content.hotels.fr.laponche.texte}</p>
                    <p className='voyager'>Voyager</p>
                </div>
            </div>

            <div className='feuillet'>
                <div className='top'>
                    <p className='title'>{content.hotels.fr.aristide.nom}</p>
                    <p className='adress'>{content.hotels.fr.aristide.adresse}</p>
                </div>
                <img src={IMAGE1} alt="" />
                <div className='bottom'>
                    <p>{content.hotels.fr.aristide.titre}</p>
                    <p className='texte'>{content.hotels.fr.aristide.texte}</p>
                    <p className='voyager'>Voyager</p>
                </div>
            </div>

            <div className='feuillet'>
                <div className='top'>
                    <p className='title'>{content.hotels.fr.academie.nom}</p>
                    <p className='adress'>{content.hotels.fr.academie.adresse}</p>
                </div>
                <img src={IMAGE1} alt="" />
                <div className='bottom'>
                    <p>{content.hotels.fr.academie.titre}</p>
                    <p className='texte'>{content.hotels.fr.academie.texte}</p>
                    <p className='voyager'>Voyager</p>
                </div>
            </div>

            <div className='feuillet'>
                <div className='top'>
                    <p className='title'>{content.hotels.fr.chalet.nom}</p>
                    <p className='adress'>{content.hotels.fr.chalet.adresse}</p>
                </div>
                <img src={IMAGE1} alt="" />
                <div className='bottom'>
                    <p>{content.hotels.fr.chalet.titre}</p>
                    <p className='texte'>{content.hotels.fr.chalet.texte}</p>
                    <p className='voyager'>Voyager</p>
                </div>
            </div>
        </Slider>
    );
};

export default HotelsLanding;
