

import React from "react";
import { FaHandshake } from "react-icons/fa";
import GeneralList from "@components/UI/GeneralList/GeneralList";
import DepartmentAboutsIcon from "./DepartmentAboutsIcon";
import TitleUI from "./TitleUI";

function IndustrialPartners({ data }) {
  if (!data) return null;

  const { title, description, companies } = data;
  return (
    <section>
      <div className="flex flex-col items-center text-center md:py-15 md:bg-green-50">
        {/* Icon Title*/}
        <DepartmentAboutsIcon icon={FaHandshake} />
        <TitleUI title={title} />

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
