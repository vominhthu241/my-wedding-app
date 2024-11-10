'use client';

import React, { useState } from 'react';

const TheDetails: React.FC = () => {
  const [showMapNhaTrai, setShowMapNhaTrai] = useState(false);
  const [showMapNhaGai, setShowMapNhaGai] = useState(false);

  return (
    <div className="the-details">
      <h1>The Details</h1>
      
      <div className="details-content">
        <div className="detail-item">
          <div className="detail-icon"></div>
          <h3>Tiệc nhà gái</h3>
          <p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.6 20 4 16.4 4 12C4 7.6 7.6 4 12 4C16.4 4 20 7.6 20 12C20 16.4 16.4 20 12 20Z" fill="rgb(176, 146, 89)"/>
              <path d="M13 7H11V13H17V11H13V7Z" fill="rgb(176, 146, 89)"/>
            </svg>
            <span>10:00 26/11/2024</span>
          </p>
          <p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="rgb(176, 146, 89)"/>
            </svg>
            <span>Hải Yến, Hải Triều, Tiên Lữ, Hưng Yên</span>
          </p>
          <button className="rsvp-button" onClick={() => setShowMapNhaGai(true)}>
            Xem bản đồ
          </button>
        </div>

        <div className="vertical-line"></div>

        <div className="detail-item">
          <div className="detail-icon"></div>
          <h3>Tiệc nhà trai</h3>
          <p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.6 20 4 16.4 4 12C4 7.6 7.6 4 12 4C16.4 4 20 7.6 20 12C20 16.4 16.4 20 12 20Z" fill="rgb(176, 146, 89)"/>
              <path d="M13 7H11V13H17V11H13V7Z" fill="rgb(176, 146, 89)"/>
            </svg>
            <span>11:30 06/12/2024</span>
          </p>
          <p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="rgb(176, 146, 89)"/>
            </svg>
            <span>Trung tâm hội nghị tiệc cưới Minh Châu Việt (Sảnh C) - 456 Nguyễn Tri Phương - Quận Hải Châu - Tp Đà Nẵng</span>
          </p>
          <button className="rsvp-button" onClick={() => setShowMapNhaTrai(true)}>
            Xem bản đồ
          </button>
        </div>
      </div>

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

      {showMapNhaGai && (
        <div className="map-modal">
          <div className="map-modal-content">
            <button className="close-modal" onClick={() => setShowMapNhaGai(false)}>×</button>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.459314046!2d106.07677937597505!3d20.815282693737785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135c2cd21c27f65%3A0x4c943f9d449bb054!2zSMOjaSBZ4bq_biwgVGnDqm4gTOG7rywgSMawbmcgWcOqbiwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1710170518404!5m2!1svi!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Bản đồ nhà gái"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TheDetails;