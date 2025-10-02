import React from "react";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import GeneralIcons from "../../Icons/GeneralIcons/GeneralIcons";

const GeneralList = ({ items, className = "" }) => {
  return (
    <div>
      <ul className="space-y-2">
        {items.map((data, index) => {
          const [beforeColon, afterColon] = data.split(":");
          return (
            <li
              key={index}
              className={`${className} text-sm md:text-[16px] text-gray-700 flex items-start gap-2`}
            >
              <GeneralIcons
                icon={RiCheckboxMultipleBlankFill}
                className="text-sm md:text-[16px] mt-0.5"
              />
              <span>
                <strong>{beforeColon}</strong>
                {afterColon && `:${afterColon}`}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GeneralList;
