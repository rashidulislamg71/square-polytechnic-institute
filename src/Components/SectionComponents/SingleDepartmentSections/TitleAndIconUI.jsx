import React from "react";
import SubTitle from "../../Shared/Titles/SubTitle/SubTitle";
import DepartmentAboutsIcon from "./DepartmentAboutsIcon";

function TitleAndIconUI({ icon, title, }) {
  return (
    <div className={`flex flex-col`}>
      {/* 🔹 Icon will render only if passed */}
      {icon && <DepartmentAboutsIcon icon={icon}  />}

      {/* 🔹 Title */}
      <div className="mt-2 mb-3 border-b-2 text-center border-amber-400 inline-block px-3 pb-1">
        <SubTitle subTitle={title} />
      </div>
    </div>
  );
}

export default TitleAndIconUI;
