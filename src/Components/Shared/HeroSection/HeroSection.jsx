
import React from "react";
import ActionButton from "../../UI/ActionButton/ActionButton";

const HeroSection = ({ title, subtitle, extraText, buttonText, buttonLink, bgImage }) => {
  return (
    <section
      className="relative bg-cover bg-top h-[40vh] md:h-[60vh] flex mt-[-20px] items-center justify-center text-center text-white  opacity-90"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[500px] mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-green-600 ">{title}</h1>
        <p className="text-lg md:text-xl my-5">{subtitle}</p>
        <p className="text-[17px] md:text-lg mb-2">{extraText}</p>
        {buttonText && (
         <ActionButton text={buttonText} link={buttonLink} bg_color="bg-blue-600 hover:bg-blue-700" />
        )}
      </div>
    </section>
  );
}

export default HeroSection;