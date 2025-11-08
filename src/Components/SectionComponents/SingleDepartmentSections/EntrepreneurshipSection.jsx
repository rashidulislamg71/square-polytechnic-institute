import React from "react";
import GeneralList from "@components/UI/GeneralList/GeneralList";
import { GiPodiumWinner } from "react-icons/gi";
import DepartmentAboutsIcon from "./DepartmentAboutsIcon";
import TitleUI from "./TitleUI.jsx";

function EntrepreneurshipSection({ data }) {
  if (!data) return null;
  const { title, description, ideas } = data;

  return (
    <div
      className="flex flex-col items-center text-center
       md:py-15 md:bg-green-50"
    >
      {/* Icon & title */}
      <DepartmentAboutsIcon icon={GiPodiumWinner} />
      <TitleUI title={title} />
      {/* Description */}
      <p className="max-w-3xl text-gray-700 mb-6">{description}</p>

      {/* Companies List */}
      <div className="bg-white shadow-md rounded py-4 px-2 md:p-6 text-left max-w-3xl w-full">
        <GeneralList items={ideas} />
      </div>
    </div>
  );
}

export default EntrepreneurshipSection;
