import React from "react";
import SubTitle from "../../Shared/Titles/SubTitle/SubTitle";
import { FaHandshake } from "react-icons/fa";
import GeneralList from "../../UI/GeneralList/GeneralList";
import DepartmentAboutsIcon from "./DepartmentAboutsIcon";

function IndustrialPartners({ data }) {
  if (!data) return null;

  const { title, description, companies } = data;
  return (
    <section>
      <div className="flex flex-col items-center text-center md:py-10 md:bg-green-50">
        {/* Icon */}
        <DepartmentAboutsIcon icon={FaHandshake} />
        {/* Title */}
        <div className="border-b-2 border-amber-400 pb-1 mb-4">
          <SubTitle subTitle={title} />
        </div>

        {/* Description */}
        <p className="max-w-3xl text-gray-700 mb-6">{description}</p>

        {/* Companies List */}
        <div className="bg-white shadow-md rounded py-4 px-2 md:p-6 text-left max-w-3xl w-full">
          <GeneralList items={companies} />
        </div>
      </div>
    </section>
  );
}

export default IndustrialPartners;
