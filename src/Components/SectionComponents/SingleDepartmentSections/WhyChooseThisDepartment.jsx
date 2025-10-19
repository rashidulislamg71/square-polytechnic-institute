import React from "react";

import SubTitle from "../../Shared/Titles/SubTitle/SubTitle";
import { FaBookReader } from "react-icons/fa";
import GeneralList from "../../UI/GeneralList/GeneralList";
import DepartmentAboutsIcon from "./DepartmentAboutsIcon";
function WhyChooseThisDepartment({ data }) {
  if (!data) return null;
  const { title, points } = data;

  return (
    <div className="mt-[-20px]  md:text-center w-full md:bg-green-50 md:p-12">
      <div className="text-center md:text-left">
        <DepartmentAboutsIcon icon={FaBookReader} />
        <div className="pb-1 mb-4 border-b-2 border-amber-400">
          <SubTitle subTitle={title} />
        </div>
      </div>
      <div>
        <GeneralList items={points} className="text-gray-600  " />
      </div>
    </div>
  );
}

export default WhyChooseThisDepartment;
