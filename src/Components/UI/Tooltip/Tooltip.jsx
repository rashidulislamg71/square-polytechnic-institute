
import React from "react";
import { useTooltip } from "@hooks/useTooltip";

const Tooltip = ({ children, text }) => {
  const { isOpen, openTooltip, closeTooltip } = useTooltip();

  return (
    <div
      className="relative inline-block"
      onMouseEnter={openTooltip}
      onMouseLeave={closeTooltip}
    >
      {children}
      {isOpen && (
        <div className="w-[240px] absolute bottom-full left-37 -translate-x-1/2 mb-2
         bg-gray-800 text-white text-xs rounded 
         py-1 px-2 shadow-lg">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;