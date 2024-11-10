'use client';

import React, { useEffect } from 'react';

const OnePageScroll: React.FC = () => {
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      const sections = document.querySelectorAll('.page-section');
      const currentSection = Math.round(window.scrollY / window.innerHeight);
      const direction = event.deltaY > 0 ? 1 : -1;
      const nextSection = Math.min(Math.max(currentSection + direction, 0), sections.length - 1);
      window.scrollTo({
        top: nextSection * window.innerHeight,
        behavior: 'smooth',
      });
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return null;
};

export default OnePageScroll; 