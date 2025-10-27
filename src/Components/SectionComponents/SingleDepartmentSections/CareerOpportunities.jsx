import React from "react";
import SubTitle from "@components/Shared/Titles/SubTitle/SubTitle";
import { FaBriefcase, FaFlag, FaGlobe, FaRocket } from "react-icons/fa";
import DepartmentAboutsIcon from "./DepartmentAboutsIcon";
import Card from "./Card";
import TitleUI from "./TitleUI";

function CareerOpportunities({ data }) {
  if (!data) return null;

  const { title, description, bangladesh, abroad } = data || {};
  return (
    <section>
      <div className="flex flex-col items-center max-w-xl mx-auto mb-12">
        <div className="text-center">
          <DepartmentAboutsIcon icon={FaBriefcase} />
          <TitleUI title={title} />
        </div>

        <p className="text-gray-700 text-center leading-relaxed">
          {description}
        </p>
      </div>

      {/* Career Cards */}
      <div className="m-auto flex flex-col md:flex-row gap-8 max-w-6xl mx-auto 
      mt-[-25px] ">
        {/* Bangladesh Career */}

        <Card
          icon={FaFlag}
          title={bangladesh.title}
          items={bangladesh.points}
        />

        {/* Abroad Career */}
        <Card icon={FaGlobe} title={abroad.title} items={abroad.points} />
      </div>
    </section>
  );
}

export default CareerOpportunities;
