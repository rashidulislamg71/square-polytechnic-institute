import React, { useState } from "react";
import SectionTitle from "../../../Shared/Titles/SectionTitle/SectionTitle";
import GeneralParagraphText from "../../../Shared/GeneralParagraphText/GeneralParagraphText";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Plugins
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Share from "yet-another-react-lightbox/plugins/share";
// import "yet-another-react-lightbox/plugins/share.css";

// Images import
import campus1 from "../../../../assets/images/Campus_images/CampusGallery_images/campus1.jpg";
import campus2 from "../../../../assets/images/Campus_images/CampusGallery_images/campus2.png";
import campus3 from "../../../../assets/images/Campus_images/CampusGallery_images/campus3.png";
import campus4 from "../../../../assets/images/Campus_images/CampusGallery_images/campus4.jpg";
import campus5 from "../../../../assets/images/Campus_images/CampusGallery_images/campus5.jpg";
import campus6 from "../../../../assets/images/Campus_images/CampusGallery_images/campus6.jpg";
import campus7 from "../../../../assets/images/Campus_images/CampusGallery_images/campus7.jpg";
import campus8 from "../../../../assets/images/Campus_images/CampusGallery_images/campus8.jpg";
import campus9 from "../../../../assets/images/Campus_images/CampusGallery_images/campus9.jpg";
import campus10 from "../../../../assets/images/Campus_images/CampusGallery_images/campus10.jpg";
import campus11 from "../../../../assets/images/Campus_images/CampusGallery_images/campus11.jpg";
import campus12 from "../../../../assets/images/Campus_images/CampusGallery_images/campus12.jpg";

const campusImageGallery = [
  { src: campus1, title: "ক্লাসরুম" },
  { src: campus2, title: "ল্যাবরেটরি" },
  { src: campus3, title: "লাইব্রেরি" },
  { src: campus4, title: "কমন এরিয়া" },
  { src: campus5, title: "খেলার মাঠ" },
  { src: campus6, title: "কম্পিউটার ল্যাব" },
  { src: campus7, title: "ইলেকট্রিক্যাল ল্যাব" },
  { src: campus8, title: "মেকানিক্যাল ওয়ার্কশপ" },
  { src: campus9, title: "টেক্সটাইল ল্যাব" },
  { src: campus10, title: "স্টুডেন্ট এক্টিভিটি" },
  { src: campus11, title: "সাংস্কৃতিক অনুষ্ঠান" },
  { src: campus12, title: "অ্যাডমিন ব্লক" },
];

const CampusGallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-white">
      <SectionTitle title={"ক্যাম্পাস গ্যালারি"} />
      <GeneralParagraphText text={"আমাদের ক্যাম্পাসের বিভিন্ন স্থানের ছবি দেখুন।"} />

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {campusImageGallery.map((img, idx) => (
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
        slides={campusImageGallery.map((img) => ({
          src: img.src,
          description: img.title,
        }))}
        plugins={[Captions, Zoom, Share]}
        captions={{ descriptionTextAlign: "center" }}
        zoom={{ maxZoomPixelRatio: 3, zoomInMultiplier: 1.5 }}
        share={{
          url: (slide) => slide.src,
          title: "Square Polytechnic Institute - Campus Gallery",
          description: "আমাদের ক্যাম্পাসের বিভিন্ন স্থানের ছবি দেখুন।",
        }}
      />
    </section>
  );
};

export default CampusGallery;
