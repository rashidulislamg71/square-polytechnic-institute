import React from "react";

// Image
import deptHero from "@assets/images/Departments_img/department_banner.png";

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
    <main className="space-y-20">
      {/* Hero Section */}
      <section>
        <HeroSection
          title="আমাদের ডিপার্টমেন্ট"
          extraText="আমাদের ইন্সটিটিউটে বর্তমানে ৫টি বিভাগ চালু আছে। প্রতিটি বিভাগেই রয়েছে আধুনিক ল্যাব, দক্ষ শিক্ষক, এবং হাতে-কলমে শিক্ষা।"
          bgImage={deptHero}
        />
      </section>

      {/* All Department Section */}
      <section>
        <AllDepartment />
      </section>

      {/* Lab Facilities */}
      <section>
        <div className="pt-16 mb-[-50px]">
          <SectionTitle title="আমাদের ল্যাব ফেসিলিটি" />
        </div>
        <LabInfoParents />
      </section>

      {/* Syllabus Section */}
      <section>
        <AboutSyllabus />
      </section>

      {/*Industrial Training Section */}
      <SectionWrapper>
        <IndustrialTraining />
      </SectionWrapper>

      {/*Career & Higher Study Section */}
      <SectionWrapper>
        <CareerAndHigherStudy />
      </SectionWrapper>
    </main>
  );
};

export default DepartmentPage;
