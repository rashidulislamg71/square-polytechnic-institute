import React from "react";
import ActionButton from "../../UI/ActionButton/ActionButton";

const HeroSection = ({
  title,
  subtitle,
  extraText,
  buttonText,
  buttonLink,
  buttonLink1,
  buttonText1,
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
        <p className="text-lg md:text-xl my-5">{subtitle}</p>
        <p className="text-[17px] md:text-lg mb-2">{extraText}</p>
        {buttonText && (
          <div className="space-x-4">
            <ActionButton
              text={buttonText}
              link={buttonLink}
              bg_color="bg-green-600 hover:bg-green-700"
            />
            <ActionButton
              text={buttonText1}
              link={buttonLink1}
              bg_color="bg-orange-600 hover:bg-orange-700"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
