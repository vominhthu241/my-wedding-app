'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { getGalleryImages } from '@/lib/utils';
import { LazyImage } from '@/components/ui/lazy-image';

const TOTAL_IMAGES = 60; // Số lượng ảnh tối đa trong gallery
const galleryImages = getGalleryImages(TOTAL_IMAGES); // Lấy tất cả ảnh

export default function GalleryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <main className="gallery-page">
      <div className="gallery-header">
        <Link href="/" className="back-button">
          Trở về
        </Link>
        <h1>Album Hình Cưới</h1>
      </div>
      <div className="gallery-grid full">
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
              priority={index < 6}
            />
          </div>
        ))}
      </div>

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
    </main>
  );
} 