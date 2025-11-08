import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import heroImage1 from "../../../../assets/images/home_hero_img/square-admission.jpg";
import heroImage2 from "../../../../assets/images/home_hero_img/spacial-wordshop-square-polytechnic-bogura.jpg";
import heroImage3 from "../../../../assets/images/home_hero_img/bg_1.png";
import heroImage4 from "../../../../assets/images/home_hero_img/bg_7.png";
import heroImage5 from "../../../../assets/images/home_hero_img/entertinment-with-foodball-square-polytechnic-bogura.jpg";

import { AdmissionBannerContent_1 } from "@components/AdmissionTimeBannerContent/admissionBannerContnet-1";
import { useAdmissionStatus } from "@hooks/useAdmissionStatus";
import { HomeHeroContent } from "./HomeHeroContent";

const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5];

const HomeHeroSlider = () => {
  const isAdmissionOpen = useAdmissionStatus();

  return (
    <section className="relative w-full h-[280px] md:h-[400px] lg:h-[500px] overflow-hidden">
      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={2000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="h-full w-full"
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
      </Swiper>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HomeHeroSlider;
