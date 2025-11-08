import React from "react";

const GeneralParagraphText = ({
  text,
  className = "text-justify md:text-center mt-[-40px] md:mt-[-30px] text-[16px]",
}) => {
  return (
    <p className={`text-gray-800 max-w-2xl m-auto   ${className} `}>{text}</p>
  );
};
export default GeneralParagraphText;
