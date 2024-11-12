'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.log("Autoplay prevented:", error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/media/cuoianhdi.mp3"
        loop
      />
      <div 
        className="fixed bottom-4 left-4 z-50 cursor-pointer hover:opacity-80 transition-opacity audio-control"
        onClick={togglePlay}
      >
        <div className="playerIcon">
            <Image
            src={isPlaying ? '/media/play-on.svg' : '/media/play-off.svg'}
            alt="music control"
            width={25}
            height={27}
            />
        </div>
      </div>
    </>
  );
}; 