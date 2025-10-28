import React, { useRef } from "react";
import useInViewAutoPlayVideo from "@hooks/useInViewAutoPlay";

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
  // custom hook for video autoplay
  useInViewAutoPlayVideo(videoRef);

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
