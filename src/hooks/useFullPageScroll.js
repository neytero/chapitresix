import { useEffect } from 'react';

const useFullPageScroll = (setTransparent, setCurrentSection) => {
  useEffect(() => {
    let currentSectionIndex = 0;
    const sections = document.querySelectorAll('.section');
    const totalSections = sections.length;
    let isScrolling = false;

    if (totalSections === 0) return;

    let touchStartY = 0;
    let touchEndY = 0;

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

    const handleScroll = (deltaY) => {
      if (isScrolling) return;

      const SCROLL_THRESHOLD = 20;

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
      handleScroll(event.deltaY);
    };

    const touchStartHandler = (event) => {
      touchStartY = event.touches[0].clientY;
    };

    const touchEndHandler = (event) => {
      touchEndY = event.changedTouches[0].clientY;
      const SCROLL_THRESHOLD = 30;

      if (Math.abs(touchEndY - touchStartY) >= SCROLL_THRESHOLD) {
        handleScroll(touchEndY - touchStartY);
      }
    };

    window.addEventListener('wheel', scrollHandler);
    window.addEventListener('touchstart', touchStartHandler);
    window.addEventListener('touchend', touchEndHandler);

    updateSectionClasses();

    return () => {
      window.removeEventListener('wheel', scrollHandler);
      window.removeEventListener('touchstart', touchStartHandler);
      window.removeEventListener('touchend', touchEndHandler);
    };
  }, [setTransparent, setCurrentSection]);
};

export default useFullPageScroll;
