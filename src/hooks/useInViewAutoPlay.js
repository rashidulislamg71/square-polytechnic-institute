

// ====================================================================
// useInViewAutoPlayVideo Hook
// --------------------------------------------------------------------
// This custom hook automatically controls a video element's playback
// based on its visibility in the viewport.
//
// Usage:
//   1. Create a ref for your video element using useRef()
//   2. Pass the ref to this hook
//   3. The video will automatically play when at least 50% visible
//      and pause when it is less visible or scrolled out of view.
// 
// Now used:
//   1. LocalVideo Component (that component run campus full video)
// ====================================================================

import { Component, useEffect } from "react";
const useInViewAutoPlayVideo = (videoRef) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              videoRef.current.play();
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: [0, 0.5, 1] } 
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [videoRef]);
};

export default useInViewAutoPlayVideo;
