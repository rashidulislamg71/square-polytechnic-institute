import React from "react";
import ActionButton from "@components/UI/ActionButton/ActionButton";

const HeroSection = ({
  title,
  subtitle,
  extraText,
  buttons,
  className = "bg-center",
  bgImage,
}) => {
  return (
    <section
      className={`relative bg-cover bg-center h-[40vh] md:h-[60vh] lg:h-[70vh] flex mt-[-25px] items-center justify-center text-center text-white  opacity-90 ${className} `}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[700px] mx-auto px-4">
        <h1 className=" leading-relaxed text-2xl md:text-3xl lg:text-4xl font-bold text-green-600 ">
          {title}
        </h1>
        <p className="text-lg md:text-xl my-5 ">{subtitle}</p>
        <p className="text-[17px] md:text-lg mb-2">{extraText}</p>
        {buttons && buttons.length > 0 && (
          <div className="flex justify-center flex-wrap gap-3 md:gap-6">
            {/* flex container for all buttons */}
            {buttons.map((btnData, idx) => (
              <ActionButton
                key={idx}
                text={btnData.text}
                link={btnData.link}
                bg_color={btnData.btnBgColor}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
