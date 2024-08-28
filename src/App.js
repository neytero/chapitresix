import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavDesktop/Navbar';
import Footer from './components/FooterDesktop/Footer';
import FooterMobile from './components/mobile/FooterMobile/footerMobile';
import HomePage from './components/HomePage';
import HistoryPage from './components/HistoryPage';
import './App.css';
import useFullPageScroll from './hooks/useFullPageScroll';
import BookingButton from './components/BookingButton/bookingButton';

const App = () => {
  useFullPageScroll();

  const [language, setLanguage] = useState('en');
  const [contentState, setContentState] = useState({
    home: { landing: {}, textBlock: {}, other: {} },
    history: { title: '', text: '' },
    footer: { recrutement: '', instagram: '' },
  });
  const [buttonVisibility, setButtonVisibility] = useState('show');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isLandingPage, setIsLandingPage] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const initialPage = window.location.pathname.includes('history') ? 'history' : 'home';
    if (contentState[language] && contentState[language][initialPage]) {
      setContentState(contentState[language][initialPage]);
      setIsLandingPage(initialPage === 'home');
    }
  }, [language, contentState]);

  const changePage = (page) => {
    window.history.pushState({}, '', `/${page}`);
    setContentState(contentState[language][page] || {});
    setIsLandingPage(page === 'home');
  };

  useEffect(() => {
    const footer = document.querySelector('footer');

    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === footer) {
            setButtonVisibility(entry.isIntersecting ? 'hidden' : 'show');
          }
        });
      },
      {
        root: null,
        threshold: 0.1
      }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Router>
      <Navbar
        changePage={changePage}
        changeLanguage={setLanguage}
        isTransparent={buttonVisibility === 'hidden'}
      />
      <Routes>
        <Route path="/" element={<HomePage content={contentState} />} />
        <Route path="/history" element={<HistoryPage content={contentState.history} />} />
      </Routes>
      {isMobile ? (
        <footer className="section">
          <FooterMobile changeLanguage={setLanguage} content={contentState.footer} />
        </footer>
      ) : (
        <footer className="section">
          <Footer changeLanguage={setLanguage} content={contentState.footer} />
        </footer>
      )}
      {buttonVisibility && (
        <BookingButton 
          className={`reserve-button ${buttonVisibility} ${isLandingPage ? 'landing' : ''}`}
        />
      )}
    </Router>
  );
};

export default App;
