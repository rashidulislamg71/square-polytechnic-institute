import React from "react";

import { FaBookReader } from "react-icons/fa";
import GeneralList from "@components/UI/GeneralList/GeneralList";
import DepartmentAboutsIcon from "./DepartmentAboutsIcon";
import TitleUI from "./TitleUI";

function WhyChooseThisDepartment({ data }) {
  if (!data) return null;
  const { title, points } = data;

  return (
    <div className="mt-[-20px]  md:text-center w-full md:bg-green-50 md:p-12">
      <div className="text-center md:text-left">
        <DepartmentAboutsIcon icon={FaBookReader} />
        <TitleUI title={title} />
      </div>
      <div>
        <GeneralList items={points} className="text-gray-600  " />
      </div>
    </div>
  );
}

export default WhyChooseThisDepartment;
