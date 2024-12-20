'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface TestimonialItem {
  id: number;
  image: string;
  content: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    image: '/images/testimonial-1.webp',
    content: 'Chúng mình tình cờ gặp nhau khi làm việc tại hòn đảo xinh đẹp Cát Bà.',
  },
  {
    id: 2,
    image: '/images/testimonial-1.webp',
    content: 'Chúng mình tình cờ gặp nhau khi làm việc tại hòn đảo xinh đẹp Cát Bà.',
  },
  {
    id: 3,
    image: '/images/testimonial-1.webp',
    content: 'Chúng mình tình cờ gặp nhau khi làm việc tại hòn đảo xinh đẹp Cát Bà.',
  },
  {
    id: 4,
    image: '/images/testimonial-1.webp',
    content: 'Chúng mình tình cờ gặp nhau khi làm việc tại hòn đảo xinh đẹp Cát Bà.',
  },
  {
    id: 5,
    image: '/images/testimonial-1.webp',
    content: 'Chúng mình tình cờ gặp nhau khi làm việc tại hòn đảo xinh đẹp Cát Bà.',
  }
];

export const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1.5}
        pagination={{ clickable: true }}
        autoplay={true}
        loop={true}
        centeredSlides={true}
        breakpoints={{
          768: {
            slidesPerView: 1.5,
            centeredSlides: true,
            spaceBetween: 10
          },
          1024: {
            slidesPerView: 3.5,
            centeredSlides: true,
            spaceBetween: 50
          }
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial-card">
              <div className="testimonial-image">
                <Image
                  src={testimonial.image}
                  alt="testimonial"
                  width={400}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="testimonial-content">
                <p className="testimonial-text">{testimonial.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}; 