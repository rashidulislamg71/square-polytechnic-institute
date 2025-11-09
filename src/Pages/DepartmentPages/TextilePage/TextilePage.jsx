import React from "react";
import HeroSection from "@components/Shared/HeroSection/HeroSection";

// Data
import textileDepartmentData from "@data/DepartmentsData/SinglePageData/textitlePageData";
import AboutDepartment from "@components/SectionComponents/SingleDepartmentSections/AboutDepartment";
import WhyChooseThisDepartment from "@components/SectionComponents/SingleDepartmentSections/WhyChooseThisDepartment";
import CareerOpportunities from "@components/SectionComponents/SingleDepartmentSections/CareerOpportunities";
import IndustrialPartners from "@components/SectionComponents/SingleDepartmentSections/IndustrialPartners";
import EntrepreneurshipSection from "@components/SectionComponents/SingleDepartmentSections/EntrepreneurshipSection";
import HigherStudySection from "@components/SectionComponents/SingleDepartmentSections/HigherStudy";
import WhySquarePolytechnicSection from "@components/SectionComponents/SingleDepartmentSections/WhySquarePolytechnicSection";
import AdmissionInfo from "@components/Shared/AdmissionInfo/AdmissionInfo";
import SectionWrapper from "@components/Shared/SectionWrapper/SectionWrapper";

import DepartmentMenu from "@components/Shared/DepartmentMenu/DepartmentMenu";
import ActionButton from "../../../Components/UI/ActionButton/ActionButton";

const TextilePage = () => {
  const {
    heroSection,
    aboutDepartment,
    title,
    aboutDepartmentVideo,
    whyChooseThisDepartment,
    careerOpportunities,
    industrialPartners,
    higherStudy,
    entrepreneurship,
    whySquarePolytechnic,
  } = textileDepartmentData || {};

  return (
    <div>
      <HeroSection
        title={heroSection?.title}
        extraText={heroSection?.tagline}
        bgImage={heroSection?.background}
        buttons={heroSection?.ctaButtons}
      />

      <SectionWrapper>
        <AboutDepartment
          data={aboutDepartment}
          sectionTitle={title}
          videoUrl={aboutDepartmentVideo}
        />
        <WhyChooseThisDepartment data={whyChooseThisDepartment} />
        <CareerOpportunities data={careerOpportunities} />
        <IndustrialPartners data={industrialPartners} />
      </SectionWrapper>
      <SectionWrapper>
        <section className="pb-20">
          <HigherStudySection data={higherStudy} />
        </section>
      </SectionWrapper>
      <EntrepreneurshipSection data={entrepreneurship} />

      <section className="pt-20">
        <WhySquarePolytechnicSection data={whySquarePolytechnic} />
      </section>

      <div className="flex justify-center flex-col items-center mb-15">
        <AdmissionInfo />
        <ActionButton link={"/admission"} text={"Apply Now"} />
      </div>
      <div className="py-10">
        <DepartmentMenu />
      </div>
    </div>
  );
};
export default TextilePage;
