import React from "react";
import SubTitle from "../../Shared/Titles/SubTitle/SubTitle";
import GeneralList from "../../UI/GeneralList/GeneralList";

const Card = ({
  icon,
  title,
  items,
  borderColor = "border-green-600",
  iconColor = "text-green-600",
  className = "",
}) => {
  return (
    <div className=" p-4 bg-white rounded shadow hover:shadow-md transition-all duration-300">
      {/* Icon & Title */}
      <div className={`flex flex-col gap-2  ${className}`}>
        {/* 🔹 Icon থাকবে শুধু তখনই, যখন icon prop দেওয়া হবে */}
        {icon && React.createElement(icon, {
          className: `text-3xl ${iconColor}`,
        })}
        <div className={`border-b-2 ${borderColor} inline-block mb-3`}>
          <SubTitle subTitle={title} />
        </div>
      </div>

      {/* 🔹 List */}
      <GeneralList items={items} />
    </div>
  );
};

export default Card;
