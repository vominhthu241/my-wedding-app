import { useEffect, useState } from 'react';

interface ScrollTransformProps {
  inputRange: [number, number];  // Khoảng scroll [start, end]
  outputRange: [number, number]; // Khoảng transform [start, end]
  clamp?: boolean;              // Có giới hạn giá trị trong outputRange không
}

export const useScrollVerticalTransform = ({
  inputRange,
  outputRange,
  clamp = false
}: ScrollTransformProps): number => {
  const [transformValue, setTransformValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Tính tỉ lệ scroll trong khoảng input
      const scrollProgress = (scrollY - inputRange[0]) / (inputRange[1] - inputRange[0]);
      
      // Áp dụng tỉ lệ vào khoảng output
      let transform = outputRange[0] + (scrollProgress * (outputRange[1] - outputRange[0]));
      
      // Nếu có clamp, giới hạn giá trị trong khoảng output
      if (clamp) {
        transform = Math.max(outputRange[0], Math.min(outputRange[1], transform));
      }
      
      setTransformValue(transform);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Gọi handleScroll lần đầu để khởi tạo giá trị
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [inputRange, outputRange, clamp]);

  return transformValue;
}; 