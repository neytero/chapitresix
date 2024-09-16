import React from 'react';
import './actualitylanding.css';
import content from '../../content.json';
import LANDING from '../../assets/Actualites/PHOTOPRINCIPALE.jpg';
import ARTICLE1 from '../../assets/Actualites/PRIXLITTERAIRE.jpg';
import ARTICLE2 from '../../assets/Actualites/CADETCOMEDYCLUB.jpg';
import ARTICLE3 from '../../assets/Actualites/BABAMONDAYS.jpg';
import { useFilter } from '../../FilterContext'; // Import du hook useFilter

const ActualityLanding = () => {
  const { selectedFilter } = useFilter(); // Utilisation du contexte pour obtenir et définir le filtre sélectionné
  const [currentImage, setCurrentImage] = React.useState(LANDING); // État pour l'image actuelle

  // Liste des articles avec leurs images
  const articles = [
    { ...content.actualites.fr.actualite1, image: ARTICLE1 },
    { ...content.actualites.fr.actualite2, image: ARTICLE2 },
    { ...content.actualites.fr.actualite3, image: ARTICLE3 }
  ];

  // Fonction pour gérer les changements de filtre

  // Filtrer les articles en fonction de la catégorie sélectionnée
  const filteredArticles = articles.filter(article =>
    selectedFilter === 'Tous' || article.class === selectedFilter.toLowerCase()
  );

  return (
    <div className='actualityLandingContainer'>
      <div className='actualityLandingSmallContainer'>
        <div className='separateContainer'>
          <div className='actualityLandingTextBlock'>
            <h1>{content.actualites.fr.bloctext.title}</h1>
            <p>{content.actualites.fr.bloctext.text}</p>
            <p className='subTexte'>{content.actualites.fr.bloctext.subtext}</p>
          </div>

          <div className='actualityLandingActualiteContainer'>
            <div className='actualityLandingActualiteContent'>
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article, index) => (
                  <div 
                    key={index} 
                    className={`actualityLandingUniqueContainer ${article.class}`}
                    onMouseEnter={() => setCurrentImage(article.image)} // Change l'image au survol
                    onMouseLeave={() => setCurrentImage(LANDING)} // Réinitialise l'image lorsque la souris quitte
                  >
                    <h2>{article.titre}</h2>
                    <p className='date'>{article.date}</p>
                    <p>{article.texte}</p>
                  </div>
                ))
              ) : (
                <p>Aucun article trouvé</p>
              )}
            </div>
          </div>
        </div>
        <img src={currentImage} alt="Actualité" className='actualityImgLandingDesktop' />
      </div>
    </div>
  );
};

export default ActualityLanding;
