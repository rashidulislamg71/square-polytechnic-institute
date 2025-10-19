import React from "react";
import GeneralList from "./../../UI/GeneralList/GeneralList";
import SubTitle from "./../../Shared/Titles/SubTitle/SubTitle";
import DepartmentAboutsIcon from "./DepartmentAboutsIcon";
import { GiEnlightenment } from "react-icons/gi";

function WhySquarePolytechnicSection({ data }) {
  if (!data) return null;

  const { title, points } = data;

  return (
    <section className="space-y-4">
      <DepartmentAboutsIcon icon={GiEnlightenment} />

      <div className="">
        <SubTitle subTitle={title} />
      </div>

      <GeneralList items={points} />
    </section>
  );
}

export default WhySquarePolytechnicSection;
