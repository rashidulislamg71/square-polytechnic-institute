import React, { useEffect, useRef } from "react";

const LocalVideo = ({
  src,
  width = "100%",
  height = "auto",
  controls = true,
  loop = false,
  className = "",
  poster = "",
  title = "Square Polytechnic Institute",
}) => {
  const videoRef = useRef(null); // Reference to the video DOM element

  useEffect(() => {
    const videoElement = videoRef.current;

    // Create an IntersectionObserver
    // This observes whether the video is visible in the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            videoElement.play();
          } else {
            videoElement.pause();
          }
        });
      },
      {
        threshold: [0, 0.5, 1], // Observe visibility at 0%, 50%, and 100%
      }
    );

    // Start observing the video element
    if (videoElement) {
      observer.observe(videoElement);
    }

    //stop observing when the component unmounts
    return () => {
      if (videoElement) observer.unobserve(videoElement);
    };
  }, []);

  return (
    <div className={`${className}`} style={{ width, height }}>
      <video
        ref={videoRef}
        src={src}
        loop={loop}
        controls={controls}
        muted
        poster={poster}
        title={title}
        style={{ width: "100%" }}
        className="rounded shadow-lg object-cover"
      >
        {/* when browsers that don't support the video tag */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LocalVideo;
