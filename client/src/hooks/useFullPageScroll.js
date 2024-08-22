import { useEffect } from 'react';

const useFullPageScroll = () => {
  useEffect(() => {
    let currentSectionIndex = 0;
    const sections = document.querySelectorAll('.section');
    const totalSections = sections.length;
    let isScrolling = false;

    if (totalSections === 0) return;

    const scrollHandler = (event) => {
      event.preventDefault();

      if (isScrolling) return;

      // Ajuster ce seuil selon les besoins (par exemple, 30)
      const SCROLL_THRESHOLD = 20;

      if (Math.abs(event.deltaY) < SCROLL_THRESHOLD) return;

      isScrolling = true;

      if (event.deltaY > 0 && currentSectionIndex < totalSections - 1) {
        // Scroll vers le bas
        sections[currentSectionIndex].classList.remove('active');
        sections[currentSectionIndex].classList.add('fixed'); // Garde la section en place
        currentSectionIndex++;
        sections[currentSectionIndex].classList.add('active');
      } else if (event.deltaY < 0 && currentSectionIndex > 0) {
        // Scroll vers le haut
        sections[currentSectionIndex].classList.remove('active');
        sections[currentSectionIndex].classList.remove('fixed');
        currentSectionIndex--;
        sections[currentSectionIndex].classList.add('active');
      }

      setTimeout(() => {
        isScrolling = false;
      }, 600); // Durée égale à la durée de transition CSS
    };

    window.addEventListener('wheel', scrollHandler);

    // Activer la première section
    sections[currentSectionIndex].classList.add('active');

    return () => {
      window.removeEventListener('wheel', scrollHandler);
    };
  }, []);
};

export default useFullPageScroll; 
