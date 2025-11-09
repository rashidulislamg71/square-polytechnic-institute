import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import heroImage1 from "../../../../assets/images/home_hero_img/square-admission.jpg";
import heroImage2 from "../../../../assets/images/home_hero_img/spacial-wordshop-square-polytechnic-bogura.jpg";
import heroImage3 from "../../../../assets/images/home_hero_img/bg_1.png";
import heroImage4 from "../../../../assets/images/home_hero_img/bg_7.png";
import heroImage5 from "../../../../assets/images/home_hero_img/entertinment-with-foodball-square-polytechnic-bogura.jpg";
import heroImage6 from "../../../../assets/images/home_hero_img/award.jpg";
import heroImage7 from "../../../../assets/images/home_hero_img/lab.jpeg";
import heroImage8 from "../../../../assets/images/home_hero_img/outdoor.jpeg";
import heroImage9 from "../../../../assets/images/home_hero_img/oriantion.jpg";

import { AdmissionBannerContent_1 } from "@components/AdmissionTimeBannerContent/admissionBannerContnet-1";
import { useAdmissionStatus } from "@hooks/useAdmissionStatus";
import { HomeHeroContent } from "./HomeHeroContent";

// create a arry for slide image
const heroImages = [
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  heroImage6,
  heroImage7,
  heroImage8,
  heroImage9,
];

const HomeHeroSlider = () => {
  const isAdmissionOpen = useAdmissionStatus();

  return (
    <section className="relative w-full h-[280px] md:h-[400px] lg:h-[500px] overflow-hidden">
      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[EffectFade, Navigation, Autoplay]}
        className="h-full w-full relative"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="block absolute inset-0">
              {isAdmissionOpen ? (
                <AdmissionBannerContent_1 sliderImage={image} index={index} />
              ) : (
                <HomeHeroContent sliderImage={image} index={index} />
              )}
            </div>
          </SwiperSlide>
        ))}
        {/* Custom Navigation Buttons */}
        <div className="custom-prev absolute top-1/2 left-5 z-10 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full cursor-pointer hover:bg-black/60 transition">
          ❮
        </div>
        <div className="custom-next absolute top-1/2 right-5 z-10 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full cursor-pointer hover:bg-black/60 transition">
          ❯
        </div>
      </Swiper>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HomeHeroSlider;
