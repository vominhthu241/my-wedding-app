import { useEffect, useRef, useState } from 'react';

export const useScrollTransform = (id: string) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const scrollPosition = window.scrollY;
        // Sử dụng id để tạo ra các giá trị transform khác nhau
        const offset = id === 'bride' ? 20 : Math.PI; // Độ lệch pha giữa 2 component
        const newTranslateX = Math.sin((scrollPosition * 0.003) + offset) * 10;
        setTranslateX(newTranslateX);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  return { translateX, elementRef };
}; 