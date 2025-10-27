import React from "react";
import SubTitle from "@components/Shared/Titles/SubTitle/SubTitle";
import GeneralParagraphText from "@components/Shared/GeneralParagraphText/GeneralParagraphText";
import { FaGraduationCap, FaPlaneDeparture } from "react-icons/fa";
import { FaReadme } from "react-icons/fa6";

import DepartmentAboutsIcon from "./DepartmentAboutsIcon";
import Card from "./Card";
import TitleAndIconUI from "./TitleUI.jsx";
import TitleUI from "./TitleUI.jsx";

function HigherStudySection({ data }) {
  if (!data) return null;

  const { title, description, bangladesh, abroad } = data;

  return (
    <section>
      {/* Icon & title */}
      <div className="flex flex-col items-center">
        <DepartmentAboutsIcon icon={FaGraduationCap} />
        <TitleUI title={title} />
      </div>

      {/* Description */}
      <div className="mt-8 md:mt-10 max-w-3xl mx-auto ">
        <GeneralParagraphText text={description} />
      </div>

      {/* Two Columns */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-15 mt-10">
        {/*In bangladesh  */}
        <Card
          icon={FaReadme}
          title={bangladesh.title}
          items={bangladesh.points}
        />
        {/*Others Countrys  */}
        <Card
          icon={FaPlaneDeparture}
          title={abroad.title}
          items={abroad.points}
        />
      </div>
    </section>
  );
}

export default HigherStudySection;
