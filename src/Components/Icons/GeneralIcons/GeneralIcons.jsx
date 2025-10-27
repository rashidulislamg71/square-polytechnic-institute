

import React from "react";

const GeneralIcons = ({ icon: Icon, className = "text-[16px]" }) => {
  return (
    <div className={`text-green-600 w-fit ${className}`}>{Icon && <Icon />}</div>
  );
};

export default GeneralIcons;
