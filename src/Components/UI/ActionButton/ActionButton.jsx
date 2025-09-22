import React from "react";
import { Link } from "react-router-dom";

const ActionButton = ({
  text,
  link,
  bg_color = "bg-[#00a63e]",
  fontSize = "text-[17px]",
}) => {
  return (
    <Link
      to={link}
      rel="noopener noreferrer"
      className={`
        inline-block
        hover:drop-shadow-[0_3px_3px_rgba(52,73,94,0.4)]
        ${bg_color}
        py-1.5
        px-4
        ${fontSize}
        text-white
        rounded
        cursor-pointer
        transition
        transform
        duration-200
        ease-in-out
        active:scale-110
        text-center
      `}
    >
      {text || "বিস্তারিত পড়ুন..."}
    </Link>
  );
};

export default ActionButton;
