import React from "react";

const VideoPlayer = ({
  type = "local",
  src,
  title = "Video Player",
  controls = true,
  muted = true,
  loop = false,
  poster = "",
  className = "",
  height = "400px", // default height
  width = "100%",  // default width
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded shadow-lg ${className}`}
      style={{ height, width }}
    >
      {type === "youtube" ? (
        <iframe
          src={src}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      ) : (
        <video
          src={src}
          controls={controls}
          loop={loop}
          autoPlay={false}
          playsInline
          poster={poster}
          
        />
      )}
    </div>
  );
};

export default VideoPlayer;
