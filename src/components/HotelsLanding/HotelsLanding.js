import React from 'react';
import './hotelslanding.css'; 
import content from '../../content.json';
import IMAGE1 from '../../assets/Hotels/test.jpg';
import IMAGE2 from '../../assets/Hotels/test.jpg';
import IMAGE3 from '../../assets/Hotels/test.jpg';

// Contenu du carrousel
const items = [
    { title: content.hotels.fr.hana.nom, address: content.hotels.fr.hana.adresse, image: IMAGE1, subtitle: content.hotels.fr.hana.titre, text: content.hotels.fr.hana.texte },
    { title: content.hotels.fr.antibes.nom, address: content.hotels.fr.antibes.adresse, image: IMAGE2, subtitle: content.hotels.fr.antibes.titre, text: content.hotels.fr.antibes.texte },
    { title: content.hotels.fr.laponche.nom, address: content.hotels.fr.laponche.adresse, image: IMAGE3, subtitle: content.hotels.fr.laponche.titre, text: content.hotels.fr.laponche.texte },
    { title: content.hotels.fr.aristide.nom, address: content.hotels.fr.aristide.adresse, image: IMAGE1, subtitle: content.hotels.fr.aristide.titre, text: content.hotels.fr.aristide.texte },
    { title: content.hotels.fr.academie.nom, address: content.hotels.fr.academie.adresse, image: IMAGE1, subtitle: content.hotels.fr.academie.titre, text: content.hotels.fr.academie.texte },
    { title: content.hotels.fr.chalet.nom, address: content.hotels.fr.chalet.adresse, image: IMAGE1, subtitle: content.hotels.fr.chalet.titre, text: content.hotels.fr.chalet.texte }
];

const HotelsLanding = () => {
    return (
        <div className="carousel">
            <div className="carousel-inner">
                {items.concat(items).map((item, index) => (  
                    <div className="carousel-item" key={index}>
                        <div className='feuillet'>
                            <div className='top'>
                                <p className='title'>{item.title}</p>
                                <p className='adress'>{item.address}</p>
                            </div>
                            <img src={item.image} alt={item.title} />
                            <div className='bottom'>
                                <p>{item.subtitle}</p>
                                <p className='texte'>{item.text}</p>
                                <p className='voyager'>Voyager</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HotelsLanding;
