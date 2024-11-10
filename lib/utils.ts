import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getGalleryImages = (length: number = 3) => {
  const galleryImages = Array.from({ length }, (_, i) => ({
    src: `/images/gallery/gallery-${i + 1}.webp`,
    width: i === 2 || i === 3 ? 600 : 800, // Ảnh đứng có width nhỏ hơn
    height: i === 2 || i === 3 ? 800 : 600, // Ảnh đứng có height lớn hơn
    alt: `Gallery Image ${i + 1}`
  }));

  return galleryImages;
};
