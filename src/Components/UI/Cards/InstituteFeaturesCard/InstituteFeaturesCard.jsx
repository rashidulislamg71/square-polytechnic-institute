import React from "react";
import SubTitle from "@components/Shared/Titles/SubTitle/SubTitle";
import * as FaIcons from "react-icons/fa";
import Tooltip from "@components/UI/Tooltip/Tooltip";

const InstituteFeatureCard = ({ icon, title, description }) => {
  const IconComponent = FaIcons[icon];

  return (
    <Tooltip text={description}>
      <div className="m-auto">
        {/* Icon */}
        <div className="flex justify-center items-center gap-2 ">
          {IconComponent && (
            <IconComponent className="text-2xl border-1 p-1 rounded text-green-600 transition-transform duration-300 hover:scale-110" />
          )}
          <SubTitle subTitle={title} className="text-[16px] cursor-pointer " />
        </div>
      </div>
    </Tooltip>
  );
};

export default InstituteFeatureCard;
