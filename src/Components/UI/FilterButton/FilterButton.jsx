import React from "react";

const FilterButton = ({ label, active, onClick }) => {
  const isActive = active === label;

  return (
    <button
      onClick={() => onClick(label)}
      className={`px-5 py-2 rounded-full cursor-pointer font-medium transition-all duration-300 text-sm md:text-base whitespace-nowrap shadow-md ${
        isActive
          ? "bg-amber-500 text-white scale-105 shadow-lg"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
    >
      {label}
    </button>
  );
};

export default FilterButton;
