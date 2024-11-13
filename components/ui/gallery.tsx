'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { getGalleryImages } from '@/lib/utils';
import { LazyImage } from './lazy-image';

const galleryImages = getGalleryImages(15); // Chỉ lấy 3 ảnh cho trang chủ

export const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="gallery-section">
      <h1>Album Hình Cưới</h1>
      <div className="line"></div>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div 
            key={index} 
            className="gallery-item"
            onClick={() => openLightbox(index)}
          >
            <LazyImage
              src={image.src}
              alt={image.alt}
              width={400}
              height={image.height * (400 / image.width)}
              className="gallery-image"
              priority={index < 3}
            />
          </div>
        ))}
      </div>

      <Link href="/gallery" className="view-more-button">
        Xem thêm
      </Link>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={galleryImages}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
        }}
      />
    </div>
  );
}; 