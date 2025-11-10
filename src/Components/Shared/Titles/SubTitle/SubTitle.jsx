import React from "react";

const SubTitle = ({ subTitle, color = "text-teal-950", className = "text-xl " }) => {
  return (
    <h3
      className={`font-semibold  ${color}  ${className}`}
    >
      {subTitle}
    </h3>
  );
};

export default SubTitle;
