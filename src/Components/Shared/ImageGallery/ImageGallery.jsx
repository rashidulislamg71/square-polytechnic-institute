import React from "react";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Plugins
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Share from "yet-another-react-lightbox/plugins/share";

function ImageGallery({images }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section >

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-md group"
            onClick={() => {
              setIndex(idx);
              setOpen(true);
            }}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 w-full bg-black/60 text-white text-sm text-center py-1 opacity-0 group-hover:opacity-100 transition">
              {img.title}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={images.map((img) => ({
          src: img.src,
          description: img.description,
        }))}
        plugins={[Captions, Zoom, Share]}
        captions={{ descriptionTextAlign: "center" }}
        zoom={{ maxZoomPixelRatio: 3, zoomInMultiplier: 1.5 }}
        share={{
          url: (slide) => slide.src,
          title: (slide) => slide.description,
          text: (slide) => `${slide.description}\n\nদেখুন এখানে: ${slide.src}`,
          embed: true,
          copy: true,
          onShare: (slide) => {
            if (navigator.share) {
              navigator.share({
                title: slide.description,
                text: `${slide.description}\n\nদেখুন এখানে:`,
                url: slide.src,
              });
            } else {
              navigator.clipboard.writeText(
                `${slide.description} - ${slide.src}`
              );
              alert("✅ লিংক কপি করা হয়েছে!");
            }
          },
        }}
      />
    </section>
  );
}

export default ImageGallery;
