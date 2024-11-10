import React from 'react';
import Banner from '../components/ui/banner';
import OurStory from '../components/ui/our-story';
import GroomParty from '../components/ui/groom-party';
import { BrideParty } from '@/components/ui/bride-party';
import { Testimonial } from '@/components/ui/testimonial';
import { Gallery } from '@/components/ui/gallery';
import { MoneyBox } from '@/components/ui/money-box';

export default function Home() {
  return (
    <main>
      <section className="page-section">
        <Banner />
      </section>
      <section className="page-section" id="our-story">
        <OurStory />
      </section>
      <section className="page-section" id="testimonial">
        <Testimonial />
      </section>
      <section className="page-section" id="bride-party">
        <BrideParty />
      </section>
      <section className="page-section" id="groom-party">
        <GroomParty />
      </section>
      <section className="page-section" id="gallery">
        <Gallery />
      </section>
      <section className="page-section" id="money-box">
        <MoneyBox />
      </section>
    </main>
  );
}
