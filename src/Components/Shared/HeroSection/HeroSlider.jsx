
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ActionButton from "@components/UI/ActionButton/ActionButton";

const HeroSlider = ({ slides, className = "" }) => {
  return (
    <div className={`w-full relative ${className}`}>
      <Swiper
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000, // 3s
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 text-center text-white max-w-2xl">
                <h1 className="text-3xl md:text-5xl font-bold">
                  {slide.title}
                </h1>
                <p className="mt-4 mb-4 text-lg md:text-xl">{slide.subtitle}</p>
                {slide.buttonText && (
                  <ActionButton text={slide.buttonText} link={"#"} />
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
