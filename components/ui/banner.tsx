'use client';

import React from 'react';
import { useScrollVerticalTransform } from '@/hooks/useScrollVerticalTransform';
import Image from 'next/image';

const Banner: React.FC = () => {
  const currentDate = new Date();
  const weddingDate = new Date('2024-12-06');
  const daysSinceWedding = Math.floor((currentDate.getTime() - weddingDate.getTime()) / (1000 * 60 * 60 * 24));

  const isBeforeWedding = currentDate < weddingDate;
  const bannerText = isBeforeWedding ? (
    <>
      <h6>Cùng với gia đình</h6>
      <h1>Thông & Dung</h1>
      <h6>thân mời bạn đến dự lễ cưới của chúng mình</h6>
      <div className='line'></div>
    </>
  ) : (
    <>
        <h6>Chúng mình đã kết hôn được {daysSinceWedding} ngày</h6>
        <h2>We got married!</h2>
        <h6>Thứ sáu | 06-12-2024 | 9:00 sáng</h6>
        <div className='line'></div>
    </>
  );

  const scrollToDetails = () => {
    const detailsSection = document.getElementById('bride-party');
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const transformY = useScrollVerticalTransform({
    inputRange: [0, 800],
    outputRange: [0, 400],
    clamp: true
  });

  const bannerStyle = {
    transform: `translate3d(0, ${transformY}px, 0)`
  };

  return (
    <div className="banner">
        <div className="banner-image" style={bannerStyle}>
            <Image 
                src="/images/banner.webp"
                alt="Wedding Banner"
                fill
                priority
                quality={100}
                sizes="100vw"
                className="object-cover"
            />
        </div>
        <div className='banner-svg'>
            <svg preserveAspectRatio="none" data-bbox="10 20 180 161" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="10 20 180 161" role="presentation" aria-hidden="true">
              <g><polygon points="190,33 177,33 177,20 25,20 25,33 10,33 10,169 25,169 25,181 177,181 177,169 190,169 "></polygon></g>
            </svg>
        </div>
        <div className="banner-text">
            {bannerText}
            <button onClick={scrollToDetails}>
                Xem chi tiết
            </button>
        </div>
    </div>
  );
};

export default Banner; 