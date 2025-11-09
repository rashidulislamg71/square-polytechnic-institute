import React from "react";
import ActionButton from "@components/UI/ActionButton/ActionButton";

const HeroSection = ({
  title = "",
  subtitle = "",
  extraText = "",
  buttons = [],
  bgImage = "",
  overlayColor = "bg-black/40",
  textColor = "text-white",
  align = "center",
  height = "h-[60vh] md:min-h-[75vh] lg:min-h-[90vh]",
  position = "bg-center",
  overlay = true,
  className = "",

}) => {
  // Dynamic alignment class
  const textAlignClass =
    align === "left"
      ? "text-left items-start"
      : align === "right"
      ? "text-right items-end"
      : "text-center items-center";

  return (
    <section
      className={`relative flex justify-center ${textAlignClass} mt-[-16px] ${textColor} ${height} ${position} bg-cover object-top bg-no-repeat ${className}`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      {overlay && (
        <div
          className={`absolute inset-0 ${overlayColor}`}
          aria-hidden="true"
        ></div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-[900px] w-full mx-auto px-4 sm:px-6 lg:px-10 py-10 md:py-16 flex flex-col items-center justify-center">
        {/* Title */}
        {title && (
          <h1 className="text-3xl md:text-4xl font-bold leading-snug drop-shadow-lg mb-4 md:mb-6">
            {title}
          </h1>
        )}

        {/* Subtitle */}
        {subtitle && (
          <h2
            className="text-lg sm:text-xl md:text-2xl
          font-medium mb-3 md:mb-5 opacity-90"
          >
            {subtitle}
          </h2>
        )}

        {/* Extra Text */}
        {extraText && (
          <p className=" text-lg  max-w-[700px] leading-relaxed">{extraText}</p>
        )}

        {/* Buttons */}
        {buttons.length > 0 && (
          <div
            className={`flex flex-wrap gap-3 md:gap-5 mt-10 ${
              align === "center"
                ? "justify-center"
                : align === "right"
                ? "justify-end"
                : "justify-start"
            }`}
          >
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
