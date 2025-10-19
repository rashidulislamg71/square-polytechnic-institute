import React from "react";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import GeneralIcons from "../../Icons/GeneralIcons/GeneralIcons";

const GeneralList = ({ items = [], idColon = false, className = "text-gray-700" }) => {
  return (
    <div>
      <ul className="space-y-1">
        {items.map((data, index) => {
          const [beforeColon, ...afterParts] = data.split(":");
          const afterColon = afterParts.join(":").trim();

          return (
            <li
              key={index}
              className={`flex items-start gap-2 text-sm md:text-[16px] ${className}`}
            >
              <GeneralIcons
                icon={RiCheckboxMultipleBlankFill}
                className="text-green-600 mt-1"
              />

              {idColon ? (
                <span>
                  <strong>{beforeColon.trim()}</strong>
                  {afterColon && `: ${afterColon}`}
                </span>
              ) : (
                <span>{data}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GeneralList;
