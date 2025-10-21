import React from "react";
import GeneralList from "@components/UI/GeneralList/GeneralList";
import DepartmentAboutsIcon from "./DepartmentAboutsIcon";
import { GiEnlightenment } from "react-icons/gi";
import TitleUI from "./TitleUI";

function WhySquarePolytechnicSection({ data }) {
  if (!data) return null;

  const { title, points } = data;

  return (
    <section>
      <div className="flex flex-col items-center md:items-start">
        <DepartmentAboutsIcon icon={GiEnlightenment} />
        <TitleUI title={title} />
      </div>
      <GeneralList items={points} />
    </section>
  );
}

export default WhySquarePolytechnicSection;
