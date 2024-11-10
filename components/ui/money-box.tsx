'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Copy } from 'lucide-react';
import { toast } from 'sonner';

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

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Đã sao chép số tài khoản');
    } catch (error) {
      console.log(error);
      toast.error('Không thể sao chép số tài khoản');
    }
  };

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
        <div 
          className="flex items-center justify-center gap-2 cursor-pointer hover:opacity-70"
          onClick={() => handleCopy(accountNumber)}
        >
          <p>{accountNumber}</p>
          <Copy className="h-4 w-4" />
        </div>
        {momo && (
          <div 
            className="flex items-center justify-center gap-2 cursor-pointer hover:opacity-70"
            onClick={() => handleCopy(momo)}
          >
            <p>Momo: {momo}</p>
            <Copy className="h-4 w-4" />
          </div>
        )}
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