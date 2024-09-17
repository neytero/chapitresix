import React from 'react';
import './hotelslanding.css'; 
import content from '../../content.json';
import IMAGE1 from '../../assets/Hotels/HOTELHANA.jpg';
import IMAGE2 from '../../assets/Hotels/CABH.jpg';
import IMAGE3 from '../../assets/Hotels/LaPonche.jpg';
import IMAGE4 from '../../assets/Hotels/MONSIEURARISTIDE.jpg';
import IMAGE5 from '../../assets/Hotels/ACADEMIES.jpg';
import IMAGE6 from '../../assets/Hotels/MEGEVE.jpg';
import IMAGE7 from '../../assets/Hotels/BARBIZON.jpg';
import IMAGE8 from '../../assets/Hotels/BUSPALLADIUM.jpg';
import IMAGE9 from '../../assets/Hotels/CADET.jpg';
import IMAGE10 from '../../assets/Hotels/GEORGE.jpg';
import IMAGE11 from '../../assets/Hotels/SAINTONGE.jpg';
import { useFilter } from '../../FilterContext'; 

const urlSite = [
    "https://hotelhana-paris.com/",
    "https://capdantibes-beachhotel.com/",
    "https://laponche.com/",
    "https://www.monsieuraristide.com/",
    "https://hoteldesacademies.fr/",
    "https://chaletsaintgeorges.com/fr",
    "https://www.lafoliebarbizon.com/",
    "https://www.buspalladium.com/",
    "https://www.monsieurcadet.com/",
    "https://www.monsieurgeorge.com/",
    "https://maisonsaintonge.com/",
];

const items = [
    { title: content.hotels.fr.hana.nom, address: content.hotels.fr.hana.adresse, image: IMAGE1, subtitle: content.hotels.fr.hana.titre, text: content.hotels.fr.hana.texte, category: 'paris' },
    { title: content.hotels.fr.antibes.nom, address: content.hotels.fr.antibes.adresse, image: IMAGE2, subtitle: content.hotels.fr.antibes.titre, text: content.hotels.fr.antibes.texte, category: 'ailleurs' },
    { title: content.hotels.fr.laponche.nom, address: content.hotels.fr.laponche.adresse, image: IMAGE3, subtitle: content.hotels.fr.laponche.titre, text: content.hotels.fr.laponche.texte, category: 'ailleurs' },
    { title: content.hotels.fr.aristide.nom, address: content.hotels.fr.aristide.adresse, image: IMAGE4, subtitle: content.hotels.fr.aristide.titre, text: content.hotels.fr.aristide.texte, category: 'paris' },
    { title: content.hotels.fr.academie.nom, address: content.hotels.fr.academie.adresse, image: IMAGE5, subtitle: content.hotels.fr.academie.titre, text: content.hotels.fr.academie.texte, category: 'paris' },
    { title: content.hotels.fr.chalet.nom, address: content.hotels.fr.chalet.adresse, image: IMAGE6, subtitle: content.hotels.fr.chalet.titre, text: content.hotels.fr.chalet.texte, category: 'ailleurs' },
    { title: content.hotels.fr.barbizon.nom, address: content.hotels.fr.barbizon.adresse, image: IMAGE7, subtitle: content.hotels.fr.barbizon.titre, text: content.hotels.fr.barbizon.texte, category: 'ailleurs' },
    { title: content.hotels.fr.paladium.nom, address: content.hotels.fr.paladium.adresse, image: IMAGE8, subtitle: content.hotels.fr.paladium.titre, text: content.hotels.fr.paladium.texte, category: 'paris' },
    { title: content.hotels.fr.cadet.nom, address: content.hotels.fr.cadet.adresse, image: IMAGE9, subtitle: content.hotels.fr.cadet.titre, text: content.hotels.fr.cadet.texte, category: 'paris' },
    { title: content.hotels.fr.george.nom, address: content.hotels.fr.george.adresse, image: IMAGE10, subtitle: content.hotels.fr.george.titre, text: content.hotels.fr.george.texte, category: 'paris' },
    { title: content.hotels.fr.saintonge.nom, address: content.hotels.fr.saintonge.adresse, image: IMAGE11, subtitle: content.hotels.fr.saintonge.titre, text: content.hotels.fr.saintonge.texte, category: 'paris' },
];

const HotelsLanding = () => {
    const { selectedFilter } = useFilter(); // Utilisation du contexte pour obtenir le filtre sélectionné

    // Filtrer les articles en fonction de la catégorie sélectionnée
    const filteredItems = items.filter(item =>
        selectedFilter === 'Tous' || item.category === selectedFilter.toLowerCase()
    );

    return (
        <div className="carouselHotelsLanding">
            <div className="carousel-inner">
                {filteredItems.concat(filteredItems).map((item, index) => (
                    <a 
                        href={urlSite[index % urlSite.length]} 
                        className="carousel-item" 
                        key={index} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <div className='feuillet'>
                            <div className='top'>
                                <p className='title'>{item.title}</p>
                                <p className='address'>{item.address}</p>
                            </div>
                            <img src={item.image} alt={item.title} />
                            <div className='bottom'>
                                <p>{item.subtitle}</p>
                                <p className='texte'>{item.text}</p>
                                <p className='voyager'>Voyager</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default HotelsLanding;
