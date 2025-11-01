import React, { useState } from "react";
import StudentsTestimonialCard from "./TestimonialCard";
import "./testimonial.css";

import student1 from "@assets/images/StudentTestimonial/student1.jpeg";
import student2 from "@assets/images/StudentTestimonial/student2.jpeg";
import student3 from "@assets/images/StudentTestimonial/student.jpeg";

import studntTestimonialsData from "@data/TestimonialJsonData/studentsData";

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Share from "yet-another-react-lightbox/plugins/share";

const images = {
  "student1.jpeg": student1,
  "student2.jpeg": student2,
  "student3.jpeg": student3,
};

function StudentsTestimonial() {
  const testimonials = studntTestimonialsData || [];
  const sliceTestimonial = testimonials.slice(0, 30);
  const testimonialsData = [...sliceTestimonial, ...sliceTestimonial];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = testimonialsData.map((student) => ({
    src: images[student.image],
    description: student.comment,
  }));

  const handleOpenLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section>
      <div className="wrapper px-0 overflow-hidden block select-none py-7 bg-green-100">
        <ul className="runer flex gap-5 [min-width:max-content]">
          {testimonialsData.map((student, idx) => {
            const image = images[student.image];
            return (
              <li key={idx} className="list-none flex-shrink-0">
                <StudentsTestimonialCard
                  index={idx}
                  image={image}
                  name={student.name}
                  department={student.department}
                  session={student.session}
                  comments={student.comment}
                  onSeeMore={handleOpenLightbox}
                />
              </li>
            );
          })}
        </ul>
      </div>

      {/* 🔹 Lightbox */}
      <Lightbox
        open={lightboxOpen}
        index={currentIndex}
        close={() => setLightboxOpen(false)}
        slides={slides}
        plugins={[Captions, Zoom, Share]}
        captions={{
          showToggle: false,
          descriptionTextAlign: "center",
        }}
        zoom={{ maxZoomPixelRatio: 3, zoomInMultiplier: 1.5 }}
      />
    </section>
  );
}

export default StudentsTestimonial;
