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

    const scrollHandler = (event) => {
      event.preventDefault();

      if (isScrolling) return;

      
      const SCROLL_THRESHOLD = 20;

      if (event.deltaY && Math.abs(event.deltaY) >= SCROLL_THRESHOLD) {
        isScrolling = true;
        if (event.deltaY > 0 && currentSectionIndex < totalSections - 1) {
          
          sections[currentSectionIndex].classList.remove('active');
          sections[currentSectionIndex].classList.add('fixed');
          currentSectionIndex++;
          sections[currentSectionIndex].classList.add('active');
        } else if (event.deltaY < 0 && currentSectionIndex > 0) {
         
          sections[currentSectionIndex].classList.remove('active');
          sections[currentSectionIndex].classList.remove('fixed');
          currentSectionIndex--;
          sections[currentSectionIndex].classList.add('active');
        }
        setTimeout(() => {
          isScrolling = false;
        }, 600);
      }
    };

    const touchStartHandler = (event) => {
      touchStartY = event.touches[0].clientY;
    };

    const touchEndHandler = (event) => {
      touchEndY = event.changedTouches[0].clientY;
      const SCROLL_THRESHOLD = 30;

      if (Math.abs(touchEndY - touchStartY) >= SCROLL_THRESHOLD) {
        isScrolling = true;
        if (touchEndY > touchStartY && currentSectionIndex > 0) {
         
          sections[currentSectionIndex].classList.remove('active');
          sections[currentSectionIndex].classList.remove('fixed');
          currentSectionIndex--;
          sections[currentSectionIndex].classList.add('active');
        } else if (touchEndY < touchStartY && currentSectionIndex < totalSections - 1) {
          sections[currentSectionIndex].classList.remove('active');
          sections[currentSectionIndex].classList.add('fixed');
          currentSectionIndex++;
          sections[currentSectionIndex].classList.add('active');
        }
        setTimeout(() => {
          isScrolling = false;
        }, 600);
      }
    };

    window.addEventListener('wheel', scrollHandler);
    window.addEventListener('touchstart', touchStartHandler);
    window.addEventListener('touchend', touchEndHandler);

    sections[currentSectionIndex].classList.add('active');

    return () => {
      window.removeEventListener('wheel', scrollHandler);
      window.removeEventListener('touchstart', touchStartHandler);
      window.removeEventListener('touchend', touchEndHandler);
    };
  }, []);
};

export default useFullPageScroll;