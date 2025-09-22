
// src/components/InfoItem.jsx
import React from "react";

const InfoItem = ({ icon: Icon, label, iconSize, textSize }) => {
  return (
    <div className="flex items-center gap-2 text-gray-500 ">
      <div
        className="text-green-600"
        style={{ fontSize: iconSize || '20px' }}
      >
        {Icon && <Icon />}
      </div>
      <span className="text-base font-medium" style={{fontSize: textSize || "16px"}}>{label}</span>
    </div>
  );
};

export default InfoItem;
