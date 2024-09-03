import React from 'react';
import './hotelslanding.css';
import content from '../../content.json';

import IMAGE1 from '../../assets/Hotels/Hana.jpg';
import IMAGE2 from '../../assets/Hotels/Cap.jpg';
import IMAGE3 from '../../assets/Hotels/LaPonche.jpg';



const HotelsLanding = () => {
  return (
    <div className='hotelsLandingContainer'>
        <div className='feuillet'>
            <div className='top'>
                <p className='title'>{content.hotels.fr.hana.nom}</p>
                <p className='adress'>{content.hotels.fr.hana.adresse}</p>
            </div>
            <img src={IMAGE1} alt="" />
            <div className='bottom'>
                <p>{content.hotels.fr.hana.titre}</p>
                <p>{content.hotels.fr.hana.texte}</p>
                <p>Voyager</p>
            </div>
        </div>

        <div className='feuillet'>
            <div className='top'>
                <p className='title'>{content.hotels.fr.hana.nom}</p>
                <p className='adress'>{content.hotels.fr.hana.adresse}</p>
            </div>
            <img src={IMAGE2} alt="" />
            <div className='bottom'>
                <p>{content.hotels.fr.hana.titre}</p>
                <p>{content.hotels.fr.hana.texte}</p>
                <p>Voyager</p>
            </div>
        </div>

        <div className='feuillet'>
            <div className='top'>
                <p className='title'>{content.hotels.fr.hana.nom}</p>
                <p className='adress'>{content.hotels.fr.hana.adresse}</p>
            </div>
            <img src={IMAGE3} alt="" />
            <div className='bottom'>
                <p>{content.hotels.fr.hana.titre}</p>
                <p>{content.hotels.fr.hana.texte}</p>
                <p>Voyager</p>
            </div>
        </div>
    </div>
  );
};

export default HotelsLanding;