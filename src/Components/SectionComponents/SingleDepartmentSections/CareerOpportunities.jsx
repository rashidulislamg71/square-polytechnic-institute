import React from "react";
import SubTitle from "../../Shared/Titles/SubTitle/SubTitle";
import { FaBriefcase, FaFlag, FaGlobe, FaRocket } from "react-icons/fa";
import DepartmentAboutsIcon from "./DepartmentAboutsIcon";
import Card from "./Card";

function CareerOpportunities({ data }) {
  if (!data) return null;

  const { title, description, bangladesh, abroad } = data || {};
  return (
    <section className="">
      {/* Section Header */}
      <div className="flex flex-col items-center max-w-xl mx-auto mb-12">
        <DepartmentAboutsIcon icon={FaBriefcase} />
        <div className="border-b-2 text-center md:text-left border-amber-500 pb-1 mb-3">
          <SubTitle subTitle={title} />
        </div>
        <p className="text-gray-700 text-center leading-relaxed">
          {description}
        </p>
      </div>

      {/* Career Cards */}
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto mt-[-25px] ">
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
