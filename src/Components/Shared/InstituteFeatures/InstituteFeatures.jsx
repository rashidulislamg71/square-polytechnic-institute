import React from "react";
import instituteFeaturesData from "../../../Data/HomePageJsonData/instituteFeatures.json";
import InstituteFeatureCard from "../../UI/Cards/InstituteFeaturesCard/InstituteFeaturesCard";

function InstituteFeatures() {
  const { features } = instituteFeaturesData.instituteFeaturesInfo;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center p-4">
      {features &&
        features.map((feature) => (
          <article key={feature.id} className="w-full">
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
