import React from "react";

// Image
import deptHero from "@assets/images/Departments_img/Department-banner.png";

// Shared Components
import AllDepartment from "@components/Shared/AllDepartment/AllDepartment";
import HeroSection from "@components/Shared/HeroSection/HeroSection";
import SectionTitle from "@components/Shared/Titles/SectionTitle/SectionTitle";
import SectionWrapper from "@components/Shared/SectionWrapper/SectionWrapper";

// Department Page Sections
import LabInfoParents from "@components/SectionComponents/DepartmentPageSections/LabInfo/LabInfoPreante";
import AboutSyllabus from "@components/SectionComponents/DepartmentPageSections/AboutSyllabus/AboutSyllabus";
import IndustrialTraining from "@components/Shared/IndustryInternshipTraining/IndustrialTraining";
import CareerAndHigherStudy from "@components/SectionComponents/DepartmentPageSections/CareerAndHigherStudy/CareerAndHigherStudy";

const DepartmentPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section>
        <HeroSection
          title="আমাদের ডিপার্টমেন্ট সমূহ"
          extraText="আমাদের ইন্সটিটিউটে বর্তমানে ৫টি বিভাগ রয়েছে। প্রতিটি বিভাগেই রয়েছে আধুনিক ল্যাব, দক্ষ শিক্ষক, এবং হাতে-কলমে শিক্ষার ব্যবস্থা।"
          bgImage={deptHero}
        />
      </section>

      {/* All Department Section */}
      <SectionWrapper>
        <AllDepartment />
      </SectionWrapper>

      {/* Lab Facilities */}
      <SectionWrapper>
        <div className=" mb-[-10px]">
          <SectionTitle title="আমাদের ল্যাব ফেসিলিটি" />
        </div>
        
          <LabInfoParents />
 
      </SectionWrapper>

      {/* Syllabus Section */}
      <AboutSyllabus />

      {/*Industrial Training Section */}
      <IndustrialTraining />

      {/*Career & Higher Study Section */}
      <CareerAndHigherStudy />
    </main>
  );
};

export default DepartmentPage;
