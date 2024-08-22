import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../../assets/LOGO-CHAPITRE-SIX.svg';
import SUBLOGO from '../../assets/Deshistoires.svg';
import FLECHE from '../../assets/FLECHE.svg';
import './navbar.css';
import content from '../../content.json';

const Navbar = ({ changePage, changeLanguage, isTransparent }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHotelList, setShowHotelList] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleHotelList = () => {
    setShowHotelList(!showHotelList);
  };

  const closeMenuAndChangePage = (page) => {
    changePage(page);
    toggleMenu();
  };

  return (
    <nav>
      <div className={`navContainer ${isTransparent ? 'transparent' : ''}`}>
        <div className="smallNavContainer">
          <div className="navRight">
            <div onClick={toggleMenu} className={`burger-icon ${isLoaded ? 'fade-in' : 'hidden'}`}>
              <svg width="38" height="20" viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                {!menuOpen && <rect x="38" y="20" width="38" height="0.999997" transform="rotate(-180 38 20)" fill="black" />}
                <rect x="38" y="10" width="38" height="0.999997" transform="rotate(-180 38 10)" fill="black" />
                {!menuOpen && <rect x="38" y="1" width="38" height="0.999997" transform="rotate(-180 38 1)" fill="black" />}
              </svg>
            </div>

            <Link to="/" onClick={() => closeMenuAndChangePage('home')}>
              <img src={LOGO} alt="Logo" className="Logo" />
            </Link>

            <Link to="/" onClick={() => closeMenuAndChangePage('home')}>
              <img src={SUBLOGO} alt="Sublogo" className={`Sublogo ${isLoaded ? 'fade-in' : 'hidden'}`} />
            </Link>
          </div>
          <button className={`booking ${isLoaded ? 'fade-in' : 'hidden'}`}>{content.home.fr.landing.button}</button>
        </div>
      </div>

      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <div className="subMenu">
          <>
            <p className="hotel" onClick={toggleHotelList}>{content.home.fr.landing.submenu1}</p>
            {showHotelList && (
              <div className="hotellist">
                {/* Liste des hôtels */}
                <div className="hotelLink">
                  <Link to="">Hôtel Hana, Paris 2</Link>
                  <img src={FLECHE} alt="" />
                </div>
                {/* Ajouter d'autres hôtels ici */}
              </div>
            )}
            <Link to="/history" onClick={() => closeMenuAndChangePage('history')}>{content.home.fr.landing.submenu2}</Link>
            <Link to="/" onClick={() => closeMenuAndChangePage('home')}>{content.home.fr.landing.submenu3}</Link>
            <Link to="/" onClick={() => closeMenuAndChangePage('home')}>{content.home.fr.landing.submenu4}</Link>
          </>
        </div>
        <div className="bottomLine">
          <div className="langue">
            <button onClick={() => changeLanguage('en')}>EN</button>
            <button onClick={() => changeLanguage('fr')}>FR</button>
          </div>
          <button className="contact">contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
