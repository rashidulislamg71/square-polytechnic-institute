import React from "react";
import ActionButton from "@components/UI/ActionButton/ActionButton";

export const HomeHeroContent = ({ sliderImage, index }) => {
  return (
    <div className="relative w-full h-full">
      {/* Background Image */}
      <img
        src={sliderImage}
        alt={`স্কয়ার পলিটেকনিক ইন্সটিটিউট ব্যানার square polytechnic bogura  ${
          index + 1
        }`}
        className="w-full h-full object-cover object-[center-top] transition-opacity duration-2000 ease-in-out brightness-75"
        loading="lazy"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/0"></div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 animate-fadeIn">
        {/* Banner Title */}
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-900 text-[23px] md:text-[40px] font-extrabold mb-2 z-10 drop-shadow-lg">
          {/* প্রযুক্তির পথে আপনার প্রথম পদক্ষেপ! */}
        </h1>

        {/* Banner Description */}
        <div className="text-[#e5ebea] text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed max-w-xl z-10 font-Hind Siliguri">
          <p>
            {/* আধুনিক প্রযুক্তি শিক্ষা ও হাতে-কলমে প্রশিক্ষণের মাধ্যমে দক্ষ
            প্রকৌশলী গড়ে তোলার লক্ষ্যেই আমাদের যাত্রা। */}
          </p>

          <div className="mt-3">
            {/* <ActionButton text="Apply Now" link="/admission" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
