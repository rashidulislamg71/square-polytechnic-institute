import React from "react";

const YoutubeVideo = ({
  src,
  width = "100%",
  height = "auto",
  className = "",
  title = "Square Polytechnic",
}) => {
  return (
    <div
      className={`relative overflow-hidden ${className} `}
      style={{ width, height }}
    >
      <div className="aspect-video">
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
          allowFullScreen
          className="w-full h-full rounded shadow-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubeVideo;
