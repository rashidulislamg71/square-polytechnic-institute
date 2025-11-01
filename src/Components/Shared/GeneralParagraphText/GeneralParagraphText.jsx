import React from "react";

const GeneralParagraphText = ({ text, className = "text-center mt-[-40px] md:mt-[-30px] text-sm md:text-[16px]" }) => {
  return (
    <p
      className={`text-gray-600 max-w-2xl m-auto  ${className} `}
    >
      {text}
    </p>
  );
};
export default GeneralParagraphText;
