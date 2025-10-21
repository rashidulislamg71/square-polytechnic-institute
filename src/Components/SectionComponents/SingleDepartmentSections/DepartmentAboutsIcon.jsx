import React from "react";

const DepartmentAboutsIcon = ({ icon, className = "" }) => {
  return (
    <div className="p-2 bg-white rounded
     shadow-md  border
     border-green-500 mb-2 inline-block">
      {icon &&
        React.createElement(icon, {
          className: `text-3xl text-green-600 animate-pulse ${className}`,
        })}
    </div>
  );
};

export default DepartmentAboutsIcon;
