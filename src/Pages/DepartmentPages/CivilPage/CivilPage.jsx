import React from "react";
import HeroSection from "../../../Components/Shared/HeroSection/HeroSection";

// Data
import civilPageData from "../../../Data/DepartmentsData/SinglePageData/civilPageData";
import AboutDepartment from "../../../Components/SectionComponents/SingleDepartmentSections/AboutDepartment";
import WhyChooseThisDepartment from "../../../Components/SectionComponents/SingleDepartmentSections/WhyChooseThisDepartment";
import CareerOpportunities from "../../../Components/SectionComponents/SingleDepartmentSections/CareerOpportunities";
import IndustrialPartners from "../../../Components/SectionComponents/SingleDepartmentSections/IndustrialPartners";
import EntrepreneurshipSection from './../../../Components/SectionComponents/SingleDepartmentSections/EntrepreneurshipSection';
import HigherStudySection from "../../../Components/SectionComponents/SingleDepartmentSections/HigherStudy";
import WhySquarePolytechnicSection from "../../../Components/SectionComponents/SingleDepartmentSections/WhySquarePolytechnicSection";
import AdmissionInfo from "../../../Components/Shared/AdmissionInfo/AdmissionInfo";

const CivilPage = () => {
  const {
    heroSection,
    aboutDepartment,
    aboutDepartmentVideo,
    whyChooseThisDepartment,
    careerOpportunities,
    industrialPartners,
    higherStudy,
    entrepreneurship,
    whySquarePolytechnic,
  } = civilPageData || {};

  return (
    <div>
      <HeroSection
        title={heroSection?.title}
        extraText={heroSection?.tagline}
        bgImage={heroSection?.background}
        buttonText={heroSection?.ctaButtons[0]?.text}
        buttonLink={heroSection?.ctaButtons[0]?.link}
        buttonText1={heroSection?.ctaButtons[1]?.text}
        buttonLink1={heroSection?.ctaButtons[1]?.link}
      />

      <section className="max-w-6xl mx-auto my-12 space-y-16 px-4">
        <AboutDepartment data={aboutDepartment} videoUrl={aboutDepartmentVideo} />
        
        <WhyChooseThisDepartment data={whyChooseThisDepartment} />
        <CareerOpportunities data={careerOpportunities} />
        <IndustrialPartners data={industrialPartners} />
      </section>

      {/* <section className="py-10 bg-green-50 px-4 md:px-10 lg:px-20"> */}
      {/* </section> */}

      {/* Optional Additional Sections */}
     <section className="max-w-6xl mx-auto my-12 space-y-16 px-4">
       <HigherStudySection data={higherStudy} />
      <EntrepreneurshipSection data={entrepreneurship} />
      <WhySquarePolytechnicSection data={whySquarePolytechnic} />
     </section>
      <AdmissionInfo />
    </div>
  );
};

export default CivilPage;
