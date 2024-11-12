'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { WEDDING_DATE_GROOM_PARTY } from '@/lib/constants';
import { useScrollTransform } from '@/hooks/useScrollTransform';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const GroomParty: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isWeddingPassed, setIsWeddingPassed] = useState(false);

  const [showMapNhaTrai, setShowMapNhaTrai] = useState(false);

  const { translateX, elementRef } = useScrollTransform('groom');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingTime = new Date(WEDDING_DATE_GROOM_PARTY).getTime();
      const now = new Date().getTime();
      const difference = weddingTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
        setIsWeddingPassed(false);
      } else {
        setIsWeddingPassed(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  return (
    <div className="wedding-details groom-party">
      <div className="details-grid">
        <div className="detail-card">
            <div className='detail-card-image'>
                <div 
                className='detail-transform'
                ref={elementRef}
                style={{
                transform: `translate3d(${translateX}px, 0px, 0px)`,
                transition: 'transform 0.1s ease-out'
                }}
                >
                    <Image 
                    src="/images/event-1.webp"
                    alt="Groom"
                    width={600}
                    height={800}
                    objectFit="cover"
                    />
                </div>
            </div>
          
        </div>

        <div className="detail-card">
          <h3>Tiệc nhà trai</h3>
          <p className="time">11:30 06/12/2024</p>
          <div className="divider">
            <Image 
              src="/images/flower-divider.png"
              alt="divider"
              width={50}
              height={100}
            />
          </div>
          <p className="location">
            Trung tâm hội nghị tiệc cưới Minh Châu Việt (Sảnh C)
          </p>
          {!isWeddingPassed && (
        <div className="countdown">
          <div className="countdown-item">
            <span className="number">{formatNumber(timeLeft.days)}</span>
            <span className="label">Days</span>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <span className="number">{formatNumber(timeLeft.hours)}</span>
            <span className="label">Hours</span>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <span className="number">{formatNumber(timeLeft.minutes)}</span>
            <span className="label">Minutes</span>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <span className="number">{formatNumber(timeLeft.seconds)}</span>
            <span className="label">Seconds</span>
          </div>
        </div>
      )}
          <button className="rsvp-button" onClick={() => setShowMapNhaTrai(true)}>
            Xem bản đồ
          </button>
          {showMapNhaTrai && (
                <div className="map-modal">
                <div className="map-modal-content">
                    <button className="close-modal" onClick={() => setShowMapNhaTrai(false)}>×</button>
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.279054117643!2d108.20932287583118!3d16.051002639924217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219b85cefa3f5%3A0xf3ebcf4b0fde40a8!2zVHJ1bmcgdMOibSBI4buZaSBuZ2jhu4smVGnhu4djIGPGsOG7m2kgTWluaCBDaMOidSBWaeG7h3Q!5e0!3m2!1svi!2s!4v1687706542355!5m2!1svi!2s"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Bản đồ nhà trai"
                    />
                </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default GroomParty; 