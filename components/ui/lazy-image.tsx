'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}

export const LazyImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  objectFit = "cover",
  ...props
}: LazyImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("transition-opacity opacity-0 duration-[.3s]", className)}
      onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      style={{ objectFit }}
      {...props}
    />
  );
}; 