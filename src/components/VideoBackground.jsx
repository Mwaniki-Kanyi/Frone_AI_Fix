import React, { useRef, useEffect } from 'react';

const VideoBackground = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Slightly slower for more cinematic feel
    }
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#080809]">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover scale-[1.01] opacity-70"
        src="/assets/intro.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#08080922] to-[#080809]" />
    </div>
  );
};

export default VideoBackground;
