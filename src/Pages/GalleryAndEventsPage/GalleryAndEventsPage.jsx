import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HeroSection from "@components/Shared/HeroSection/HeroSection";
import heroImg from "@assets/images/Campus_images/CampusGallery_images/campus11.jpg"

const GalleryAndEventsPage = () => {
  return (
    <div>
     <section className="">
       <HeroSection
        title="Gallery & Events"
        subtitle="কলেজ জীবনের স্মৃতি ও আয়োজন একসাথে"
        bgImage={heroImg}
      />
     </section>
    </div>
  );
};
export default GalleryAndEventsPage;


