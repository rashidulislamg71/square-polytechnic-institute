import React from "react";
import instituteFeaturesData from "../../../Data/HomePageJsonData/instituteFeatures.json";
import InstituteFeatureCard from "../../UI/Cards/InstituteFeaturesCard/InstituteFeaturesCard";
import SectionTitle from "./../Titles/SectionTitle/SectionTitle";

function InstituteFeatures() {
  const { features } = instituteFeaturesData.instituteFeaturesInfo;

  return (
    <div>
      <SectionTitle title={"বিশেষ সুবিধা ও বৈশিষ্ট্য"} />

      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-0 justify-center items-center mt-[-10px] md:mt-0">
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
