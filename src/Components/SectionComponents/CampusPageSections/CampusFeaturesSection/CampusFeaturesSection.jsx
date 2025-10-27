// src/Components/SectionComponents/Campus/CampusFeatures.jsx

import React from "react";
import { campusFeaturesData } from "../../../../Data/CampusPageData/CampusFeaturesSectionData";
import SectionTitle from "../../../Shared/Titles/SectionTitle/SectionTitle";
import GeneralParagraphText from "../../../Shared/GeneralParagraphText/GeneralParagraphText";
import GeneralIcons from "../../../Icons/GeneralIcons/GeneralIcons";
import SubTitle from "../../../Shared/Titles/SubTitle/SubTitle";

const CampusFeaturesSection = () => {
  const { descriptionParagraphs, featuresList, summaryText } =
    campusFeaturesData;

  return (
    <section
      className="px-4 md:px-10 lg:px-20 py-12 bg-gray-50"
      aria-labelledby="campus-features-title"
    >
      {/* Section Title */}
      <SectionTitle
        title="আধুনিক অবকাঠামো ও সুবিধাসমূহ"
        id="campus-features-title"
      />

      {/* Campus Description */}
      <div className="mt-[-30px] md:mt-[-0px] ">
        {descriptionParagraphs.map((paragraph, idx) => (
          <GeneralParagraphText key={idx} text={paragraph} />
        ))}
      </div>

      {/* Features Cards */}
      <div className="mt-[-30px] md:mt-[-0px] grid grid-cols-1 md:grid-cols-2 gap-3">
        {featuresList.map((feature, idx) => {
          const IconComponent = feature.icon;
          return (
            <article
              key={idx}
              className="lg:flex lg:items-start text-center lg:text-start gap-2 p-3 bg-white rounded-lg shadow-sm"
              aria-label={feature.title}
            >
              {/* Icon */}
              {IconComponent && (
                <GeneralIcons
                  icon={IconComponent}
                  className="m-auto lg:m-0 text-3xl md:border-2 border-gray-200 p-2 rounded"
                />
              )}

              {/* Feature Text */}
              <div className="flex flex-col">
                <SubTitle subTitle={feature.title} className="text-lg" />
                <p className="text-gray-600 text-sm mt-1">{feature.details}</p>
              </div>
            </article>
          );
        })}
      </div>

      {/* Summary */}
      <p className="mt-10 text-center text-orange-600 font-medium text-lg">
        {summaryText}
      </p>
    </section>
  );
};

export default CampusFeaturesSection;
