'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface MoneyBoxProps {
  name: string;
  bankName: string;
  accountNumber: string;
  image: string;
  hoverImage: string;
  momo?: string;
}

const MoneyBoxCard: React.FC<MoneyBoxProps> = ({ name, bankName, accountNumber, image, hoverImage, momo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="money-box-card">
      <div 
        className="money-box-image"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(!isHovered)}
      >
        <div className={`image-container ${isHovered ? 'hovered' : ''}`}>
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            className="avatar primary-image"
          />
          <Image
            src={hoverImage}
            alt={`${name} hover`}
            width={200}
            height={200}
            className="avatar secondary-image"
          />
        </div>
      </div>
      <div className="money-box-info">
        <p>{bankName}</p>
        <p>{name}</p>
        <p>{accountNumber}</p>
        {momo && <p>Momo: {momo}</p>}
      </div>
    </div>
  );
};

export const MoneyBox = () => {
  return (
    <div className="money-box-section">
      <h1>Hộp mừng cưới</h1>
      <div className="line"></div>
      <p className="subtitle">
        Nếu có thể, bạn hãy tới tham dự Đám cưới, chung vui và Mừng cưới trực tiếp cho chúng mình nha ^^. Cảm ơn bạn rất nhiều!
      </p>
      <div className="money-box-grid">
        <MoneyBoxCard
          name="Võ Ngọc Minh Thông"
          bankName="TP Bank"
          accountNumber="0001543552"
          image="/images/our-story-1.webp"
          hoverImage="/images/QR.webp"
        />
        <MoneyBoxCard
          name="Phạm Thuỳ Dung"
          bankName="TP Bank"
          accountNumber="30328987696"
          momo="meoconlonton"
          image="/images/our-story-2.webp"
          hoverImage="/images/QR.webp"
        />
      </div>
    </div>
  );
}; 