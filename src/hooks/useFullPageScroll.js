import { useEffect } from 'react';

const useFullPageScroll = () => {
  useEffect(() => {
    let currentSectionIndex = 0;
    const sections = document.querySelectorAll('.section');
    const totalSections = sections.length;
    let isScrolling = false;

    if (totalSections === 0) return;

    let touchStartY = 0;
    let touchEndY = 0;

    const SCROLL_THRESHOLD = 20; // Seuil de défilement de la souris
    const TOUCH_THRESHOLD = 30; // Seuil de défilement tactile
    const SCROLL_DURATION = 600; // Durée de la transition en ms

    const scrollHandler = (event) => {
      event.preventDefault();

      if (isScrolling) return;

      isScrolling = true;

      if (Math.abs(event.deltaY) >= SCROLL_THRESHOLD) {
        if (event.deltaY > 0 && currentSectionIndex < totalSections - 1) {
          // Défilement vers le bas
          sections[currentSectionIndex].classList.remove('active');
          sections[currentSectionIndex].classList.add('fixed');
          currentSectionIndex++;
          sections[currentSectionIndex].classList.add('active');
        } else if (event.deltaY < 0 && currentSectionIndex > 0) {
          // Défilement vers le haut
          sections[currentSectionIndex].classList.remove('active');
          sections[currentSectionIndex].classList.remove('fixed');
          currentSectionIndex--;
          sections[currentSectionIndex].classList.add('active');
        }
        
        setTimeout(() => {
          isScrolling = false;
        }, SCROLL_DURATION);
      }
    };

    const touchStartHandler = (event) => {
      touchStartY = event.touches[0].clientY;
    };

    const touchEndHandler = (event) => {
      event.preventDefault(); // Assurez-vous que l'événement tactile est pris en compte
      touchEndY = event.changedTouches[0].clientY;
      const touchDifference = touchEndY - touchStartY;

      if (Math.abs(touchDifference) >= TOUCH_THRESHOLD) {
        isScrolling = true;

        if (touchDifference > 0 && currentSectionIndex > 0) {
          // Défilement vers le haut
          sections[currentSectionIndex].classList.remove('active');
          sections[currentSectionIndex].classList.remove('fixed');
          currentSectionIndex--;
          sections[currentSectionIndex].classList.add('active');
        } else if (touchDifference < 0 && currentSectionIndex < totalSections - 1) {
          // Défilement vers le bas
          sections[currentSectionIndex].classList.remove('active');
          sections[currentSectionIndex].classList.add('fixed');
          currentSectionIndex++;
          sections[currentSectionIndex].classList.add('active');
        }

        setTimeout(() => {
          isScrolling = false;
        }, SCROLL_DURATION);
      }
    };

    window.addEventListener('wheel', scrollHandler, { passive: false });
    window.addEventListener('touchstart', touchStartHandler, { passive: false });
    window.addEventListener('touchend', touchEndHandler, { passive: false });

    sections[currentSectionIndex].classList.add('active');

    return () => {
      window.removeEventListener('wheel', scrollHandler);
      window.removeEventListener('touchstart', touchStartHandler);
      window.removeEventListener('touchend', touchEndHandler);
    };
  }, []);
};

export default useFullPageScroll;
