import React from "react";
import instituteFeaturesData from "../../../Data/HomePageJsonData/instituteFeatures.json";
import InstituteFeatureCard from "../../UI/Cards/InstituteFeaturesCard/InstituteFeaturesCard";


function InstituteFeatures() {
  const { features } = instituteFeaturesData.instituteFeaturesInfo;

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {features &&
        features.map((feature) => (
          <article className=" md:w-[360px] lg:w-[490px]" key={feature.id}>

            <InstituteFeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </article>
        ))}
    </div>
  );
}

export default InstituteFeatures;
