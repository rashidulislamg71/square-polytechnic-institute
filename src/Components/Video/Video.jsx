// import React, { useRef, useEffect } from "react";

// const AutoPlayVideo = ({ src }) => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (videoRef.current) {
//             if (entry.isIntersecting) {
//               videoRef.current.play();
//             } else {
//               videoRef.current.pause();
//             }
//           }
//         });
//       },
//       { threshold: 0.5 } // 50% visible to play
//     );

//     if (videoRef.current) {
//       observer.observe(videoRef.current);
//     }

//     return () => {
//       if (videoRef.current) {
//         observer.unobserve(videoRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="w-full max-w-4xl mx-auto">
//       <div className="relative pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
//         <video
//           ref={videoRef}
//           src={src}
//           controls
//           muted
//           className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default AutoPlayVideo;

const Video = ({width = "100%", height = "500"}) => {
  return (
    <div className="flex justify-center w-full">
      {/* YouTube Embed */}
      <iframe
        width= {width}
        height= {height}
        src="https://www.youtube.com/embed/fGP6ppLtLQI"
        title="Square Polytechnic Institue Campus Video Tour"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg shadow-md"
      ></iframe>
    </div>
  );
};

export default Video;
