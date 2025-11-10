import React from "react";
import HeroSection from "@components/Shared/HeroSection/HeroSection";

// Data
import computerPageData from "@data/DepartmentsData/SinglePageData/computerPageData";
import AboutDepartment from "@components/SectionComponents/SingleDepartmentSections/AboutDepartment";
import WhyChooseThisDepartment from "@components/SectionComponents/SingleDepartmentSections/WhyChooseThisDepartment";
import CareerOpportunities from "@components/SectionComponents/SingleDepartmentSections/CareerOpportunities";
import IndustrialPartners from "@components/SectionComponents/SingleDepartmentSections/IndustrialPartners";
import EntrepreneurshipSection from "@components/SectionComponents/SingleDepartmentSections/EntrepreneurshipSection";
import HigherStudySection from "@components/SectionComponents/SingleDepartmentSections/HigherStudy";
import WhySquarePolytechnicSection from "@components/SectionComponents/SingleDepartmentSections/WhySquarePolytechnicSection";
import AdmissionInfo from "@components/Shared/AdmissionInfo/AdmissionInfo";
import DepartmentMenu from "@components/Shared/DepartmentMenu/DepartmentMenu";
import SectionWrapper from "./../../../Components/Shared/SectionWrapper/SectionWrapper";
import ActionButton from "../../../Components/UI/ActionButton/ActionButton";

const ComputerPage = () => {
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
  } = computerPageData || {};

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
        <HigherStudySection data={higherStudy} />
      </SectionWrapper>
      <EntrepreneurshipSection data={entrepreneurship} />

      <SectionWrapper>
        <WhySquarePolytechnicSection data={whySquarePolytechnic} />
      </SectionWrapper>

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

export default ComputerPage;
