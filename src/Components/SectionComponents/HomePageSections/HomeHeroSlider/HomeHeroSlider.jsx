import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

import heroImage1 from "../../../../assets/images/home_hero_img/bg_1.png";
import heroImage2 from "../../../../assets/images/home_hero_img/bg_7.png";
import heroImage3 from "../../../../assets/images/home_hero_img/bg_3.png";
import heroImage4 from "../../../../assets/images/home_hero_img/bg_4.png";

import { Autoplay, EffectFade } from "swiper/modules";
import { AdmissionBannerContent_1 } from "../../../AdmissionTimeBannerContent/admissionBannerContnet-1";
import { useAdmissionStatus } from "../../../../hooks/useAdmissionStatus";
import { HomeHeroContent } from "./HomeHeroContent";

const images = [heroImage1, heroImage2, heroImage3, heroImage4];

const HomeHeroSlider = () => {
  const admission = useAdmissionStatus();
  return (
    <div className="relative w-full h-[600px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={2000}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[EffectFade, Autoplay]}
        className="w-full h-full"
      >
        {admission
          ? images.map((img, index) => (
              <SwiperSlide key={index}>
                <AdmissionBannerContent_1 sliderImage={img} index={index} />
              </SwiperSlide>
            ))
          : images.map((img, index) => (
              <SwiperSlide key={index}>
                <HomeHeroContent sliderImage={img} index={index} />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default HomeHeroSlider;
