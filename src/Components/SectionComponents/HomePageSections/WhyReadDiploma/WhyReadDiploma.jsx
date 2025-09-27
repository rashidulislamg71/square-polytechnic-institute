import React from "react";
import SectionTitle from "../../../Shared/Titles/SectionTitle/SectionTitle";
import {
  FaGraduationCap,
  FaTools,
  FaRocket,
  FaBriefcase,
} from "react-icons/fa";
import ActionButton from "../../../UI/ActionButton/ActionButton";
import SubTitle from "../../../Shared/Titles/SubTitle/SubTitle";
import whyReadDiplomaData from "../../../../Data/HomePageJsonData/whyReadDiploma.json";

// WhyReadDiploma Component
// Props: diplomaInfo (from JSON or API)
const WhyReadDiploma = () => {
  const { diplomaInfo } = whyReadDiplomaData;

  // Optional: icon mapping for each section
  const icons = [FaGraduationCap, FaTools, FaRocket, FaBriefcase];

  return (
    <section
      className="w-full lg:w-4/5 mx-auto text-justify space-y-12 py-12"
      aria-label="Why Read Diploma Section"
    >
      {/* Section Title */}
      <header>
        <SectionTitle
          title={diplomaInfo.title}
          className="text-center text-2xl lg:text-3xl font-bold"
        />
      </header>

      {/* Diploma Sections */}
      <div className="flex flex-col space-y-0.5">
        {diplomaInfo.sections.map((section, idx) => {
          const Icon = icons[idx % icons.length]; // Assign icon dynamically

          return (
            <article
              key={section.id}
              className="bg-white p-6 rounded-2xl flex flex-col lg:flex-row items-start gap-4 border-l-4 border-[#27ae60] shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="text-green-600 text-3xl lg:text-4xl mt-1 flex-shrink-0">
                <Icon aria-hidden="true" />
              </div>

              {/* Text Content */}
              <div>
                <SubTitle
                  subTitle={section.subtitle}
                  className="text-lg lg:text-xl font-semibold"
                />
                <p className="mt-2 text-gray-700 leading-relaxed">
                  {section.text}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      {/* Call to Action Button */}
      <div className="mt-8 text-center">
        <ActionButton
          text={"বিস্তারিত পড়ুন..."} // SEO-friendly CTA text
          link={"/about_us"} // Link to about page
          bg_color={"bg-[#27ae60] hover:bg-green-600"}
          fontSize="text-[17px]"
        />
      </div>
    </section>
  );
};

export default WhyReadDiploma;
