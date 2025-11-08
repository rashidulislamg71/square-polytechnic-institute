import React from "react";

const SubTitle = ({ subTitle, color = "text-[#122436]", className = "text-lg " }) => {
  return (
    <h3
      className={`font-semibold ${color} ${className}`}
    >
      {subTitle}
    </h3>
  );
};

export default SubTitle;
