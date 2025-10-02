// src/components/InfoItem.jsx
import React from "react";

const GeneralIcons = ({ icon: Icon, className = "text-[16px]" }) => {
  return (
    <div className="flex items-center gap-2 text-gray-500 ">
      <div className={`text-green-600 ${className}`}>{Icon && <Icon />}</div>
    </div>
  );
};

export default GeneralIcons;
