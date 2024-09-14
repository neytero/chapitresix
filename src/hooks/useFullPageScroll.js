import { useEffect } from 'react';

const useFullPageScroll = (setTransparent, setCurrentSection) => {
  useEffect(() => {
    let currentSectionIndex = 0;
    const sections = document.querySelectorAll('.section');
    const totalSections = sections.length;
    let isScrolling = false;

    if (totalSections === 0) return;

    let touchStartY = 0;

    const updateSectionClasses = () => {
      sections.forEach((section, index) => {
        if (index === currentSectionIndex) {
          section.classList.add('active', 'fixed');
        } else {
          section.classList.remove('active');
          if (index < currentSectionIndex) {
            section.classList.add('fixed');
          } else {
            section.classList.remove('fixed');
          }
        }
      });
      setCurrentSection(currentSectionIndex);
      setTransparent(currentSectionIndex === totalSections - 1 ? 1 : 0);
    };

    const handleScroll = (deltaY, isTouch) => {
      if (isScrolling) return;

      const SCROLL_THRESHOLD = 20;

      // Adjust the direction for touch events
      if (isTouch) {
        deltaY = -deltaY;
      }

      if (Math.abs(deltaY) >= SCROLL_THRESHOLD) {
        isScrolling = true;

        if (deltaY > 0 && currentSectionIndex < totalSections - 1) {
          currentSectionIndex++;
        } else if (deltaY < 0 && currentSectionIndex > 0) {
          currentSectionIndex--;
        }

        updateSectionClasses();

        setTimeout(() => {
          isScrolling = false;
        }, 600);
      }
    };

    const scrollHandler = (event) => {
      event.preventDefault();
      handleScroll(event.deltaY, false);
    };

    const touchStartHandler = (event) => {
      touchStartY = event.touches[0].clientY;
    };

    const touchMoveHandler = (event) => {
      if (touchStartY !== 0) {
        const touchEndY = event.touches[0].clientY;
        handleScroll(touchEndY - touchStartY, true);
        touchStartY = touchEndY; // Update touchStartY for the next move
      }
    };

    const touchEndHandler = () => {
      touchStartY = 0; // Reset touchStartY
    };

    // Debugging logs
    console.log('Adding event listeners');
    
    window.addEventListener('wheel', scrollHandler);
    window.addEventListener('touchstart', touchStartHandler, { passive: true });
    window.addEventListener('touchmove', touchMoveHandler, { passive: false });
    window.addEventListener('touchend', touchEndHandler, { passive: true });

    updateSectionClasses();

    return () => {
      // Debugging logs
      console.log('Removing event listeners');
      
      window.removeEventListener('wheel', scrollHandler);
      window.removeEventListener('touchstart', touchStartHandler);
      window.removeEventListener('touchmove', touchMoveHandler);
      window.removeEventListener('touchend', touchEndHandler);
    };
  }, [setTransparent, setCurrentSection]);
};

export default useFullPageScroll;
