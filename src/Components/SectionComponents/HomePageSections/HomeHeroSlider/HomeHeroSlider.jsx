import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

import heroImage1 from "../../../../assets/images/home_hero_img/bg_1.png";
import heroImage2 from "../../../../assets/images/home_hero_img/bg_7.png";
import heroImage3 from "../../../../assets/images/home_hero_img/bg_3.png";
import heroImage4 from "../../../../assets/images/home_hero_img/bg_4.png";

// react incons
import { FaSquarePhone } from "react-icons/fa6";
// Swiper modules
import { Autoplay, EffectFade } from "swiper/modules";
// Education icon images
import school from "../../../../assets/images/education_icon_img/school.png";
import { ContactNumber } from "../../../UI/ContactNumber/ContactNumber";
import ActionButton from "../../../UI/ActionButton/ActionButton";
// Images array
const images = [heroImage1, heroImage2, heroImage3, heroImage4];

const HomeHeroSlider = () => {
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
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={img}
                alt={`ইনস্টিটিউট ${index + 1}`}
                className="w-full h-full object-cover transition-opacity duration-2000 ease-in-out brightness-75 blur-[3px]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 via-black/10 to-black/50 flex flex-col items-center justify-center text-center ">
                <h1 className="relative inline-block  text-transparent bg-clip-text bg-gradient-to-r from-emerald-400  to-cyan-400 text-[28px]  md:text-[48px] lg:text-[60px] font-bold ">
                  ভর্তি চলছে!
                  <img
                    className="absolute top-[-45px] left-[80%] w-[100px] rotate-20 float animate-bounce"
                    src={school}
                    alt="school"
                  />
                </h1>

                <div className=" bg-gray-900/35 p-2 md:p-8 w-full md:rounded-lg max-w-3xl delay-150 text-left">
                  <strong className=" text-[#EF7722] text-[20px] sm:text-[22px] md:text-[36px] lg:text[48px]  font-semibold fade-up">
                    ১০০% থেকে ৫০% পর্যন্ত ডিসকাউন্টে ভর্তির সীমিত সুযোগ!
                  </strong>

                  <div className="text-[#e5ebea] text-[14px] mt-3 sm:text-[16px] md:text-[18px] lg:text-[20px] ">
                    <p>
                      আর দেরি না করে আপনার স্বপ্ন পূরণের পথে এগিয়ে যান। আমাদের
                      প্রতিষ্ঠানে এখন ১০০% থেকে ৫০% পর্যন্ত বিশাল ডিসকাউন্ট
                      চলছে! এই সীমিত সময়ের অফারটি হাতছাড়া করবেন না।
                    </p>
                    <p>
                      ভর্তি হতে বা বিস্তারিত জানতে, নিচের বাটনে ক্লিক করুন।
                      অথবা, আমাদের সাথে কথা বলুতে নিচের নাম্বার কল করুন।
                    </p>
                  </div>

                  <div className="flex items-center mb-1 gap-2 mt-2 text-[16px] sm:text-[18px]  font-semibold text-white">
                    <span className="text-green-600">
                      <FaSquarePhone />
                    </span>
                    <ContactNumber
                      href="+8801760998164"
                      fontSize="lg"
                      color="green"
                      number="01760-998164"
                    />
                    |
                    <ContactNumber
                      href="+8801718043487"
                      fontSize="lg"
                      color="green"
                      number="01718-043487"
                    />
                  </div>
                  <span className="text-gray-400 fade-up">
                    <hr />
                  </span>
                  <div className=" fade-up mt-2 text-white font-medium text-[16px] sm:text-[18px] md:text-[20px]">
                    স্কয়ার পলিটেকনিক ইনস্টিটিউট <br />
                    <strong className="text-sm text-b">
                      গাড়িদাহ (RDA), শেরপুর, বগুড়া।
                    </strong>
                    <br />
                  </div>

                  {/* Buttons */}
                  <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
                    <div className="bg-[#e69113] rounded">
                      <ActionButton
                        link="/admission"
                        text={"এখনি ভর্তি হোন"}
                        bg_color="rgb(254, 154, 0)"
                       
                      />
                    </div>
                    <ActionButton
                      link="/admission"
                      text={"বিস্তারিত জানুন..."}
                     
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeHeroSlider;
