import React from "react";
import instituteFeaturesData from "@data/HomePageJsonData/instituteFeatures.json";
import InstituteFeatureCard from "@components/UI/Cards/InstituteFeaturesCard/InstituteFeaturesCard";
import SectionTitle from "@components/Shared/Titles/SectionTitle/SectionTitle";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

function InstituteFeatures() {
  const { features } = instituteFeaturesData.instituteFeaturesInfo;

  return (
    <div>
      <SectionTitle title={"বিশেষ সুবিধা ও বৈশিষ্ট্য"} />

      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-0 justify-center 
      items-center"
      >
        {features &&
          features.map((feature) => (
            <article key={feature.id} className="w-fit">
              <InstituteFeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </article>
          ))}
      </div>
    </div>
  );
}

export default InstituteFeatures;
