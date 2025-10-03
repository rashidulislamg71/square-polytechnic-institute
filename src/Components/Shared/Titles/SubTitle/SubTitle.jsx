import React from "react";

const SubTitle = ({ subTitle, className = "text-[20px] " }) => {
  return (
    <h3
      className={`font-semibold text-[#122436] ${className}`}
    >
      {subTitle}
    </h3>
  );
};

export default SubTitle;
