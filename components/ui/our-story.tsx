'use client';

import React from 'react';
import { LazyImage } from './lazy-image';

const OurStory: React.FC = () => {
  return (
    <div className="our-story">
      <h1>Cặp đôi</h1>
      <div className="line"></div>
      <div className="story-content">
        <div className="story-images">
            <div className='story-wrapper'>
                <div className="story-image-container">
                    <div className='story-image-bg'>
                        <div className='container-bg'></div>
                    </div>
                    <div className="story-image">
                        <LazyImage 
                            src="/images/our-story-1.webp"
                            alt="Our Story 1"
                            width={200}
                            height={200}
                            className="story-image"
                        />
                    </div>
                </div>

                <div className="story-text">
                    <p>Chú rể Minh Thông là một người hiền lành nhưng nói nhiều. Thích nấu ăn, thích kiếm tiền và tiêu tiền. Đặc biệt là &apos;Yêu Mèo&apos;. Luôn coi trọng tình cảm và yêu thương gia đình. Đối với mình &apos;Gia đình là trên hết&apos;</p>
                </div>
            </div>
            
            <div className='story-wrapper'>
                <div className="story-image-container">
                    <div className='story-image-bg'>
                        <div className='container-bg'></div>
                    </div>
                    <div className="story-image">
                        <LazyImage 
                            src="/images/our-story-2.webp"
                            alt="Our Story 2"
                            width={200}
                            height={200}
                            className="story-image"
                        />
                    </div>
                </div>

                <div className="story-text">
                    <p>Cô dâu Thuỳ Dung là một người cool ngầu nhưng lại sống nội tâm và hay khóc thầm, không thích đọc sách nhưng thích mua, thích đi du lịch, thích trồng hoa. Và mình cũng &apos;cực thích Chó&apos; nữa</p>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default OurStory; 